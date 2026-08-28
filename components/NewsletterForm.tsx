'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // TODO: Connect to your newsletter service (Klaviyo, Mailchimp, etc.)
      // For now, just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setMessage('Thanks for subscribing!');
      setEmail('');
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === 'loading'}
          className="flex-1 px-6 py-4 bg-paper-dim border border-silver/20 rounded focus:outline-none focus:border-pink text-ink placeholder:text-silver disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      
      {message && (
        <p className={`mt-4 text-sm ${status === 'success' ? 'text-pink' : 'text-red-400'}`}>
          {message}
        </p>
      )}
      
      <p className="mt-4 text-xs text-silver">
        By subscribing, you agree to our Privacy Policy and consent to receive updates.
      </p>
    </form>
  );
}
