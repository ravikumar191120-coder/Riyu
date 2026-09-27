import React, { useState } from 'react';
import { STICKY_NOTES, StickyNote } from '../data/scrapbookData';
import { Flame, Heart, BookOpen, Gift, Copy, Check } from 'lucide-react';

export const StickyNotesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'roast' | 'wholesome' | 'rules' | 'wishes'>('roast');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredNotes = STICKY_NOTES.filter(n => n.category === activeTab);

  const handleCopy = (note: StickyNote) => {
    const text = `"${note.title}"\n${note.content}\n— ${note.author}`;
    navigator.clipboard.writeText(text);
    setCopiedId(note.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <section id="sticky-notes" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block relative">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 bg-stone-100 px-3 py-1 rounded-sm border border-stone-200">
            Corkboard Memos & Roasts
          </span>
          <div className="absolute -top-3 -right-6 text-xl">📌</div>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#2d2926] mt-3">
          Bestie Sticky Notes & <span className="font-hand text-amber-700 italic">Dosti Rules</span>
        </h2>
        <p className="mt-2 text-base font-hand font-semibold text-stone-600">
          The unwritten laws of our friendship, spicy roasts, and the wholesome reality.
        </p>
      </div>

      {/* 4 Tabs / Filter Buttons */}
      <div className="flex items-center justify-center mb-10">
        <div className="inline-flex p-1.5 bg-[#f0e6d6] rounded-xl border border-[#ded0bb] shadow-inner gap-1 flex-wrap justify-center">
          <button
            onClick={() => setActiveTab('roast')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'roast'
                ? 'bg-amber-100 text-amber-900 shadow-xs border border-amber-300'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/50'
            }`}
          >
            <Flame className="w-4 h-4 text-orange-600" />
            <span>Roast Central 🌶️</span>
          </button>

          <button
            onClick={() => setActiveTab('wholesome')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'wholesome'
                ? 'bg-sky-100 text-sky-900 shadow-xs border border-sky-300'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/50'
            }`}
          >
            <Heart className="w-4 h-4 text-sky-600" />
            <span>Wholesome Dosti 🫂</span>
          </button>

          <button
            onClick={() => setActiveTab('rules')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'rules'
                ? 'bg-lime-100 text-lime-900 shadow-xs border border-lime-300'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Golden Rules 📜</span>
          </button>

          <button
            onClick={() => setActiveTab('wishes')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'wishes'
                ? 'bg-rose-100 text-rose-900 shadow-xs border border-rose-300'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/50'
            }`}
          >
            <Gift className="w-4 h-4 text-rose-600" />
            <span>Birthday Wishes 🎂</span>
          </button>
        </div>
      </div>

      {/* Corkboard Container */}
      <div className="bg-[#ede1cc] border-4 border-[#c8b79b] rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        {/* Cork texture styling */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#8b5a2b_1px,transparent_1px)] bg-[size:16px_16px]" />

        {/* Decorative corner pushpins */}
        <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-red-600 border border-red-800 shadow-md" />
        <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-amber-500 border border-amber-700 shadow-md" />
        <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-blue-600 border border-blue-800 shadow-md" />
        <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-emerald-600 border border-emerald-800 shadow-md" />

        {/* Sticky Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className={`relative ${note.colorClass} ${note.angle} hover:rotate-0 hover:scale-102 transition-all duration-300 p-6 rounded-sm border paper-shadow flex flex-col justify-between min-h-[220px]`}
            >
              {/* Pushpin at top center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full ${note.pinColor} border-2 border-stone-800/40 shadow-sm`} />
                <div className="w-0.5 h-1.5 bg-stone-500 -mt-0.5" />
              </div>

              {/* Note Content */}
              <div>
                <div className="flex items-start justify-between gap-2 border-b border-black/10 pb-2 mb-3">
                  <h3 className="font-hand font-bold text-xl sm:text-2xl leading-tight">
                    {note.title}
                  </h3>
                  <button
                    onClick={() => handleCopy(note)}
                    title="Copy note text"
                    className="p-1 hover:bg-black/5 rounded transition-colors text-black/50 hover:text-black shrink-0 cursor-pointer"
                  >
                    {copiedId === note.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <p className="font-sans text-xs sm:text-sm leading-relaxed opacity-90">
                  {note.content}
                </p>
              </div>

              {/* Note Footer */}
              <div className="mt-4 pt-2 border-t border-black/10 flex items-center justify-between text-[11px] font-mono opacity-70">
                <span>{note.tag}</span>
                <span className="italic">— {note.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
