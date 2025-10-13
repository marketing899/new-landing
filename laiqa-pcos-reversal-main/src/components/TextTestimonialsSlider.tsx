import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  age: number;
  rating: number;
}

interface Props {
  testimonials: Testimonial[];
}

const TextTestimonialsSlider = ({ testimonials }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5">
      <div className="container mx-auto max-w-3xl">
        <Card className="shadow-card-hover border-border-light">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              {[...Array(currentTestimonial.rating || 5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-body-text italic mb-4">
              "{currentTestimonial.quote}"
            </blockquote>
            <div>
              <p className="font-poppins font-bold">{currentTestimonial.name}</p>
              <p className="text-sm text-muted-text">Age {currentTestimonial.age}</p>
            </div>
            <div className="flex justify-between mt-6">
              <Button variant="outline" size="sm" onClick={prev} className="w-10 h-10 p-0 rounded-full">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={next} className="w-10 h-10 p-0 rounded-full">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TextTestimonialsSlider;
