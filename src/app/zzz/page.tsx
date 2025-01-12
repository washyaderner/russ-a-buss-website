import React from 'react';
import RelaxationPlayer from '@/components/RelaxationPlayer';
import { Card, CardContent } from '@/components/ui/card';

const tracks = [
  { id: 1, title: 'Pacific Ocean – Rockaway Beach', src: '/audio/pacific-ocean-rockaway-beach.mp3' },
  { id: 2, title: 'Pacific Ocean – Yachats Oregon', src: '/audio/pacific-ocean-yachats-oregon.mp3' },
  { id: 3, title: 'Nehalem River – Spruce Run', src: '/audio/nehalem-river-spruce-run.mp3' },
  { id: 4, title: 'Tryon Creek – Marshall Park, Portland Oregon', src: '/audio/tryon-creek-marshall-park.mp3' },
];

const ZzzPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold text-center mb-2">Everybody Sleeps</h1>
          <p className="text-xl text-center">Free downloads of peaceful sounds to sleep to</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tracks.map((track) => (
          <Card key={track.id} className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
            <CardContent className="p-6">
              <RelaxationPlayer track={track} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ZzzPage;