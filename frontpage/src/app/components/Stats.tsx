import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    number: 100000,
    suffix: '+',
    label: 'Utenti attivi',
    animated: true
  },
  {
    number: 5000000,
    suffix: '+',
    label: 'Minacce bloccate',
    animated: true
  },
  {
    number: 99.7,
    suffix: '%',
    label: 'Precisione AI',
    animated: true
  },
  {
    number: 24,
    suffix: '/7',
    label: 'Protezione attiva',
    animated: false
  },
];

function formatNumber(num: number, isDecimal: boolean): string {
  if (isDecimal) {
    return num.toFixed(1);
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K';
  }
  return num.toString();
}

function AnimatedStat({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [count, setCount] = useState(stat.animated ? 0 : stat.number);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stat.animated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const duration = 3500; // Più lento
            const steps = 80; // Più step per maggiore fluidità
            const stepValue = stat.number / steps;
            const stepDuration = duration / steps;
            
            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              if (currentStep >= steps) {
                setCount(stat.number);
                clearInterval(timer);
              } else {
                setCount(currentStep * stepValue);
              }
            }, stepDuration);
            
            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [stat.number, stat.animated, hasAnimated]);

  const isDecimal = stat.suffix === '%';

  return (
    <div ref={statRef} className="col-6 col-lg-3 text-center">
      <div style={{
        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
        fontWeight: '700',
        color: '#0A0A0A',
        marginBottom: '0.5rem',
        lineHeight: '1'
      }}>
        {stat.animated ? formatNumber(count, isDecimal) : stat.number}{stat.suffix}
      </div>
      <div style={{
        fontSize: '1.1rem',
        fontWeight: '500',
        color: 'rgba(10,10,10,0.7)'
      }}>
        {stat.label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #C5E063 0%, #B5D055 100%)',
      padding: 'clamp(4rem, 10vh, 6rem) 0'
    }}>
      <div className="container">
        <div className="row g-4">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
