import React from 'react';
import { Sparkles, ImagePlus, Volume2, VolumeX } from 'lucide-react';

interface Props {
  onDropConfetti: () => void;
  onOpenPhotoManager: () => void;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
}

export const HeaderNav: React.FC<Props> = ({
  onDropConfetti,
  onOpenPhotoManager,
  isPlayingMusic,
  onToggleMusic,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#fdfaf2]/90 backdrop-blur-md border-b border-[#e5dcd0] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Title (Display face, single element) */}
        <div className="flex items-center gap-3">
          <a 
            href="#" 
            className="text-xl sm:text-2xl font-hand font-bold tracking-tight text-[#2d2926] hover:text-amber-800 transition-colors flex items-center gap-2"
          >
            <span>The Belbuddhi Chronicles</span>
            <span className="text-sm font-sans text-amber-800 font-medium hidden sm:inline bg-amber-100/80 px-2 py-0.5 rounded border border-amber-200">
              · 28th September 🎂
            </span>
          </a>
        </div>

        {/* Zone 2: Navigation Links (single line, subtle hover underline) */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-stone-700 font-sans">
          <a href="#scrapbook" className="hover:text-amber-800 hover:underline underline-offset-4 transition-colors whitespace-nowrap">
            Polaroids
          </a>
          <a href="#birthday-quiz" className="hover:text-amber-800 hover:underline underline-offset-4 transition-colors whitespace-nowrap font-bold text-rose-700">
            Bestie Quiz 📝
          </a>
          <a href="#sticky-notes" className="hover:text-amber-800 hover:underline underline-offset-4 transition-colors whitespace-nowrap">
            Roasts & Notes
          </a>
          <a href="#secret-letter" className="hover:text-amber-800 hover:underline underline-offset-4 transition-colors whitespace-nowrap">
            Secret Letter
          </a>
          <a href="#brain-scanner" className="hover:text-amber-800 hover:underline underline-offset-4 transition-colors whitespace-nowrap">
            Brain Diagnostic
          </a>
          <a href="#birthday-cake" className="hover:text-amber-800 hover:underline underline-offset-4 transition-colors whitespace-nowrap">
            Make A Wish 🎂
          </a>
        </nav>

        {/* Zone 3: Primary Actions (confetti & photo manager) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onToggleMusic}
            title={isPlayingMusic ? "Mute Background Music" : "Play Background Music"}
            className="p-2 text-stone-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors flex items-center justify-center text-xs font-medium cursor-pointer"
          >
            {isPlayingMusic ? (
              <span className="flex items-center gap-1.5 text-amber-800">
                <Volume2 className="w-4 h-4 animate-pulse" />
                <span className="hidden lg:inline text-xs font-mono">BGM Playing</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-stone-600">
                <VolumeX className="w-4 h-4" />
                <span className="hidden lg:inline text-xs font-mono">Play BGM</span>
              </span>
            )}
          </button>

          <button
            onClick={onOpenPhotoManager}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <ImagePlus className="w-3.5 h-3.5 text-stone-600" />
            <span>Customize Photos</span>
          </button>

          <button
            onClick={onDropConfetti}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-xs hover:shadow transition-all whitespace-nowrap active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Drop Confetti 🎉</span>
          </button>
        </div>
      </div>
    </header>
  );
};
