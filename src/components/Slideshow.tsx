import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize, Minimize } from 'lucide-react';
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
    },
    {
      src: '/lovable-uploads/fd76bf61-0aea-45a0-b639-cf4038b8fc9c.png',
      caption: 'Archer HS Class of 1985 - Together again with endless smiles'
    },
    {
      src: '/lovable-uploads/9830edc8-5761-4a0a-9cde-579b9ca1f146.png',
      caption: 'Class unity in purple and gold - Archer High School pride'
    },
    {
      src: '/lovable-uploads/958898b9-d557-44a2-89ef-c546da502bef.png',
      caption: 'Friends celebrating under the tent - Class of \'85 spirit'
    },
    {
      src: '/lovable-uploads/cdea4522-80bf-4fb1-b9ca-e1102106f298.png',
      caption: 'Playground fun - reliving our youthful energy together'
    },
    {
      src: '/lovable-uploads/4da4106d-a0c6-41f4-b5de-bcf5efdfc408.png',
      caption: 'Nature backdrop - Class of 1985 in perfect harmony'
    },
    {
      src: '/lovable-uploads/8dab02bf-5e15-4c41-b2b9-61cd423c0057.png',
      caption: 'Honoring our memories - a beautiful memorial display'
    },
    {
      src: '/lovable-uploads/a727bd97-8dee-4f19-9e39-b7c9206d04bc.png',
      caption: 'Casual moments and genuine connections'
    },
    {
      src: '/lovable-uploads/247d46d7-d48f-4466-b281-a8c428d426f7.png',
      caption: 'Unexpected reunions - the joy of reconnecting with classmates'
    },
    {
      src: '/lovable-uploads/4f9ba17f-9c15-44ce-a42a-3442a622ae4e.png',
      caption: 'Class of 1985 celebration cakes - marking 39 years together'
    },
    {
      src: '/lovable-uploads/3e757bcf-15ed-42ee-adef-6d1ecc5a6616.png',
      caption: 'Happy 55th Birthday celebration - still celebrating together'
    },
    {
      src: '/lovable-uploads/846fd208-4120-4382-b896-12d0478fa611.png',
      caption: 'Elegant moments - dressed up and feeling great'
    },
    {
      src: '/lovable-uploads/1815a0d3-430e-40c8-9fe0-3630719c1ab4.png',
      caption: 'Dancing with style - keeping the party alive'
    },
    {
      src: '/lovable-uploads/116c5d82-195b-499e-ab3d-98c1a4902638.png',
      caption: 'Seated together - sharing memories and catching up'
    },
    {
      src: '/lovable-uploads/4811af3e-9231-42e9-85f3-00437e27db53.png',
      caption: 'Victory celebration - class spirit never dies'
    },
    {
      src: '/lovable-uploads/1a6d9e9a-3380-49d3-99c7-7d9bdd474b58.png',
      caption: 'DJ booth fun - keeping the music and energy flowing'
    },
    {
      src: '/lovable-uploads/8c7de5f7-ef6c-4d47-9ece-5bb13aa50d8f.png',
      caption: 'Sweet embrace - 55th birthday love and friendship'
    },
    {
      src: '/lovable-uploads/a7912338-536c-4290-8588-c5ef8e9607c9.png',
      caption: 'Purple and gold pride - Archer High School Class of 1985'
    },
    {
      src: '/lovable-uploads/a474238b-4e1c-4986-b7b6-fbd1ae141835.png',
      caption: 'Dance floor energy - the Class of 1985 still knows how to party'
    },
    {
      src: '/lovable-uploads/_60A4709.png',
      caption: 'Celebrating lifelong bonds and friendships'
    },
    {
      src: '/lovable-uploads/_60A4708.png',
      caption: 'Joy and laughter - memories that last forever'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  const containerClasses = isFullscreen 
    ? "fixed inset-0 z-50 bg-black"
    : "max-w-4xl mx-auto bg-purple-900 rounded-2xl shadow-2xl overflow-hidden";

  const imageHeight = isFullscreen ? "h-screen" : "h-[600px]";

  return (
    <div className={containerClasses}>
      <div className="relative">
        <div className={`relative ${imageHeight} overflow-hidden`}>
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
                className="w-full h-full object-contain bg-black"
                style={{ objectPosition: 'center center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-100 backdrop-blur-sm"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-100 backdrop-blur-sm"
          onClick={goToNext}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        <div className="absolute top-4 right-4 flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-100 backdrop-blur-sm"
            onClick={togglePlayPause}
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-100 backdrop-blur-sm"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? <Minimize className="h-6 w-6" /> : <Maximize className="h-6 w-6" />}
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <p className="text-yellow-200 text-xl font-medium text-center">
            {images[currentIndex].caption}
          </p>
        </div>
      </div>

      {!isFullscreen && (
        <div className="p-6 bg-purple-950">
          <div className="flex justify-center space-x-3 flex-wrap gap-y-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-yellow-400 scale-125'
                    : 'bg-yellow-400/30 hover:bg-yellow-400/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-yellow-200">
              {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;