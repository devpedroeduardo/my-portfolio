// src/components/AnimatedText.tsx
import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationType?: 'fade' | 'slide' | 'wave' | 'glitch' | 'typewriter';
}

export default function AnimatedText({ 
  text, 
  className = '', 
  delay = 0,
  animationType = 'fade'
}: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    if (animationType === 'typewriter' && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50 + delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay, animationType]);

  const letters = text.split('');

  switch (animationType) {
    case 'typewriter':
      return (
        <span className={className}>
          {displayedText}
          <span className="inline-block w-0.5 h-6 bg-blue-400 ml-1 animate-pulse"></span>
        </span>
      );

    case 'wave':
      return (
        <span className={className}>
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-wave"
              style={{
                animationDelay: `${(index * 50) + delay}ms`
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
      );

    case 'glitch':
      return (
        <span className={`${className} relative inline-block`}>
          <span className="relative z-10">{text}</span>
          <span className="absolute top-0 left-0 w-full h-full text-blue-400 opacity-70 animate-glitch-1" aria-hidden="true">
            {text}
          </span>
          <span className="absolute top-0 left-0 w-full h-full text-pink-400 opacity-70 animate-glitch-2" aria-hidden="true">
            {text}
          </span>
        </span>
      );

    case 'slide':
      return (
        <span className={className}>
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block opacity-0 animate-slide-up"
              style={{
                animationDelay: `${(index * 30) + delay}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
      );

    case 'fade':
    default:
      return (
        <span className={className}>
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block opacity-0 animate-fade-in"
              style={{
                animationDelay: `${(index * 30) + delay}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
      );
  }
}

// Alternative gradient text component
export function GradientText({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <span className={`bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient ${className}`}>
      {children}
    </span>
  );
}

// Shimmer effect component
export function ShimmerText({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></span>
    </span>
  );
}

// CSS for animations (add to your global.css or component)
const styles = `
  @keyframes wave {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes glitch-1 {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }

  @keyframes glitch-2 {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(2px, -2px);
    }
    40% {
      transform: translate(2px, 2px);
    }
    60% {
      transform: translate(-2px, -2px);
    }
    80% {
      transform: translate(-2px, 2px);
    }
    100% {
      transform: translate(0);
    }
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes gradient {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .animate-wave {
    animation: wave 1s ease-in-out;
  }

  .animate-glitch-1 {
    animation: glitch-1 0.3s infinite;
  }

  .animate-glitch-2 {
    animation: glitch-2 0.3s infinite;
  }

  .animate-slide-up {
    animation: slide-up 0.5s ease-out;
  }

  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }

  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
`;