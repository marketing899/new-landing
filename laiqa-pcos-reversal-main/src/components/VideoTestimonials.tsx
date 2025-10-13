import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ChevronLeft, ChevronRight, Star } from "lucide-react";
import screenshot1 from "@/assets/Screenshot 2025-10-08 160657.png";
import screenshot2 from "@/assets/Screenshot 2025-10-08 161054.png";
import screenshot3 from "@/assets/Screenshot 2025-10-08 161259.png";

interface VideoTestimonial {
  id: string;
  title: string;
  name: string;
  age: number;
  videoId: string; // YouTube video ID
  thumbnail: string;
  duration: string;
  preview: string;
  location: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: "1",
    title: "How I Reversed PCOS in 12 Weeks",
    name: "Aarti",
    age: 32,
    videoId: "4lxYs15urFA", // Placeholder YouTube ID
    thumbnail: screenshot1,
    duration: "3:42",
    preview: "Lost 8kg, regular periods, no more mood swings...",
    location: "Mumbai"
  },
  {
    id: "2",
    title: "From PCOS to Pregnancy Success",
    name: "Ratna",
    age: 50,
    videoId: "-Q5nNZqRVkw",
    thumbnail: screenshot2,
    duration: "4:15",
    preview: "Natural conception after 3 years of trying...",
    location: "Delhi"
  },
  {
    id: "3",
    title: "My Complete PCOS Transformation",
    name: "Mansi",
    age: 23,
    videoId: "oQKA_J2yzOo",
    thumbnail: screenshot3,
    duration: "5:28",
    preview: "Clear skin, balanced hormones, feeling confident again...",
    location: "Bangalore"
  },
  {
    id: "4",
    title: "PCOS Transformation",
    name: "Mansi",
    age: 23,
    videoId: "xKv_arUjaTo",
    thumbnail: "https://img.youtube.com/vi/xKv_arUjaTo/maxresdefault.jpg",
    duration: "5:28",
    preview: "Weight managment, balanced hormones, feeling confident again...",
    location: "hyderabad"
  }

];

const VideoTestimonials = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  const currentTestimonial = videoTestimonials[currentVideo];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Watch Real Transformations
          </h2>
          <p className="text-lg text-body-text max-w-2xl mx-auto">
            Hear directly from women who've successfully reversed their PCOS with our program
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Video Player */}
            <div className="relative group">
              <Card className="overflow-hidden shadow-card-hover border-brand-pink/20">
                <div className="relative aspect-video bg-gray-900">
                  {playingVideo === currentTestimonial.videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${currentTestimonial.videoId}?autoplay=1`}
                      title={currentTestimonial.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <>
                      <img
                        src={currentTestimonial.thumbnail}
                        alt={currentTestimonial.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                        <Button
                          onClick={() => handlePlayVideo(currentTestimonial.videoId)}
                          variant="brand"
                          size="lg"
                          className="rounded-full w-16 h-16 p-0 group-hover:scale-110 transition-transform"
                        >
                          <Play className="w-8 h-8" fill="currentColor" />
                        </Button>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                        {currentTestimonial.duration}
                      </div>
                    </>
                  )}
                </div>
              </Card>
            </div>

            {/* Testimonial Info */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-2xl font-poppins font-bold mb-2">
                  {currentTestimonial.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-text">5.0 rating</span>
                </div>
                <p className="text-body-text mb-4">
                  {currentTestimonial.preview}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-lg">
                      {currentTestimonial.name}, {currentTestimonial.age}
                    </p>
                    <p className="text-sm text-muted-text">
                      {currentTestimonial.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {videoTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideo(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentVideo ? "bg-brand-pink" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    onClick={prevVideo}
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 rounded-full"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={nextVideo}
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 rounded-full"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Button
                variant="brand"
                size="lg"
                className="w-full flex items-center gap-2"
                onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Reverse PCOS Now
                <Play className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;