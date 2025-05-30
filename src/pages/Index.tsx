import Slideshow from "@/components/Slideshow";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4 font-serif animate-fade-in">
            Class of 1985
          </h1>
          <h2 className="text-3xl text-yellow-300 mb-2">
            40th Anniversary Celebration
          </h2>
          <p className="text-lg text-yellow-200 italic">
            Celebrating friendship, memories, and togetherness
          </p>
        </div>
        
        <Slideshow />
        
        <div className="text-center mt-8">
          <p className="text-yellow-200 text-lg">
            A beautiful reunion of lifelong friendships 💕
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;