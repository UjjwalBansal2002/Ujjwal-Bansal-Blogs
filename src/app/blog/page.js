import { getPostSlugs, getPostBySlug } from '@/lib/posts';
import SearchablePostList from '@/components/SearchablePostList'; // 👇 we'll make this

export default function BlogHome() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug.replace(/\.md$/, '')));

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">📝 Blog</h1>
      <SearchablePostList posts={posts} />
    </main>
  );
}
