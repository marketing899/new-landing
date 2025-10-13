import { Scale, Calendar, Zap, Heart, User, Smile, Utensils, Brain } from "lucide-react";

interface ImpactMetric {
  symptom: string;
  percentage: number;
  metric: string;
  timeframe: string;
  icon: React.ReactNode;
}

interface ImpactMetricsProps {
  delay?: number;
}

const impactData: ImpactMetric[] = [
  {
    symptom: "Weight Management",
    percentage: 87,
    metric: "Average 5-8kg weight loss",
    timeframe: "in 90 days",
    icon: <Scale className="w-5 h-5" />
  },
  {
    symptom: "Period Regularity", 
    percentage: 92,
    metric: "Achieved regular cycles",
    timeframe: "within 8 weeks",
    icon: <Calendar className="w-5 h-5" />
  },
  {
    symptom: "Pain Relief",
    percentage: 89,
    metric: "Reduced menstrual cramps",
    timeframe: "from first cycle",
    icon: <Zap className="w-5 h-5" />
  },
  {
    symptom: "Digestive Health",
    percentage: 84,
    metric: "Improved bloating & gut issues", 
    timeframe: "within 4 weeks",
    icon: <Utensils className="w-5 h-5" />
  },
  {
    symptom: "Hormonal Balance",
    percentage: 91,
    metric: "Reduced excess hair growth",
    timeframe: "visible in 12 weeks",
    icon: <User className="w-5 h-5" />
  },
  {
    symptom: "Skin Clarity",
    percentage: 85,
    metric: "Clearer, acne-free skin",
    timeframe: "within 6-8 weeks", 
    icon: <Smile className="w-5 h-5" />
  }
];

const ImpactMetrics = ({ delay = 0 }: ImpactMetricsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
      {impactData.map((item, index) => (
        <div
          key={item.symptom}
          className="group text-center animate-fade-in hover:scale-105 transition-all duration-300"
          style={{ animationDelay: `${delay + index * 100}ms` }}
        >
          {/* Icon */}
          <div className="w-10 h-10 mx-auto mb-3 bg-gradient-to-br from-brand-pink/10 to-brand-pink/5 rounded-full flex items-center justify-center text-brand-pink group-hover:from-brand-pink/20 group-hover:to-brand-pink/10 transition-all duration-300">
            {item.icon}
          </div>
          
          {/* Percentage */}
          <div className="text-3xl md:text-4xl font-poppins font-bold text-brand-pink mb-1 group-hover:scale-110 transition-transform duration-300">
            {item.percentage}%
          </div>
          
          {/* Symptom Name */}
          <h3 className="font-poppins font-semibold text-sm md:text-base text-headline-text mb-2 group-hover:text-brand-pink transition-colors duration-300">
            {item.symptom}
          </h3>
          
          {/* Metric & Timeframe */}
          <div className="space-y-1">
            <p className="text-xs md:text-sm text-body-text font-medium leading-tight">
              {item.metric}
            </p>
            <p className="text-xs text-muted-text">
              {item.timeframe}
            </p>
          </div>
          
          {/* Subtle underline animation */}
          <div className="w-0 h-0.5 bg-gradient-to-r from-brand-pink to-brand-pink-hover mx-auto mt-3 group-hover:w-full transition-all duration-500 ease-out"></div>
        </div>
      ))}
    </div>
  );
};

export default ImpactMetrics;