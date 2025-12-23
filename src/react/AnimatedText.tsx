import { motion, type Variants } from "framer-motion";

export function ShimmerText({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block overflow-hidden group">
      <span className="relative z-10">{children}</span>
      {/* CORREÇÃO 1: Removido 'group-hover:' 
        Agora a animação 'animate-shimmer' roda sempre.
      */}
      <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        // CORREÇÃO 2: Aumentado de 0.05 para 0.08
        // Isso deixa a digitação mais lenta e fluida, evitando o "travamento" visual.
        staggerChildren: 0.08, 
        delayChildren: delay / 1000 
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
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