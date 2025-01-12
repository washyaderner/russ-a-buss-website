import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import BlogSidebar from '@/components/BlogSidebar';

// This would typically come from a database or CMS
const getPostData = (slug) => {
  // Placeholder data
  return {
    title: "The Art of Music Production",
    content: `...`,
    date: "2023-06-01",
    author: "Russ A Buss",
    imageUrl: "/images/blog/music-production.jpg"
  };
};

// Add this function to generate static params for all blog posts
export async function generateStaticParams() {
  // In a real application, you would fetch this data from your CMS or database
  const posts = [
    { slug: 'art-of-music-production' },
    { slug: 'mastering-mix-tips-tricks' },
    // Add more slugs as needed
  ];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPostData(params.slug);
  return {
    title: `${post.title} | Russ A Buss Blog`,
    description: post.content.substring(0, 160),
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostData(params.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <main className="w-full md:w-2/3">
          <Card className="bg-slate-100 dark:bg-slate-800">
            <CardContent className="p-6">
              <div className="relative w-full h-64 mb-6">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={800}
                  height={400}
                  layout="responsive"
                  className="rounded-lg"
                />
              </div>
              <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                By {post.author} | {new Date(post.date).toLocaleDateString()}
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.content }} className="prose dark:prose-invert max-w-none" />
            </CardContent>
          </Card>
        </main>
        <aside className="w-full md:w-1/3">
          <Card className="bg-slate-100 dark:bg-slate-800">
            <CardContent className="p-6">
              <BlogSidebar />
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}