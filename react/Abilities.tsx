import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Definição dos ícones SVG
const CategoryIcons = {
  "Web Development": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-400">
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Mobile Development": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-purple-400">
      <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
    </svg>
  ),
  "UI/UX Design & Prototyping": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-400">
      <path d="M5.7646 7.99998L5.46944 7.26944C5.26255 6.75737 5.50995 6.17454 6.02202 5.96765L15.2939 2.22158C15.8059 2.01469 16.3888 2.26209 16.5956 2.77416L22.2147 16.6819C22.4216 17.194 22.1742 17.7768 21.6622 17.9837L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1772L11.0002 20.9586V21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V19.7303L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L5.7646 7.99998ZM8.00021 19H10.2089L8.00021 13.5333V19ZM6.00021 12.7558L4.32696 16.8972L6.00021 17.6084V12.7558ZM7.69842 7.44741L12.5683 19.5008L19.9858 16.5039L15.1159 4.45055L7.69842 7.44741ZM10.6766 9.47974C10.1645 9.68663 9.5817 9.43924 9.37481 8.92717C9.16792 8.4151 9.41532 7.83227 9.92739 7.62538C10.4395 7.41849 11.0223 7.66588 11.2292 8.17795C11.4361 8.69002 11.1887 9.27286 10.6766 9.47974Z"></path>
    </svg>
  ),
  "Backend & ERP Systems": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-400">
      <path d="M21 18V21H3V18H21ZM21 11V16H3V11H21ZM21 4V9H3V4H21ZM5 6H7V7H5V6ZM5 13H7V14H5V13ZM5 19H7V20H5V19ZM11 6H19V7H11V6ZM11 13H19V14H11V13ZM11 19H19V20H11V19Z"></path>
    </svg>
  )
};

export default function SkillsList() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Web Development": [
      "Single Page Applications (SPAs)",
      "Landing pages and business websites",
      "Portfolio websites",
    ],
    "Mobile Development": [
      "Mobile-friendly web apps",
      "React Native mobile apps",
    ],
    "UI/UX Design & Prototyping": [
      "UI design with Figma & Canva",
      "UX research & improvements",
      "Prototyping for websites & mobile apps",
    ],
    "Backend & ERP Systems": [
      "Database management (Oracle, MySQL)",
      "ERP integration & support (Winthor TOTVS)",
      "System analysis & data optimization",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 px-4">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-white text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        What I do?
      </motion.h3>
      
      <div className="flex flex-col gap-4">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="w-full"
          >
            <div
              onClick={() => toggleItem(category)}
              className={`
                relative overflow-hidden rounded-2xl border border-white/5 
                bg-gray-800/40 backdrop-blur-sm cursor-pointer transition-all duration-300
                hover:bg-gray-800/60 hover:border-white/10 hover:shadow-lg hover:shadow-blue-500/5
                ${openItem === category ? 'bg-gray-800/80 border-blue-500/30' : ''}
              `}
            >
              <div className="flex items-center gap-4 p-5">
                <div className={`p-2 rounded-lg bg-gray-900/50 ${openItem === category ? 'text-white' : 'text-gray-400'}`}>
                  {CategoryIcons[category as keyof typeof CategoryIcons]}
                </div>
                
                <div className="flex flex-grow items-center justify-between gap-4">
                  <span className={`text-lg font-medium transition-colors ${openItem === category ? 'text-white' : 'text-gray-300'}`}>
                    {category}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: openItem === category ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400">
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {openItem === category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5 pt-0">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
                      <ul className="space-y-3">
                        {items.map((item, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center text-gray-400 text-sm md:text-base hover:text-blue-300 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mr-3" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}