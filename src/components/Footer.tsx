import React from 'react';
import { ArrowUp, Sparkles, HeartHandshake } from 'lucide-react';

interface Props {
  onDropConfetti: () => void;
}

export const Footer: React.FC<Props> = ({ onDropConfetti }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-[#e5dcd0] bg-[#faf6ed] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Washi tape decoration */}
        <div className="w-28 h-6 washi-tape washi-yellow -rotate-1 mb-6 pointer-events-none" />

        {/* Big cute stamp banner */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fffefb] border-2 border-dashed border-[#c8b79b] rounded-xl shadow-xs mb-4">
          <HeartHandshake className="w-5 h-5 text-rose-600" />
          <span className="font-hand font-bold text-lg sm:text-xl text-stone-800">
            Official Belbuddhi Birthday Special · 28 September Edition
          </span>
          <span className="text-sm">🎂</span>
        </div>

        <p className="text-sm sm:text-base font-hand font-semibold text-stone-700 max-w-xl leading-relaxed">
          Designed & Coded with chaos by <span className="font-bold text-stone-900">Soyam</span> for <span className="font-bold text-rose-700">Riya</span> | Happy Birthday 28th September 🎂✨
        </p>

        <p className="text-xs font-mono text-stone-500 mt-2">
          Made with endless laughter · 100% genuine friendship · Infinite memories together
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={onDropConfetti}
            className="px-4 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Drop Final Confetti 🎉</span>
          </button>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-200/80 hover:bg-stone-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-300/60 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-mono gap-2">
          <span>The Belbuddhi Chronicles © 2026</span>
          <span>Certified Dosti Archive #001</span>
        </div>
      </div>
    </footer>
  );
};
