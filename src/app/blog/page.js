import { getAllPosts } from '../../lib/posts';
import Link from 'next/link';

export const metadata = {
  title: 'My Blog | Ujjwal Bansal',
  description: 'Read articles and tutorials on web development, JavaScript, Tailwind CSS, and more.',
};

export default function BlogHome() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">📚 My Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                {post.meta.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">{post.meta.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
