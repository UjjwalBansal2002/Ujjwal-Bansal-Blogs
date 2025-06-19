import Link from 'next/link';

export const metadata = {
  title: 'Ujjwal Bansal – Web Developer & Blogger',
  description: 'Welcome to my personal blog where I write about web development, JavaScript, and tech tips.',
};

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">👋 Hi, I'm Ujjwal!</h1>
      <p className="text-lg text-gray-600 mb-6">
        I write tutorials, dev tips, and project stories for aspiring web developers.
      </p>
      <Link
        href="/blog"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Read My Blog 📚
      </Link>
    </main>
  );
}
