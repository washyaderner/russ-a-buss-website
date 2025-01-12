import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface ServiceSectionProps {
  title: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  isImageLeft: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, content, imageUrl, imageAlt, isImageLeft }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {isImageLeft && (
        <div className="w-full md:w-1/2">
          <Image src={imageUrl} alt={imageAlt} width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
      )}
      <Card className="w-full md:w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>
      {!isImageLeft && (
        <div className="w-full md:w-1/2">
          <Image src={imageUrl} alt={imageAlt} width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
};

export default ServiceSection;