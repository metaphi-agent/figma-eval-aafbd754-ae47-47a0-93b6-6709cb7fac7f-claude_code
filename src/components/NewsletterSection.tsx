import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setStatus('success');
      setTimeout(() => {
        setEmail('');
        setStatus('idle');
      }, 3000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="bg-[#E6C744] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white">
            JOIN SHOPPING COMMUNITY TO
            <br />
            GET MONTHLY PROMO
          </h2>

          <p className="text-lg lg:text-xl text-white/90">
            Type your email down below and be young wild generation
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Add your email here"
              className="flex-1 px-6 py-4 rounded text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-12 py-4 rounded hover:bg-gray-800 transition-colors font-bold whitespace-nowrap"
            >
              SEND
            </button>
          </form>

          {status === 'success' && (
            <p className="text-white font-medium">Thank you for subscribing!</p>
          )}
          {status === 'error' && (
            <p className="text-red-700 font-medium">Please enter a valid email address</p>
          )}
        </div>
      </div>
    </section>
  );
}
