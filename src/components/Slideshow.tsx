import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize, Minimize } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Slideshow = () => {
  const images = [
    {
      src: '/lovable-uploads/90119110-a910-4e62-b732-42b5b2e89a0f.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/2fa7fc04-aecf-4f3a-94d7-440a919895e0.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/8c6cae49-036f-4744-a95d-bce2c2fd8c39.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/70994c8f-a78b-42db-9917-b7a7ca03fdd3.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/7b89d453-797d-45a9-93d0-b22661536fe4.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/fd76bf61-0aea-45a0-b639-cf4038b8fc9c.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/9830edc8-5761-4a0a-9cde-579b9ca1f146.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/958898b9-d557-44a2-89ef-c546da502bef.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/cdea4522-80bf-4fb1-b9ca-e1102106f298.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/4da4106d-a0c6-41f4-b5de-bcf5efdfc408.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/8dab02bf-5e15-4c41-b2b9-61cd423c0057.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/a727bd97-8dee-4f19-9e39-b7c9206d04bc.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/247d46d7-d48f-4466-b281-a8c428d426f7.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/4f9ba17f-9c15-44ce-a42a-3442a622ae4e.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/3e757bcf-15ed-42ee-adef-6d1ecc5a6616.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/846fd208-4120-4382-b896-12d0478fa611.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/1815a0d3-430e-40c8-9fe0-3630719c1ab4.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/116c5d82-195b-499e-ab3d-98c1a4902638.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/4811af3e-9231-42e9-85f3-00437e27db53.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/1a6d9e9a-3380-49d3-99c7-7d9bdd474b58.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/8c7de5f7-ef6c-4d47-9ece-5bb13aa50d8f.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/a7912338-536c-4290-8588-c5ef8e9607c9.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/a474238b-4e1c-4986-b7b6-fbd1ae141835.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/_60A4709.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/_60A4708.png',
      caption: ''
    },
    {
      src: '/lovable-uploads/IMG_0088 (1).jpg',
      caption: ''
    },
    {
      src: '/lovable-uploads/IMG_0090 (1).jpg',
      caption: ''
    },
    {
      src: '/lovable-uploads/IMG_0092 (1).jpg',
      caption: ''
    },
    {
      src: '/lovable-uploads/IMG_0104 (1).jpg',
      caption: ''
    },
    {
      src: '/lovable-uploads/IMG_0110 (1).jpg',
      caption: ''
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
    : "max-w-4xl mx-auto bg-purple-900/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm border border-purple-700";

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
                alt=""
                className="w-full h-full object-contain bg-black"
                style={{ objectPosition: 'center center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-400/20 hover:bg-yellow-400/40 text-yellow-100 backdrop-blur-sm ring-1 ring-yellow-400/30"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400/20 hover:bg-yellow-400/40 text-yellow-100 backdrop-blur-sm ring-1 ring-yellow-400/30"
          onClick={goToNext}
          aria-label="Next image"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        <div className="absolute top-4 right-4 flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="bg-yellow-400/20 hover:bg-yellow-400/40 text-yellow-100 backdrop-blur-sm ring-1 ring-yellow-400/30"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="bg-yellow-400/20 hover:bg-yellow-400/40 text-yellow-100 backdrop-blur-sm ring-1 ring-yellow-400/30"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? <Minimize className="h-6 w-6" /> : <Maximize className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {!isFullscreen && (
        <div className="p-6 bg-purple-950/80 backdrop-blur-sm border-t border-purple-700">
          <div className="flex justify-center space-x-3 flex-wrap gap-y-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-yellow-400 scale-125 ring-2 ring-yellow-400/50'
                    : 'bg-yellow-400/30 hover:bg-yellow-400/50'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
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