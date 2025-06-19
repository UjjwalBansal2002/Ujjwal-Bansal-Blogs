'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    const res = await fetch('https://formspree.io/f/xdkzlnly', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      form.reset(); // ✅ Clear form fields
      setShowToast(true); // ✅ Show toast
      setTimeout(() => setShowToast(false), 4000); // ⏱ Hide toast after 4s
    } else {
      alert('❌ Something went wrong. Please try again.');
    }
  }

  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-10" id="contact">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">📥 Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            required
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* ✅ Toast */}
      {showToast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-md transition">
          ✅ Message sent successfully!
        </div>
      )}
    </section>
  );
}
