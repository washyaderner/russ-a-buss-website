import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BlogSidebar = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Search</h2>
        <div className="flex">
          <Input type="text" placeholder="Search blog..." className="mr-2" />
          <Button>Search</Button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Music Production</a></li>
          <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Mixing Techniques</a></li>
          <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Industry Insights</a></li>
          <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Gear Reviews</a></li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">The Art of Music Production</a></li>
          <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Mastering the Mix: Tips and Tricks</a></li>
          <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">5 Essential Plugins for Every Producer</a></li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;