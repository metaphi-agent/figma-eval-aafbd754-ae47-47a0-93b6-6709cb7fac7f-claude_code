import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="bg-primary py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
          JOIN SHOPPING COMMUNITY TO
          <br />
          GET MONTHLY PROMO
        </h2>
        <p className="text-white mb-8">
          Type your email down below and be young wild generation
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Add your email here"
            className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  );
}