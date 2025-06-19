import Link from 'next/link';

export const metadata = {
  title: 'Ujjwal Bansal – Full-Stack Web Developer',
  description: 'Next.js developer portfolio with Markdown blog, projects, and contact.',
};

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black transition-colors">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
        Hi, I’m <span className="text-blue-600 dark:text-blue-400">Ujjwal</span> 👋
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-8">
        Full-stack web developer specializing in building modern apps with <strong>Next.js</strong>, <strong>MongoDB</strong>, and <strong>Tailwind CSS</strong>.
        I love sharing dev knowledge and building open-source projects.
      </p>
      

      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/blog">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            📚 Read My Blog
          </button>
        </Link>
        <a href="#projects">
          <button className="px-6 py-3 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition">
            🛠 View Projects
          </button>
        </a>
      </div>

      {/* Optional: fake project section to scroll */}
      <div id="projects" className="mt-20 w-full max-w-3xl text-left">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Featured Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Client Appointment System</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Built with MERN stack, JWT auth, and admin dashboard.</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Hair Studio Website</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Dynamic service showcase, appointment booking & admin panel.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
