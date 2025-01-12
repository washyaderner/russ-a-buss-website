import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    title: 'MP3',
    price: '$50',
    features: [
      '320 kbps',
      'Mp3 File',
      'Structure As-Is',
      'Non-Exclusive License',
      'Sell 5k Copies',
      '10k Streams',
      'Bundle Discounts'
    ]
  },
  {
    title: 'WAV',
    price: '$80',
    features: [
      '24 bit 48 kHz',
      'Wav File',
      '1 Structure Edit',
      'Non-Exclusive License',
      'Sell 10k Copies',
      '100k Streams',
      'Bundle Discounts'
    ]
  },
  {
    title: 'STEMS',
    price: '$249',
    features: [
      '24 bit 48 kHz',
      'Wav Stems',
      'Infinite Edits',
      'Non-Exclusive License',
      'Sell 20k Copies',
      '250k Streams',
      'Discount on Mix & Master'
    ]
  },
  {
    title: 'EXCLUSIVE',
    price: '$2k',
    features: [
      'You get it all',
      'All Wav Stems',
      'Infinite Edits',
      'Exclusive License',
      'Sell Unlimited Copies',
      'Unlimited Streams',
      'Discount on Mix & Master'
    ]
  }
];

const InstrumentalPricing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {pricingPlans.map((plan, index) => (
        <Card key={index} className="h-full bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 text-white">
          <CardHeader>
            <CardTitle className="text-xl lg:text-2xl font-bold">{plan.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-4">{plan.price}</p>
            <ul className="space-y-1 lg:space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-xs lg:text-sm">{feature}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="w-full text-xs lg:text-sm">VIEW LICENSE</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default InstrumentalPricing;