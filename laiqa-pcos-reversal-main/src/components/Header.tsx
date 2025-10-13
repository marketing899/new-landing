import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Program", href: "#program" },
    { label: "How it Works", href: "#approach" },
    { label: "Success Stories", href: "#stories" },
    { label: "FAQs", href: "#faqs" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border-light shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-brand-pink rounded-lg flex items-center justify-center">
              <span className="text-white font-poppins font-bold text-lg">L</span>
            </div>
            <span className="ml-2 text-xl font-poppins font-bold text-foreground">Laiqa</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-body-text hover:text-brand-pink transition-colors duration-200 font-inter"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="brand" size="lg" onClick={() => scrollToSection("#contact")}>
              Reverse PCOS Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border-light pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-body-text hover:text-brand-pink transition-colors duration-200 font-inter text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="brand" 
                size="lg" 
                className="mt-4 w-full"
                onClick={() => scrollToSection("#contact")}
              >
                Reverse PCOS Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;