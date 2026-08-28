import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '';
const STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '';

// Create Shopify client (will fail gracefully if env vars missing)
const client = SHOPIFY_STORE_DOMAIN && STOREFRONT_ACCESS_TOKEN
  ? createStorefrontApiClient({
      storeDomain: SHOPIFY_STORE_DOMAIN,
      // Was pinned to 2025-01, which is past Shopify's ~12-month support
      // window as of today. Bumped to the last version before 2026-07's
      // breaking changes to cart/product query structures — upgrading
      // further will need the queries below re-tested against a live store.
      apiVersion: '2026-04',
      publicAccessToken: STOREFRONT_ACCESS_TOKEN,
    })
  : null;

// Helper function for making GraphQL requests
export async function shopifyFetch<T>({
  query,
  variables = {},
}: {
  query: string;
  variables?: Record<string, any>;
}): Promise<T | null> {
  if (!client) {
    console.warn('Shopify client not configured. Set environment variables to enable API calls.');
    return null;
  }

  try {
    const { data, errors } = await client.request(query, { variables });

    if (errors) {
      console.error('Shopify GraphQL errors:', errors);
      return null;
    }

    return data as T;
  } catch (error) {
    console.error('Shopify fetch error:', error);
    return null;
  }
}

// Product fragment for reuse
const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    title
    handle
    description
    descriptionHtml
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      url
      altText
      width
      height
    }
    images(first: 10) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    variants(first: 50) {
      edges {
        node {
          id
          title
          availableForSale
          quantityAvailable
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          image {
            url
            altText
            width
            height
          }
        }
      }
    }
    tags
  }
`;

// Get all products
export async function getProducts(first: number = 10) {
  const query = `
    ${PRODUCT_FRAGMENT}
    query GetProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            ...ProductFields
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{ products: any }>({
    query,
    variables: { first },
  });

  return data?.products?.edges.map((edge: any) => edge.node) || [];
}

// Get single product by handle
export async function getProduct(handle: string) {
  const query = `
    ${PRODUCT_FRAGMENT}
    query GetProduct($handle: String!) {
      productByHandle(handle: $handle) {
        ...ProductFields
      }
    }
  `;

  const data = await shopifyFetch<{ productByHandle: any }>({
    query,
    variables: { handle },
  });

  return data?.productByHandle || null;
}

// Get collection by handle
export async function getCollection(handle: string, first: number = 20) {
  const query = `
    ${PRODUCT_FRAGMENT}
    query GetCollection($handle: String!, $first: Int!) {
      collectionByHandle(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        image {
          url
          altText
          width
          height
        }
        products(first: $first) {
          edges {
            node {
              ...ProductFields
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{ collectionByHandle: any }>({
    query,
    variables: { handle, first },
  });

  if (!data?.collectionByHandle) return null;

  return {
    ...data.collectionByHandle,
    products: data.collectionByHandle.products.edges.map((edge: any) => edge.node),
  };
}

// Get all collections
export async function getCollections(first: number = 10) {
  const query = `
    query GetCollections($first: Int!) {
      collections(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            image {
              url
              altText
              width
              height
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{ collections: any }>({
    query,
    variables: { first },
  });

  return data?.collections?.edges.map((edge: any) => edge.node) || [];
}

// Create cart
export async function createCart() {
  const query = `
    mutation CreateCart {
      cartCreate {
        cart {
          id
          checkoutUrl
          lines(first: 10) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    product {
                      title
                      featuredImage {
                        url
                        altText
                      }
                    }
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{ cartCreate: any }>({ query });
  return data?.cartCreate?.cart || null;
}

// Add to cart
export async function addToCart(cartId: string, variantId: string, quantity: number = 1) {
  const query = `
    mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first: 50) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    product {
                      title
                      featuredImage {
                        url
                        altText
                        width
                        height
                      }
                    }
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{ cartLinesAdd: any }>({
    query,
    variables: {
      cartId,
      lines: [{ merchandiseId: variantId, quantity }],
    },
  });

  return data?.cartLinesAdd?.cart || null;
}

// Update cart line
export async function updateCartLine(cartId: string, lineId: string, quantity: number) {
  const query = `
    mutation UpdateCartLine($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first: 50) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    product {
                      title
                      featuredImage {
                        url
                        altText
                      }
                    }
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{ cartLinesUpdate: any }>({
    query,
    variables: {
      cartId,
      lines: [{ id: lineId, quantity }],
    },
  });

  return data?.cartLinesUpdate?.cart || null;
}

// Remove from cart
export async function removeFromCart(cartId: string, lineId: string) {
  const query = `
    mutation RemoveFromCart($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          id
          checkoutUrl
          lines(first: 50) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    product {
                      title
                      featuredImage {
                        url
                        altText
                      }
                    }
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{ cartLinesRemove: any }>({
    query,
    variables: {
      cartId,
      lineIds: [lineId],
    },
  });

  return data?.cartLinesRemove?.cart || null;
}

// Get cart
export async function getCart(cartId: string) {
  const query = `
    query GetCart($cartId: ID!) {
      cart(id: $cartId) {
        id
        checkoutUrl
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    title
                    featuredImage {
                      url
                      altText
                      width
                      height
                    }
                  }
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{ cart: any }>({
    query,
    variables: { cartId },
  });

  return data?.cart || null;
}
