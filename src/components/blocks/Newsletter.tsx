import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="bg-[#EBD96B] py-16 px-[100px]">
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-[40px] font-black text-black tracking-wide">
          JOIN SHOPPING COMMUNITY TO
          <br />
          GET MONTHLY PROMO
        </h2>
        <p className="text-lg text-black mt-4">
          Type your email down below and be young member
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex gap-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Add your email here"
            className="flex-1 px-6 py-4 text-lg border-2 border-black bg-transparent placeholder-black/50 focus:outline-none focus:bg-white/20"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white font-medium px-10 py-4 text-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'SENDING...' : 'SEND'}
          </button>
        </form>
      </div>
    </section>
  );
}
