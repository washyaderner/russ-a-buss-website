import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: 'About Russ A Buss - Music Producer',
  description: 'Learn about Russ A Buss, a self-taught music producer with over a decade of experience in creating immersive soundscapes and pushing creative boundaries.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="bg-slate-100 dark:bg-slate-800">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <Image
                src="/images/russ-a-buss.jpg"
                alt="Russ A Buss"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <h1 className="text-3xl font-bold mb-4">Why hire me? …The TLDR</h1>
              
              <p>
                Self-taught producer with a passion for building immersive soundscapes, blending creativity and precision. My approach balances experimentation with structure, ensuring high-quality results that evoke deep emotions. With over a decade of experience, I offer:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li><strong>Organization:</strong> A constantly updated file sharing link for all project files.</li>
                <li><strong>Efficiency:</strong> Fast turnaround without compromising quality.</li>
                <li><strong>Creativity:</strong> Unique, boundary-pushing ideas and sound design.</li>
                <li><strong>Honest feedback:</strong> Open communication for the best results.</li>
                <li><strong>Resources:</strong> Extensive gear, sound library, and access to talented artists.</li>
                <li><strong>Experience:</strong> Mastery in Pro Tools and top-tier plugins.</li>
                <li><strong>Extras:</strong> Flexible payment options and promotional support.</li>
              </ul>

              <p>
                You're not hiring a by-the-book producer who stays inside the lines. I love to push creative boundaries and try new ways of doing things. My approach blends technical precision with an experimental edge, ensuring your project is not only delivered on time but with exceptional quality. I keep everything organized and accessible through a live-updated Google Drive, so you'll always have access to your files.
              </p>

              <p>
                When it comes to creativity, I rely on instinct and a deep understanding of how music makes people feel. This allows me to deliver fresh, innovative sound designs that stand out. I'm committed to honest communication, working closely with you to ensure the final product perfectly aligns with your vision.
              </p>

              <p>
                With access to a massive library of sounds, instruments, and talented musicians, I have all the tools to take your project to the next level. My workflow is efficient, but I never sacrifice quality for speed, and I offer flexible payment options as well as helping you promote and distribute your music when it's complete.
              </p>

              <p>
                No matter your background or project, working with Russ A Buss will get you one of a kind results. My goal is always to exceed expectations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}