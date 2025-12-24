import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiAstro, SiNodedotjs } from 'react-icons/si';

interface LogoItem {
  node: React.ReactNode;
  title: string;
  href: string;
}

const techLogos: LogoItem[] = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiAstro />, title: "Astro", href: "https://astro.build" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
];

export default function LogoLoop() {
  const logos = [...techLogos, ...techLogos, ...techLogos];

  return (
    <div className="relative w-full overflow-hidden bg-gray-900/50 backdrop-blur-sm py-10 border-y border-white/5">
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-12 min-w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {logos.map((tech, index) => (
          <a
            key={index}
            href={tech.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center group relative min-w-[100px]"
            title={tech.title}
            aria-label={`Link para ${tech.title}`}
          >
            <div className="text-4xl text-neutral-500 transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              {tech.node}
            </div>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {tech.title}
            </span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}