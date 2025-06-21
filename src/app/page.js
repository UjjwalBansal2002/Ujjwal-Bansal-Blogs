import Link from 'next/link';

export const metadata = {
  title: 'Ujjwal Bansal – Full-Stack Web Developer',
  description: 'Next.js developer portfolio with Markdown blog, projects, and contact.',
};

export default function HomePage() {
  return (
    <main className="flex flex-col p-3.5 items-center justify-center px-4 text-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black transition-colors">
      <img
        src="https://static.vecteezy.com/system/resources/previews/018/716/098/non_2x/programmer-line-gradient-icon-vector.jpg"
        alt="Ujjwal Bansal"
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-600 shadow-lg"
      />
      <h1 className="text-5xl font-extrabold mb-4 font-poppins text-blue-600 dark:text-blue-400">
        Hi, I’m <span className="text-[#f59e42] dark:text-orange-400">Ujjwal</span> 👋
      </h1>
      <p className="text-lg font-inter text-slate-700 dark:text-slate-300 max-w-xl mb-8">
        Full-stack web developer specializing in building modern apps with <strong className='text-[#f59e42]'>Next.js</strong>, <strong className='text-[#f59e42]'>MongoDB</strong>, and <strong className='text-[#f59e42]'>Tailwind CSS</strong>.
        I love sharing dev knowledge and building open-source projects.
      </p>




      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/blog">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition animate-bounce">
            📚 Read My Blog <span className="ml-2 bg-white hover:bg-[#f59e42] hover:text-white text-[#f59e42]  px-2 py-0.5 rounded text-xs font-bold">New</span>
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

      <div className="mt-16 w-full max-w-3xl text-left">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Latest Articles</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">How to Build a Markdown Blog with Next.js</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">A step-by-step guide to creating a fast, modern blog using Next.js and Markdown.</p>
            <Link href="/blog/markdown-blog-nextjs" className="text-blue-600 dark:text-blue-400 hover:underline">Read more →</Link>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Deploying Next.js Apps on Vercel</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Learn how to deploy your Next.js projects for free with Vercel.</p>
            <Link href="/blog/deploy-nextjs-vercel" className="text-blue-600 dark:text-blue-400 hover:underline">Read more →</Link>
          </div>
        </div>
        <div className="mt-4 text-right">
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">View all articles →</Link>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-6">
        <div className="text-center">
          <span className="block text-2xl font-bold text-blue-600">25+</span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">Articles</span>
        </div>
        <div className="text-center">
          <span className="block text-2xl font-bold text-blue-600">1K+</span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">Monthly Readers</span>
        </div>
      </div>
    </main>
  );
}
