import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationType?: 'slide' | 'fade'; // Adicionado para evitar erro de prop desconhecida
}

// Animação de digitação/aparecimento para o texto
export default function AnimatedText({ 
  text, 
  className = "", 
  delay = 0 
}: AnimatedTextProps) {
  
  // Configuração da animação das letras
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay / 1000 }
    })
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split(" ").map((word, index) => (
        <span key={index} style={{ display: "inline-block", marginRight: "0.25em" }}>
          {Array.from(word).map((letter, i) => (
            <motion.span key={i} variants={child} style={{ display: "inline-block" }}>
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}

// Componente para o efeito de brilho (Shimmer)
export function ShimmerText({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block overflow-hidden">
      <span className="relative z-10">{children}</span>
      <span 
        className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"
        style={{ transform: 'skewX(-20deg)' }}
      />
    </span>
  );
}

// Componente para Gradiente de Texto (Faltava este export)
export function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-[length:200%_auto] animate-gradient ${className}`}>
      {children}
    </span>
  );
}