import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogPost = ({ post }) => {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800">
      <CardHeader>
        <div className="relative w-full h-48 mb-4">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
          By {post.author} | {new Date(post.date).toLocaleDateString()}
        </p>
        <p className="mb-4">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} passHref>
          <Button variant="outline">Read More</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogPost;