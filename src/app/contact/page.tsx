import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from '@/components/ContactForm';
import ReviewsSection from '@/components/ReviewsSection';

export const metadata = {
  title: 'Contact Russ A Buss - Music Producer',
  description: 'Get in touch with Russ A Buss for your next music production project. Professional services for all your audio needs.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Russ A Buss</h1>

      <Card className="bg-slate-100 dark:bg-slate-800">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/contact-image.jpg"
                alt="Russ A Buss Studio"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <Card className="bg-white dark:bg-slate-700">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">YOUR DREAMS IN ASMR</h2>
                  <p className="mb-4">
                    Send me a message using the form below to reach out with any questions about my services. Whether you're interested in working with me on your next project or just want to know more about my offerings, feel free to reach out either way.
                  </p>
                  <p className="mb-4">
                    Even if you don't see your type of project listed on the services page, please reach out anyway and let me know what you're working on. Every time someone has approached me with something I've never done, I've always managed to bring my A game and produce better results than anticipated.
                  </p>
                  <p>
                    I'm looking forward to helping you materialize your next projects!
                  </p>
                </CardContent>
              </Card>
              <ContactForm />
            </div>
          </div>
        </CardContent>
      </Card>

      <ReviewsSection />
    </div>
  );
}