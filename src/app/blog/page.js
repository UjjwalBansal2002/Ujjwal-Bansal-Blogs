import Link from 'next/link';
import { getPostSlugs, getPostBySlug } from '@/lib/posts';

export default function BlogHome() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug.replace(/\.md$/, '')));


  return (
    <main className="max-w-5xl mx-auto px-4 py-8 flex-1">
      <h1 className="text-3xl font-bold mb-8">📝 Blogs</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col h-full">
              <img
                src={post.meta.coverImage || 'default-cover.jpg'}
                alt={post.meta.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-2">{post.meta.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{post.meta.description}</p>
                <span className="text-blue-600 dark:text-blue-400 font-medium mt-auto">Read more →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
