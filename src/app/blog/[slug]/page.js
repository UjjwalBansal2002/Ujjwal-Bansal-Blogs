import { getPostBySlug, getPostSlugs } from '../../../lib/posts';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

// ✅ Add metadata function for SEO
export async function generateMetadata(props) {
  const { slug } = await props.params; // ✅ Correct destructuring
  const post = getPostBySlug(slug);

  return {
    title: post.meta.title,
    description: post.meta.description || post.meta.title,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description || post.meta.title,
      type: 'article',
      url: `https://your-domain.com/blog/${slug}`,
    },
  };
}

export default async function Page(props ) {
  const { slug } = await props.params;

  const post = getPostBySlug(slug);
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.meta.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.meta.date}</p>
      <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}

