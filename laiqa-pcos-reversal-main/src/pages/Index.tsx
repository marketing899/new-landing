import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardView, CardViewContent } from "@/components/CardView";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import CounterStats from "@/components/CounterStats";
import ImpactMetrics from "@/components/ImpactMetrics";
import LeadFormModal from "@/components/LeadFormModal";
import HeroRegistrationForm from "@/components/HeroRegistrationForm";
import VideoTestimonials from "@/components/VideoTestimonials";
import { 
  Heart, 
  UserCheck, 
  Calendar, 
  TestTube, 
  MessageCircle, 
  FileText,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  ArrowRight,
  Star,
  Play
} from "lucide-react";

// Import images
import heroImage from "@/assets/hero-wellness.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import successStory from "@/assets/success-story-1.jpg";
import LLM15 from "@/assets/LLM(15).png";
import LLM16 from "@/assets/LLM(16).png";
import LLM17 from "@/assets/LLM(17).png";
import LLM18 from "@/assets/LLM(18).png";
import LLM19 from "@/assets/WhatsApp Image 2025-10-08 at 16.41.23_d5914e3d.jpg";


const Index = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [currentExpert, setCurrentExpert] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [highlightHeroForm, setHighlightHeroForm] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const statsData = [
    { number: 5000, label: "Women Supported", suffix: "+" },
    { number: 1500, label: "Reversed PCOS Naturally in 90 Days", suffix: "+" },
    { number: 200, label: " Expert Workshops Conducted", suffix: "+" },
  ];

  const symptoms = [
    "Weight loss",
    "Irregular periods", 
    "Severe cramps",
    "Bloating",
    "Facial hair",
    "Acne",
    "Gut issues",
    "Mood swings & fatigue"
  ];

  const experts = [
    {
      name: "Dr. Nivedita",
      qualification: "Ayurvedic Doctor",
      bio: "Clinical researcher with 200+ successful PCOS reversal cases.",
      image: LLM15
    },

    {
      name: "Adrija Regmi",
      qualification: "Dietician",
      bio: "Clinical researcher with 200+ successful PCOS reversal cases.",
      image: LLM17
    },
    {
      name: "Dr. Aruna S.", 
      qualification: "Ayurvedic Doctor",
      bio: "Expert in personalized nutrition plans for PCOS management and reversal.",
      image: LLM16
    },
    
    {
      name: "Dr Nisha",
      qualification: "Ayurveda & Endocrinology",
      bio: "15+ years specializing in hormonal imbalances and Ayurvedic treatment protocols.",
      image: LLM19
    }
    ,
    {
      name: "Yukti Bhardawaj",
      qualification: "Dietician",
      bio: "Clinical researcher with 200+ successful PCOS reversal cases.",
      image: LLM18
    }
  ];

  const approachSteps = [
    {
      step: "1",
      title: "Assessment",
      description: "Preliminary Hormonal Assessment",
      details: "Complete health evaluation and diagnostic quiz",
      icon: <TestTube className="w-6 h-6" />
    },
    {
      step: "2", 
      title: "Personalised Plan",
      description: "Ayurveda + diet + routines",
      details: "Custom treatment plan based on your dosha and symptoms",
      icon: <Heart className="w-6 h-6" />
    },
    {
      step: "3",
      title: "Doctor Reviews", 
      description: "Weekly check-ins & support",
      details: "Regular monitoring and plan adjustments",
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      step: "4",
      title: "Community & Tracking",
      description: "WhatsApp support + progress tracking", 
      details: "24/7 support group and detailed progress reports",
      icon: <MessageCircle className="w-6 h-6" />
    }
  ];

  const laiquaProgram = [
    {
      icon: <TestTube className="w-8 h-8 text-brand-pink" />,
      title: "Diagnostics",
      subItems: ["MWQ (Menstrual Wellness Quotient)", "LOQ (Lifestyle Quotient)"]
    },
    {
      icon: <UserCheck className="w-8 h-8 text-brand-pink" />,
      title: "Consults",
      subItems: ["Ayurvedic Doctor", "Health Coach"]
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-pink" />,
      title: "Customized Plans",
      subItems: ["Cycle-sync diet & sleep protocols", "Ayurvedic herbs & nutraceuticals"]
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-brand-pink" />,
      title: "Daily Support",
      subItems: ["App reminders", "WhatsApp weekly live sessions"]
    },
    {
      icon: <FileText className="w-8 h-8 text-brand-pink" />,
      title: "Progress Tracking",
      subItems: ["MWQ scores monthly", "Before-after lab reports"]
    }
  ];

  const testimonials = [
    {
      quote: "Periods regularised in 8 weeks — I finally feel like myself again.",
      name: "Richa",
      age: 31,
      image: successStory,
      rating: 5
    },
    {
      quote: "Lost 7kg and no more cramps every month. Thank you Laiqa!",
      name: "Pooja", 
      age: 28,
      image: successStory,
      rating: 5
    },
    {
      quote: "Clearer skin, balanced energy, and regular cycles.",
      name: "Ananya",
      age: 26, 
      image: successStory,
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What does 'reverse PCOS' mean?",
      answer: "Reversing PCOS means naturally restoring hormonal balance to eliminate symptoms like irregular periods, weight gain, and metabolic issues through Ayurvedic principles and lifestyle changes."
    },
    {
      question: "Are medicines or hormones used?",
      answer: "We use natural Ayurvedic herbs and supplements along with lifestyle modifications. No synthetic hormones or harsh medications are prescribed."
    },
    {
      question: "How soon can I see results?",
      answer: "Most women start seeing improvements in energy and mood within 2-3 weeks. Cycle regulation typically occurs within 6-8 weeks, with complete symptom relief by 90 days."
    },
    {
      question: "What if I don't improve in 90 days?",
      answer: "We offer a satisfaction guarantee. If you don't see significant improvement following our protocol, we'll extend your program or provide alternative solutions."
    },
    {
      question: "Is the program suitable for all ages?",
      answer: "Yes, our program is designed for women aged 18-45. We customize the approach based on your age, symptoms, and health status."
    },
    {
      question: "Do I need lab tests?",
      answer: "We recommend initial hormonal tests to baseline your condition. We help interpret results and track improvements throughout the program."
    },
    {
      question: "Can this help with fertility?",
      answer: "Many women see improved fertility as a natural result of hormonal balance restoration. However, this program focuses on overall PCOS reversal rather than fertility treatment specifically."
    },
    {
      question: "What's the refund policy?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied with the program structure. Results-based refunds are evaluated case-by-case after 90 days."
    }
  ];

  const nextExpert = () => {
    setCurrentExpert((prev) => (prev + 1) % experts.length);
  };

  const prevExpert = () => {
    setCurrentExpert((prev) => (prev - 1 + experts.length) % experts.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        setShowScrollButton(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-20 pb-16 w-full bg-gradient-hero animate-fade-in">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="w-full grid justify-items-center gap-8 items-start">
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold leading-tight animate-fade-in">
                  Reverse PCOS Naturally in{" "}
                  <span className="text-brand-pink bg-gradient-to-r from-brand-pink to-brand-pink-hover bg-clip-text text-transparent">90 Days</span>
                </h1>
                <h2 className="text-lg md:text-xl text-body-text font-inter animate-fade-in" style={{ animationDelay: "200ms" }}>
                  Powered by Ayurveda + Modern Science
                </h2>
                <p className="text-base text-body-text font-inter leading-relaxed animate-fade-in" style={{ animationDelay: "400ms" }}>
                  A personalised program combining Ayurvedic therapies, modern clinical monitoring, and community support.
                </p>
              </div>

              <div id="hero-form" className="animate-fade-in flex justify-center max-w-md mx-auto" style={{ animationDelay: "600ms" }}>
                <HeroRegistrationForm highlight={highlightHeroForm} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 w-full bg-gradient-hero animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <CounterStats stats={statsData} />
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-8 md:py-16 px-4 bg-gradient-section">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Proven Results in{" "}
              <span className="bg-gradient-to-r from-brand-pink to-brand-blue bg-clip-text text-transparent">90 Days</span>
            </h2>
            <p className="text-lg text-body-text max-w-3xl mx-auto">
              Real data from 1,500+ women who reversed their PCOS symptoms with our program
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <ImpactMetrics delay={200} />
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* Meet Our Experts */}
      <section className="py-8 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Meet our Doctors & Dieticians
            </h2>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <Card className="shadow-card-hover border-border-light">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img 
                    src={experts[currentExpert].image}
                    alt={experts[currentExpert].name}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-xl font-poppins font-bold mb-2">
                      {experts[currentExpert].name}
                    </h3>
                    <p className="text-brand-pink font-medium mb-2">
                      {experts[currentExpert].qualification}
                    </p>
                    <p className="text-body-text mb-4">
                      {experts[currentExpert].bio}
                    </p>
                   
                  </div>
                </div>
              </CardContent>
            </Card>

            <button
              onClick={prevExpert}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-card rounded-full flex items-center justify-center hover:shadow-card-hover transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-brand-pink" />
            </button>
            
            <button
              onClick={nextExpert}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-card rounded-full flex items-center justify-center hover:shadow-card-hover transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-brand-pink" />
            </button>

            <div className="flex justify-center mt-6 gap-2">
              {experts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentExpert(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentExpert ? "bg-brand-pink" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Proven Approach */}
      <section id="approach" className="py-8 md:py-16 px-4 bg-gradient-section">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Our Proven{" "}
              <span className="bg-gradient-to-r from-brand-pink to-brand-blue bg-clip-text text-transparent">Approach</span>
            </h2>
            <p className="text-lg text-body-text max-w-2xl mx-auto">
              A systematic 4-step process designed for sustainable PCOS reversal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {approachSteps.map((step, index) => (
              <Card key={step.step} className="relative shadow-card hover:shadow-card-hover transition-all duration-300 border-border-light hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-pink to-brand-pink-hover text-white rounded-full flex items-center justify-center mx-auto mb-4 font-poppins font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <div className="flex justify-center mb-3 text-brand-pink">
                    {step.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-brand-pink font-medium mb-2">{step.description}</p>
                  <p className="text-sm text-muted-text">{step.details}</p>
                </CardContent>
                {index < approachSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8">
                    <ArrowRight className="w-6 h-6 text-brand-pink animate-pulse" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose Laiqa? */}
      <section id="program" className="py-8 md:py-16 px-4 bg-gradient-section">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="tex  t-3xl md:text-4xl font-poppins font-bold mb-4">
              Why choose Laiqa?
            </h2>
            <p className="text-lg text-body-text max-w-3xl mx-auto">
              A comprehensive program combining personalized care, modern diagnostics, and community support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laiquaProgram.map((feature, index) => (
              <CardView key={index} className="relative shadow-card hover:shadow-card-hover transition-all duration-300 border-border-light hover:scale-105 animate-fade-in bg-white" style={{ animationDelay: `${index * 200}ms` }}>
                <CardViewContent className="p-8">
                  <div className="flex flex-col items-center gap-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-pink/10 to-brand-blue/10 rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-poppins font-bold text-xl mb-3">{feature.title}</h3>
                      <div className="space-y-2">
                        {feature.subItems.map((subItem, subIndex) => (
                          <p key={subIndex} className="text-sm text-body-text leading-relaxed">{subItem}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardViewContent>
                {index < laiquaProgram.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8">
                    <ArrowRight className="w-6 h-6 text-brand-pink animate-pulse" />
                  </div>
                )}
              </CardView>
            ))}
          </div>
        </div>
      </section>



      {/* FAQs */}
      <section id="faqs" className="py-8 md:py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <Card className="shadow-card border-border-light">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="font-poppins font-bold text-left">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="text-body-text font-inter leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-8 md:py-16 px-4">
        <div className="container mx-auto">
          <Card className="shadow-card-hover border-brand-pink border-2 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-4">
                Ready to Start Your PCOS Reversal Journey?
              </h2>
              <p className="text-body-text mb-6 font-inter">
                Join thousands of women who have successfully reversed their PCOS in just 90 days.
              </p>
              <Button
                variant="brand"
                size="xl"
                onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="mb-4 w-full max-w-md mx-auto"
              >
                Reverse PCOS Now

              </Button>
              <p className="text-sm text-muted-text">
                No commitment required • Free 15-minute consultation
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Card View Section */}
      <section className="py-8 md:py-16 px-4 bg-gradient-section">
        <div className="container mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-4">
              Your PCOS Reversal Journey Starts Here
            </h2>
            <p className="text-lg text-body-text max-w-2xl mx-auto">
              Join the community of women transforming their health naturally
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <CardView className="shadow-card hover:shadow-card-hover transition-all duration-300 border-border-light hover:scale-105 animate-fade-in bg-white">
              <CardViewContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-pink to-brand-pink-hover text-white rounded-full flex items-center justify-center mx-auto font-poppins font-bold text-lg shadow-lg">
                      1
                    </div>
                    <h3 className="font-poppins font-bold text-lg">Start Today</h3>
                    <p className="text-sm text-body-text">Begin your personalized 90-day program</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-pink to-brand-pink-hover text-white rounded-full flex items-center justify-center mx-auto font-poppins font-bold text-lg shadow-lg">
                      2
                    </div>
                    <h3 className="font-poppins font-bold text-lg">Track Progress</h3>
                    <p className="text-sm text-body-text">Monitor your transformation weekly</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-pink to-brand-pink-hover text-white rounded-full flex items-center justify-center mx-auto font-poppins font-bold text-lg shadow-lg">
                      3
                    </div>
                    <h3 className="font-poppins font-bold text-lg">Achieve Results</h3>
                    <p className="text-sm text-body-text">Experience natural PCOS reversal</p>
                  </div>
                </div>
              </CardViewContent>
            </CardView>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-brand-pink rounded-lg flex items-center justify-center">
                  <span className="text-white font-poppins font-bold text-lg">L</span>
                </div>
                <span className="ml-2 text-xl font-poppins font-bold">Laiqa</span>
              </div>
              <p className="text-gray-300 font-inter">
                Empowering women to reverse PCOS naturally through the power of Ayurveda and modern science.
              </p>
            </div>
            
            <div>
              <h3 className="font-poppins font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 font-inter">
                <li><button onClick={() => scrollToSection("#program")} className="text-gray-300 hover:text-white transition-colors">Program</button></li>
                <li><button onClick={() => scrollToSection("#faqs")} className="text-gray-300 hover:text-white transition-colors">FAQs</button></li>
                <li><button onClick={() => scrollToSection("#stories")} className="text-gray-300 hover:text-white transition-colors">Success Stories</button></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-poppins font-bold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 font-inter text-gray-300">
                <li>Phone: +91 98765 43210</li>
                <li>Email: hello@laiqa.com</li>
                <li>Address: Mumbai, Maharashtra</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-poppins font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-brand-pink transition-colors">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-brand-pink transition-colors">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-brand-pink transition-colors">YouTube</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300 font-inter">© 2025 Laiqa. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Lead Form Modal */}
      <LeadFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
      />

      {/* Scroll to Form Button */}
      {showScrollButton && (
        <>
          <style dangerouslySetInnerHTML={{
            __html: `
              @media (max-width: 768px) {
                .scroll-to-form-btn {
                  bottom: 0 !important;
                  left: 0 !important;
                  right: 0 !important;
                  transform: none !important;
                  border-radius: 0 !important;
                  padding: 16px !important;
                  font-size: 18px !important;
                  max-width: 100% !important;
                }
              }
            `
          }} />
          <button
            className="scroll-to-form-btn"
            onClick={() => {
              document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
              setHighlightHeroForm(true);
              setTimeout(() => setHighlightHeroForm(false), 3000);
            }}
            style={{
              position: 'fixed',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#e91e63',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              zIndex: 1000,
              transition: 'all 0.3s ease',
              maxWidth: '90%',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c2185b'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e91e63'}
          >
            Reverse PCOS Now
          </button>
        </>
      )}
    </div>
  );
};

export default Index;