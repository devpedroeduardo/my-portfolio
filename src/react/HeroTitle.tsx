import React from 'react';
// Certifique-se de que o caminho está correto. Se estiver na mesma pasta 'react', use './AnimatedText'
import AnimatedText, { GradientText } from './AnimatedText';

export default function HeroTitle() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
        <div className="block mb-2 sm:mb-3">
          <AnimatedText 
            text="Hi, I'm Pedro Eduardo" 
            className="text-white drop-shadow-sm"
            // animationType="slide" // Prop opcional adicionada na interface, mas pode ser removida se não usada na lógica
            delay={400}
          />
        </div>
        
        <div className="block mt-2">
          {/* Agora o GradientText existe e é importado corretamente */}
          <GradientText>
            <AnimatedText 
              text="Software Developer"
              // animationType="slide"
              delay={600}
            />
          </GradientText>
        </div>
      </h1>
    </div>
  );
}