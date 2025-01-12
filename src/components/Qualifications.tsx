import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const qualifications = [
  {
    title: 'Qualifications',
    items: [
      '10+ yrs experience Producing & Mixing in Pro Tools',
      '8 yrs exp Mastering in iZotope Ozone',
      'Piano player since 10 years old',
      'Co-Owner of Primo Team Productions record label',
      '5 yrs exp in music distribution via Distrokid and ASCAP',
      'Personal music released – 1 full album, 1 EP, 32 singles',
      'All releases produced, mixed mastered, created/ purchased album art, distributed',
      'Notable client projects:',
      '- Leon McConnell Twenty Poems - Produce, mix & master 20 track album in 3 months',
      '- Voodoo Bed - 5 song EP, title song = 30hrs of mixing 14 tracks & pitch correction'
    ],
  },
  {
    title: 'My Gear',
    items: [
      '2019 iMac 27″ 3GHz 6-Core i5 w/ 1 TB SSD & 64GB RAM',
      'Pro Tools Studio 2024',
      'iZotope Ozone 10',
      'NI Komplete 14',
      'Maschine MK3 | M Audio 88 | Akai MPK Mini',
      'Rokit 5 monitors & Rokit 10 sub',
      'Beyerdynamic DT 770 Pro 80 ohm Mixing Headphones',
      'Zoom H1N stereo mic for field recordings',
      'DJI Action 4 (2)',
      'All projects produced in sound treated studio'
    ],
  },
];

const Qualifications = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      {qualifications.map((qual, index) => (
        <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold">{qual.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              {qual.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm mb-2">{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-teal-500 glow"></div>
    </div>
  );
};

export default Qualifications;