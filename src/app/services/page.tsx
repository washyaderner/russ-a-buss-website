import MyApproach from '@/components/MyApproach';
import ServiceSection from '@/components/ServiceSection';

export default function ServicesPage() {
  const services = [
    {
      title: "Mixing & Mastering",
      content: `Balance. That's what's needed in a professional mix. Your audio needs to sound pristine whether you're listening on your phone's speaker, studio headphones, earbuds, a sound bar, bluetooth speaker, car stereo, or at a show performing w/ your instrumental. Every mix I work on needs to pass all of those tests.

My studio is fully sound treated with professional grade sound treatment, from 2″ thick panels to bass traps. If you're interested, I highly recommend purchasing through Sound Assured: soundassured.com/collections

Things to consider…
Quality: The better your initial recordings/ audio starts out, the easier it is to maximize its potential
Headroom: Make sure you leave plenty of headroom; -6db will get us the best results in the mix
Wet vs Dry: When bouncing your audio files, disable or remove all plugins/ FX. I'll need a dry copy
Clips: Try to avoid clips/clicks/pops by stepping back from the mic & using a pop guard

I will absolutely work some serious magic on every project, but following these steps will help us both.`,
      imageUrl: "/images/mixing-mastering.jpg",
      imageAlt: "Mixing and Mastering Studio"
    },
    // Add other services here with their respective images
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <MyApproach />

      {services.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          content={service.content}
          imageUrl={service.imageUrl}
          imageAlt={service.imageAlt}
          isImageLeft={index % 2 !== 0}
        />
      ))}
    </div>
  );
}