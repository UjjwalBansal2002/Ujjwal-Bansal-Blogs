'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SearchablePostList({ posts }) {
  const [search, setSearch] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.meta.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search blog posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
      />

      <ul className="space-y-4">
        {filteredPosts.map((post, i) => (
          <li key={i} className="border-b pb-2">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                {post.meta.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">{post.meta.date}</p>
          </li>
        ))}
        {filteredPosts.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400">No posts found.</p>
        )}
      </ul>
    </div>
  );
}
