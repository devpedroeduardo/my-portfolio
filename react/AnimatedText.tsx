import { motion, type Variants } from "framer-motion";

export function ShimmerText({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block overflow-hidden group">
      <span className="relative z-10">{children}</span>
      <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer" />
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  // Configuração da animação com tipagem explícita 'Variants'
  const container: Variants = {
    hidden: { opacity: 0 },
    // Correção: Removida a função com parâmetro 'i' não utilizado e o styles não utilizado
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05, 
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

  // Removida a variável 'styles' que causava o warning ts(6133)

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split(" ").map((word, index) => (
        <motion.span 
          variants={child} 
          style={{ marginRight: "0.25em" }} 
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}