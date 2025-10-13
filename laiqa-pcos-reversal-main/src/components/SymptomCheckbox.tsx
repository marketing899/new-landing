import { Check, Scale, Calendar, Zap, Heart, User, Smile, Utensils, Brain } from "lucide-react";

interface SymptomCheckboxProps {
  text: string;
  delay?: number;
}

const symptomIcons: Record<string, React.ReactNode> = {
  "Weight loss": <Scale className="w-5 h-5" />,
  "Irregular periods": <Calendar className="w-5 h-5" />,
  "Severe cramps": <Zap className="w-5 h-5" />,
  "Bloating": <Utensils className="w-5 h-5" />,
  "Facial hair": <User className="w-5 h-5" />,
  "Acne": <Smile className="w-5 h-5" />,
  "Gut issues": <Heart className="w-5 h-5" />,
  "Mood swings & fatigue": <Brain className="w-5 h-5" />
};

const SymptomCheckbox = ({ text, delay = 0 }: SymptomCheckboxProps) => {
  const icon = symptomIcons[text] || <Check className="w-5 h-5" />;
  
  return (
    <div 
      className="group flex items-center space-x-4 p-4 bg-white rounded-xl border border-border-light hover:border-brand-pink/30 hover:shadow-md transition-all duration-300 animate-fade-in cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-brand-pink to-brand-pink-hover rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        <div className="text-white">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <span className="text-body-text font-inter font-medium group-hover:text-brand-pink transition-colors duration-300">{text}</span>
        <div className="w-full h-0.5 bg-gradient-to-r from-brand-pink/20 to-transparent mt-2 group-hover:from-brand-pink/60 transition-all duration-300"></div>
      </div>
      <div className="w-6 h-6 bg-brand-pink rounded-full flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
      </div>
    </div>
  );
};

export default SymptomCheckbox;