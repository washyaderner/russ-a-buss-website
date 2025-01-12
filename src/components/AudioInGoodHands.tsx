import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AudioInGoodHands = () => {
  return (
    <Card className="bg-slate-800 text-white shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Your audio is in good hands</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          When you hire someone to work on a music project, you need them to care as much about the end result as you do. It's all too common to hear stories of producers drowning out vocals, losing session files or vocal tracks, pushing back timelines, or failing to deliver the desired results.
        </p>
        <p className="mb-4">
          This is not how I operate. I'm committed to ensuring your session files are backed up on a second hard drive, and that all drafts and mixes are continually updated in a dedicated Google Drive folder as we work on the project. My ultimate goal is to deliver a final copy you'll be proud to share with the world.
        </p>
        <p className="mb-4">
          First, we'll talk and make sure we're both on the same page about your vision. We can communicate via text, email, or video call, whichever suits you best. Ultimately, my goal is to ensure that we achieve the best possible outcome for your project.
        </p>
        <p>
          With well over a decade of experience, alongside my vast library of samples and instruments, I'm confident that I can help you take your project to the next level. Click "Examples" to check out what I've produced, or fill out the form at the bottom of this page so we can talk about your project!
        </p>
      </CardContent>
    </Card>
  );
};

export default AudioInGoodHands;