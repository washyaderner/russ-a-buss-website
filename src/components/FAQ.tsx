import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqItems = [
  {
    title: "Instrumentals – Quality? Edits? Exclusive?",
    content: [
      "Each beat has a full mix with headroom for the best recording experience",
      "Mp3 – 320Kbps mp3s - Comes as is, no edits by me",
      "Wav – 24 bit 48 kHz – I will do one edit of the song's structure upon request",
      "Exclusive – Previous clients can still use their copy, no more sales of that beat"
    ]
  },
  {
    title: "Producing Custom Content",
    content: [
      "This includes but is not limited to producing music/ soundscapes for:",
      "Podcasts, Spoken Word, Commercials, TV Shows & Movies,",
      "Games, Crypto/ NFT Projects, Websites",
      "I will send an upload link if you need to send me your original content",
      "All projects are reviewed, in order to ensure it's a good fit"
    ]
  },
  {
    title: "Mixing & Mastering – What's the process?",
    content: [
      "First we'll have a conversation about your plans with the project",
      "As work progresses, you'll receive links to draft, mix and master folders",
      "We'll continually keep in touch to ensure we're still on the right track",
      "We're done when you're happy with the final product"
    ]
  },
  {
    title: "Pricing",
    content: [
      "All project",
      "Standard pricing is set at a fixed rate, but subject to hourly price",
      "if more work than expected needs to be done",
      "We use Stripe, PayPal, Venmo, and Crypto (subject to regulations)",
      "Your order may be subject to tax, depending on where you live",
      "Once your project is complete, reviews are greatly appreciated!"
    ]
  }
];

const FAQ = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {faqItems.map((item, index) => (
        <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {item.content.map((point, pointIndex) => (
                <li key={pointIndex} className="text-sm mb-2">
                  <span className="pl-2">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FAQ;