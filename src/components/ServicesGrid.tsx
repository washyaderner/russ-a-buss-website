import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Mic, Headphones, Radio, Clock, Users } from 'lucide-react';

const services = [
  {
    title: 'Mix & Master',
    price: '$200 ea/ $50hr',
    description: [
      'Pricing depends on scope of project',
      'Request Google Drive link for uploading wavs',
      'Upload audio in wav format with -6db headroom',
      'We\'ll have a convo about your vision for best results'
    ],
    icon: Headphones,
  },
  {
    title: 'Custom Tracks',
    price: '$100-$400',
    description: [
      'Creating music for an existing recording',
      'Music for spoken word, mixtape, podcast, intros',
      'Cost depends on the project. Reach out for a quote',
      'We\'ll discuss your vision & upload existing files'
    ],
    icon: Music,
  },
  {
    title: 'Instrumentals',
    price: '$50-$2k',
    description: [
      'See pricing above, and details on the Services page',
      'Head to the Beats page to shop for instrumentals',
      'Exclusive and Non-Exclusive licensing options',
      'Bundle discounts & coupon codes for subscribers'
    ],
    icon: Radio,
  },
  {
    title: 'Studio Time',
    price: '$50/hr',
    description: [
      'Record vocals, instrumentals, acoustic sets',
      'Access to terabytes of samples and instruments',
      'Professionally sound treated studio & plenty of gear',
      'Recording equipment & software for video content'
    ],
    icon: Clock,
  },
  {
    title: 'Female & Male Vox',
    price: '$100-$200',
    description: [
      'Price difference based on prewritten vs custom',
      'For female vox examples, see "Seed" & "Sloth"',
      'Female & Male vox textures and samples, beat tags',
      'Recordings bounced in wav format, dry or wet'
    ],
    icon: Mic,
  },
  {
    title: 'DJ For Your Event',
    price: '$500-$2000/ $150/hr',
    description: [
      'Laptop, PA system, mixer, microphones, lighting',
      'MC, help with structure, sound checks all planned',
      'If event planning is needed, I partner with a planner',
      'Playlists ready to go, uploading site for your picks'
    ],
    icon: Users,
  },
];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <Card key={index} className="bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 text-white shadow-xl">
          <CardHeader>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
            <p className="text-lg font-semibold">{service.price}</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {service.description.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServicesGrid;