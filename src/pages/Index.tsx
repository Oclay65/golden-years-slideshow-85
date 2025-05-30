
import Slideshow from "@/components/Slideshow";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 font-serif">
            Class of 1985
          </h1>
          <h2 className="text-3xl text-gray-600 mb-2">
            59th Anniversary Celebration
          </h2>
          <p className="text-lg text-gray-500 italic">
            Celebrating friendship, memories, and togetherness
          </p>
        </div>
        
        <Slideshow />
        
        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            A beautiful reunion of lifelong friendships 💕
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
