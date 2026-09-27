import React, { useState } from 'react';
import { Sparkles, Brain, Flame, Clock, HeartHandshake, Coffee, Wind, RotateCcw } from 'lucide-react';

interface Props {
  onDropConfetti: () => void;
  onOpenSecretLetter: () => void;
}

export const HeroSection: React.FC<Props> = ({ onDropConfetti, onOpenSecretLetter }) => {
  const [candlesLit, setCandlesLit] = useState<boolean[]>([true, true, true]);
  const [wishMade, setWishMade] = useState(false);

  const handleBlowCandle = (index: number) => {
    const updated = [...candlesLit];
    updated[index] = false;
    setCandlesLit(updated);

    if (updated.every(lit => !lit) && !wishMade) {
      setWishMade(true);
      onDropConfetti();
    }
  };

  const handleRelight = () => {
    setCandlesLit([true, true, true]);
    setWishMade(false);
  };

  const blowAll = () => {
    setCandlesLit([false, false, false]);
    setWishMade(true);
    onDropConfetti();
  };

  return (
    <section className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Scrapbook Doodle Stickers & Floating elements */}
      <div className="absolute top-10 left-6 text-4xl select-none opacity-40 pointer-events-none rotate-12">
        🍩
      </div>
      <div className="absolute top-24 right-10 text-4xl select-none opacity-40 pointer-events-none -rotate-12">
        🍕
      </div>
      <div className="absolute bottom-6 left-1/4 text-3xl select-none opacity-40 pointer-events-none rotate-6">
        🧸
      </div>
      <div className="absolute top-1/2 right-4 text-3xl select-none opacity-40 pointer-events-none -rotate-6">
        🎈
      </div>

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Top Bestie Roasting Tagline Stamp */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#fef3c7] border border-[#fde68a] text-amber-900 rounded-md shadow-xs mb-6 -rotate-1 hover:rotate-0 transition-transform">
          <span className="text-sm font-semibold tracking-wide">
            🎂 Special Birthday Edition · 28th September · Handcrafted with Bestie Roasting by Soyam 👊
          </span>
        </div>

        {/* Official Nickname Tag */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-stone-600 text-sm font-mono uppercase tracking-wider mb-2">
          <span>The Official</span>
          <span className="px-2.5 py-0.5 bg-rose-100 text-rose-800 font-bold rounded-sm border border-rose-200">
            बेलबुद्धि (Belbuddhi)
          </span>
          <span>Chronicles 🧠✨</span>
          <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 font-bold rounded-sm border border-amber-300">
            📅 28 September
          </span>
        </div>

        {/* Main Birthday Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-bold text-[#2d2926] tracking-tight leading-tight my-2">
          Happy Birthday, <span className="font-hand text-rose-600 italic">Riya!</span> 🎂🎉
        </h1>

        <p className="mt-3 text-lg sm:text-xl font-hand font-semibold text-stone-700 max-w-2xl text-balance">
          Another year older, another year wiser? Definitely not. But definitely 1000% more iconic, chaotic, and irreplaceable in my life.
        </p>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={onDropConfetti}
            className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-5 h-5" />
            <span>Drop Confetti on Belbuddhi 🎉</span>
          </button>

          <button
            onClick={onOpenSecretLetter}
            className="px-6 py-3 bg-[#fffefb] hover:bg-[#fff7ed] text-stone-800 border-2 border-stone-300 hover:border-amber-400 font-medium rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>💌 Open Secret Letter</span>
          </button>
        </div>

        {/* Interactive Birthday Cake with Blow-Out Candles */}
        <div id="birthday-cake" className="mt-12 w-full max-w-md bg-[#fffdfa] border border-[#e8dcc4] rounded-2xl p-6 paper-shadow relative">
          {/* Washi tape on cake card */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 washi-tape rotate-1 z-10" />

          <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4">
            <div className="text-left">
              <h3 className="text-base font-bold text-stone-800 font-sans flex items-center gap-1.5">
                <span>The Belbuddhi Birthday Cake</span>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-mono">
                  Make a Wish!
                </span>
              </h3>
              <p className="text-xs text-stone-500 font-sans mt-0.5">
                {wishMade ? "✨ Wish sent to the universe!" : "Tap individual candles or blow them all out"}
              </p>
            </div>
            {candlesLit.some(lit => !lit) && (
              <button
                onClick={handleRelight}
                title="Relight candles"
                className="text-xs text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded flex items-center gap-1 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Relight</span>
              </button>
            )}
          </div>

          {/* Cake Graphic & Candles */}
          <div className="flex flex-col items-center py-2 select-none">
            {/* Candles Row */}
            <div className="flex items-end justify-center gap-8 mb-2">
              {[0, 1, 2].map((idx) => {
                const isLit = candlesLit[idx];
                return (
                  <button
                    key={idx}
                    onClick={() => handleBlowCandle(idx)}
                    title={isLit ? "Click to blow out candle" : "Blow out"}
                    className="group flex flex-col items-center cursor-pointer focus:outline-none"
                  >
                    {/* Flame */}
                    <div className="h-6 flex items-center justify-center">
                      {isLit ? (
                        <div className="w-4 h-6 bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 rounded-full animate-flicker shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
                      ) : (
                        <div className="flex flex-col items-center">
                          <span className="text-xs text-stone-400">💨</span>
                          <span className="text-[10px] text-stone-400 font-mono">puff</span>
                        </div>
                      )}
                    </div>
                    {/* Candle Body */}
                    <div className={`w-3.5 h-10 rounded-t-sm border border-stone-300 ${
                      idx === 0 ? 'bg-rose-300' : idx === 1 ? 'bg-amber-300' : 'bg-sky-300'
                    } flex items-center justify-center`}>
                      <div className="w-full h-1 bg-white/40 my-auto" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Cake Tiers */}
            <div className="w-48 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 rounded-t-xl h-8 border border-pink-300 flex items-center justify-around px-2 relative shadow-xs">
              <span className="text-xs">🍓</span>
              <span className="text-xs">✨</span>
              <span className="text-xs">🍓</span>
              <span className="text-xs">✨</span>
              <span className="text-xs">🍓</span>
            </div>
            <div className="w-60 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 rounded-b-xl h-12 border-x border-b border-amber-300 flex items-center justify-around px-4 relative shadow-xs">
              <div className="w-full text-center">
                <span className="text-xs font-hand font-bold text-amber-900 tracking-wider">
                  Belbuddhi Special • 28 September 2026
                </span>
              </div>
            </div>
            {/* Cake Stand Plate */}
            <div className="w-68 h-2 bg-stone-300 rounded-full mt-0.5 shadow-sm" />

            {/* Quick Action Button for Cake */}
            <div className="mt-4">
              {!wishMade ? (
                <button
                  onClick={blowAll}
                  className="px-4 py-1.5 text-xs font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Wind className="w-3.5 h-3.5" />
                  <span>Blow Out All Candles & Make a Wish</span>
                </button>
              ) : (
                <div className="text-xs font-hand text-base font-bold text-emerald-800 bg-emerald-50 px-4 py-1 rounded-full border border-emerald-200 animate-bounce">
                  🎉 Wish registered! God bless those brain cells.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Bestie Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 w-full mt-12">
          {/* Card 1 */}
          <div className="bg-[#fffefb] p-4 rounded-xl border border-[#e8dcc4] paper-shadow -rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-700 mx-auto mb-2">
              <Brain className="w-4 h-4" />
            </div>
            <p className="text-2xl font-bold font-serif-display text-stone-900">1</p>
            <p className="text-xs text-stone-600 font-sans font-medium mt-0.5">Brain Cell Shared</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fffefb] p-4 rounded-xl border border-[#e8dcc4] paper-shadow rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 mx-auto mb-2">
              <Flame className="w-4 h-4" />
            </div>
            <p className="text-2xl font-bold font-serif-display text-stone-900">∞</p>
            <p className="text-xs text-stone-600 font-sans font-medium mt-0.5">Dumb Jokes Tolerated</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fffefb] p-4 rounded-xl border border-[#e8dcc4] paper-shadow -rotate-2 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 mx-auto mb-2">
              <Coffee className="w-4 h-4" />
            </div>
            <p className="text-2xl font-bold font-serif-display text-stone-900">4,820 L</p>
            <p className="text-xs text-stone-600 font-sans font-medium mt-0.5">Tea Spilled ☕</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#fffefb] p-4 rounded-xl border border-[#e8dcc4] paper-shadow rotate-2 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-700 mx-auto mb-2">
              <Clock className="w-4 h-4" />
            </div>
            <p className="text-2xl font-bold font-serif-display text-stone-900">4 Days</p>
            <p className="text-xs text-stone-600 font-sans font-medium mt-0.5">Avg Reply Speed</p>
          </div>

          {/* Card 5 */}
          <div className="col-span-2 md:col-span-1 bg-[#fffefb] p-4 rounded-xl border border-[#e8dcc4] paper-shadow -rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 mx-auto mb-2">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <p className="text-2xl font-bold font-serif-display text-stone-900">100%</p>
            <p className="text-xs text-stone-600 font-sans font-medium mt-0.5">Pure Dosti Vibes</p>
          </div>
        </div>
      </div>
    </section>
  );
};
