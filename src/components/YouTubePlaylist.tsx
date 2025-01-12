import Image from 'next/image';

const FeaturedImage = () => {
  return (
    <div className="max-w-[50%] mx-auto">
      <div className="relative aspect-w-16 aspect-h-9">
        <Image
          src="/images/featured-studio.jpg"
          alt="Music producer working in a studio"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default FeaturedImage;