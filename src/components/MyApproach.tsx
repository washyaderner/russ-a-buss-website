import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MyApproach = () => {
  return (
    <Card className="max-w-3xl mx-auto bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 text-white shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">MY APPROACH WITH ANY PROJECT…</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Each project I take on has different needs, and I want to make sure you're 100% happy with the final copy. In order to start off on the right foot, we will talk about your vision via text, email, Zoom, FaceTime, whatever works for you.
        </p>
        <p>
          You need to feel comfortable being honest with me. If you don't like even one sliver of what you're hearing, all you need to do is tell me, so we can fix it. We'll do this till it's complete.
        </p>
        <p>
          It's extremely rare that I am approached by someone with a project I don't feel I'd be the best fit for, but to avoid wasting anyone's time and money, each project is subject to review. This will ensure you get the best results no matter what.
        </p>
        <p>
          My forte has been hip hop, ambient & electronic music, but that hasn't stopped me from venturing into music backing for spoken word, a non published set of professionally recorded and mixed karaoke tracks, recording live acoustic songs and shows, you name it. Bottom line is I'm very confident you'll love working with me, so check out the details below on the service you'd like to hire me for, and shoot me a message so we can talk shop. I look forward to hearing from you!
        </p>
      </CardContent>
    </Card>
  );
};

export default MyApproach;