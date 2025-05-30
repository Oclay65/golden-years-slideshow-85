
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Slideshow = () => {
  const images = [
    {
      src: '/lovable-uploads/90119110-a910-4e62-b732-42b5b2e89a0f.png',
      caption: 'Gathering together, sharing stories and laughter'
    },
    {
      src: '/lovable-uploads/2fa7fc04-aecf-4f3a-94d7-440a919895e0.png',
      caption: 'Warm smiles and cherished friendships'
    },
    {
      src: '/lovable-uploads/8c6cae49-036f-4744-a95d-bce2c2fd8c39.png',
      caption: 'The music and memories that bring us together'
    },
    {
      src: '/lovable-uploads/70994c8f-a78b-42db-9917-b7a7ca03fdd3.png',
      caption: 'A wonderful evening filled with joy and celebration'
    },
    {
      src: '/lovable-uploads/7b89d453-797d-45a9-93d0-b22661536fe4.png',
      caption: 'Dancing and celebrating 59 years of friendship'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="relative">
        {/* Main image display */}
        <div className="relative h-[600px] overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
          onClick={goToNext}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        {/* Play/Pause button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
          onClick={togglePlayPause}
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </Button>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <p className="text-white text-xl font-medium text-center">
            {images[currentIndex].caption}
          </p>
        </div>
      </div>

      {/* Thumbnail navigation */}
      <div className="p-6 bg-gray-50">
        <div className="flex justify-center space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-rose-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
