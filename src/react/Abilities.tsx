import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutTemplate, 
  AppWindow, 
  Building2, 
  Smartphone, 
  PenTool, 
  MonitorSmartphone 
} from 'lucide-react';

interface Ability {
  title: string;
  description: string;
  icon: React.ElementType;
}

const abilities: Ability[] = [
  {
    title: "Landing Pages",
    description: "High-conversion designs focused on speed and user engagement.",
    icon: LayoutTemplate
  },
  {
    title: "Single Page Applications",
    description: "Fluid, app-like experiences using modern React ecosystems.",
    icon: AppWindow
  },
  {
    title: "Business Sites",
    description: "Professional corporate presence with SEO optimization.",
    icon: Building2
  },
  {
    title: "Mobile Applications",
    description: "Native-feel cross-platform apps utilizing modern frameworks.",
    icon: Smartphone
  },
  {
    title: "Prototyping",
    description: "From wireframes to high-fidelity interactive prototypes.",
    icon: PenTool
  },
  {
    title: "Mobile-friendly Web Apps",
    description: "Responsive layouts that work perfectly on any device size.",
    icon: MonitorSmartphone
  }
];

export default function Abilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-20 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Título da Seção com Animação */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What I do?
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {abilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group h-full"
            >
              {/* Card Container com Glassmorphism */}
              <div className={`
                h-full p-8 rounded-2xl border transition-all duration-500 ease-out
                ${hoveredIndex === index 
                  ? 'bg-gray-800/90 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.2)] -translate-y-2' 
                  : 'bg-gray-900/40 border-white/10 hover:border-white/20'}
                backdrop-blur-md flex flex-col items-start gap-4 overflow-hidden
              `}>
                
                {/* Background Gradient Animado */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : ''}`} />

                {/* Ícone */}
                <div className={`
                  p-4 rounded-xl transition-all duration-300 relative z-10
                  ${hoveredIndex === index 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-110 shadow-lg' 
                    : 'bg-gray-800 text-blue-400 group-hover:bg-gray-700'}
                `}>
                  <item.icon size={28} strokeWidth={1.5} />
                </div>

                {/* Conteúdo de Texto */}
                <div className="relative z-10 w-full">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* Descrição com efeito de revelação suave */}
                  <div className="relative">
                    <p className={`
                      text-neutral-400 text-base leading-relaxed transition-all duration-500 ease-in-out
                      ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-70'}
                    `}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Decoração de Canto */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}