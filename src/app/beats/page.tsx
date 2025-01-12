import React from 'react';
import MusicPlayer from '@/components/MusicPlayer';
import BeatPurchaseSection from '@/components/BeatPurchaseSection';
import AIContactForm from '@/components/AIContactForm';
import { Card, CardContent } from '@/components/ui/card';

const BeatsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Card className="max-w-3xl mx-auto bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 text-white shadow-xl">
        <CardContent className="p-6">
          <MusicPlayer />
        </CardContent>
      </Card>
      
      <Card className="max-w-3xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-xl">
        <CardContent className="p-6">
          <BeatPurchaseSection />
        </CardContent>
      </Card>
      
      <Card className="max-w-3xl mx-auto bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 text-white shadow-xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <AIContactForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default BeatsPage;