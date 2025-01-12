import Image from 'next/image';

const FeaturedImage = () => {
  return (
    <div className="max-w-1/2 mx-auto">
      <div className="relative aspect-w-16 aspect-h-9">
        <Image
          src="/images/featured-studio.jpg"
          alt="Music producer working in a studio"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-lg shadow-lg object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default FeaturedImage;