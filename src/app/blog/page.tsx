import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import BlogPost from '@/components/BlogPost';
import BlogSidebar from '@/components/BlogSidebar';

// In a real application, this data would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "The Art of Music Production",
    excerpt: "Discover the intricacies of music production and how to create chart-topping hits.",
    date: "2023-06-01",
    author: "Russ A Buss",
    imageUrl: "/images/blog/music-production.jpg",
    slug: "art-of-music-production"
  },
  {
    id: 2,
    title: "Mastering the Mix: Tips and Tricks",
    excerpt: "Learn professional mixing techniques to take your tracks to the next level.",
    date: "2023-05-15",
    author: "Russ A Buss",
    imageUrl: "/images/blog/mastering-mix.jpg",
    slug: "mastering-mix-tips-tricks"
  },
  // Add more blog posts as needed
];

export const metadata = {
  title: 'Russ A Buss Blog - Music Production Insights',
  description: 'Explore the latest in music production, mixing, and industry insights from Russ A Buss.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-full h-64 mb-8">
        <Image
          src="/images/blog-header.jpg"
          alt="Russ A Buss Blog"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-slate-900 bg-opacity-60 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Russ A Buss Blog</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <main className="w-full md:w-2/3 space-y-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
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