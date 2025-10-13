import { useEffect, useState } from "react";

interface CounterStatsProps {
  stats: {
    number: number;
    label: string;
    suffix?: string;
  }[];
}

const CounterStats = ({ stats }: CounterStatsProps) => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const hasAnimated = sessionStorage.getItem('counterAnimated') === 'true';

    if (hasAnimated) {
      // Set final values immediately
      setCounters(stats.map(stat => stat.number));
      return;
    }

    const duration = 2000; // 2 seconds
    const steps = 90; // 60 frames for smooth animation
    const increment = duration / steps;

    let completedAnimations = 0;

    stats.forEach((stat, index) => {
      let current = 0;
      const stepValue = stat.number / steps;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
          completedAnimations++;
          if (completedAnimations === stats.length) {
            sessionStorage.setItem('counterAnimated', 'true');
          }
        }

        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, increment);
    });
  }, [stats]);

  return (
    <div className="mb-4 md:mb-6">
      <div className="block md:hidden flex flex-col items-center gap-4">
        <div className="grid grid-cols-2 gap-4">
          {stats.slice(0, 2).map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-poppins font-bold text-brand-pink mb-2">
                {counters[index].toLocaleString()}{stat.suffix || ""}
              </div>
              <div className="text-body-text font-inter">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-poppins font-bold text-brand-pink mb-2">
            {counters[2].toLocaleString()}{stats[2].suffix || ""}
          </div>
          <div className="text-body-text font-inter">{stats[2].label}</div>
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl md:text-3xl font-poppins font-bold text-brand-pink mb-2">
              {counters[index].toLocaleString()}{stat.suffix || ""}
            </div>
            <div className="text-body-text font-inter">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterStats;