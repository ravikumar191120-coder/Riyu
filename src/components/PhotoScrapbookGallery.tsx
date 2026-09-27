import React, { useState } from 'react';
import { PolaroidItem } from '../data/scrapbookData';
import { ScrapbookIllustration } from './ScrapbookIllustration';
import { ImagePlus, Maximize2, Sparkles, SlidersHorizontal, Eye } from 'lucide-react';

interface Props {
  polaroids: PolaroidItem[];
  onSelectPhoto: (photo: PolaroidItem) => void;
  onEditPhoto: (photo: PolaroidItem) => void;
  onReact: (photoId: number, reactionType: 'laughs' | 'brains' | 'hearts' | 'skulls') => void;
  onToggleFitMode?: (photoId: number) => void;
}

export const PhotoScrapbookGallery: React.FC<Props> = ({
  polaroids,
  onSelectPhoto,
  onEditPhoto,
  onReact,
  onToggleFitMode,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('vintage');

  const filterOptions = [
    { id: 'vintage', label: 'Vintage Warm 🎞️' },
    { id: 'golden', label: 'Golden Glow ✨' },
    { id: 'polaroid', label: 'Polaroid Film 📸' },
    { id: 'vibrant', label: 'Vibrant Pop 🌈' },
    { id: 'mono', label: 'Noir B&W 🖤' },
    { id: 'normal', label: 'Original 🎨' },
  ];

  return (
    <section id="scrapbook" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header with Scrapbook Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-block relative">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 bg-stone-100 px-3 py-1 rounded-sm border border-stone-200">
            Memory Vault · 15 Certified Moments
          </span>
          <div className="absolute -top-3 -right-6 text-xl">📌</div>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#2d2926] mt-3">
          The 15 Iconic <span className="font-hand text-rose-600 italic">Belbuddhi</span> Polaroids
        </h2>
        <p className="mt-2 text-base font-hand font-semibold text-stone-600">
          Hand-taped photographic evidence of our dumbest, funniest, and most unforgettable friendship memories.
        </p>

        {/* Vintage Aesthetic Filter Selector Toolbar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-stone-500 mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-700" />
            <span>Filter Effects:</span>
          </div>
          {filterOptions.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-amber-800 text-amber-50 shadow-xs scale-105 font-bold'
                  : 'bg-stone-200/70 hover:bg-stone-300 text-stone-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* 15 Polaroids Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {polaroids.map((photo, index) => {
          const tapeClasses = {
            yellow: "washi-tape",
            pink: "washi-tape washi-pink",
            green: "washi-tape washi-green",
            blue: "washi-tape washi-blue",
          }[photo.tapeColor];

          return (
            <div
              key={photo.id}
              className={`group relative bg-[#fffdf9] p-4 pb-6 rounded-xs polaroid-shadow hover:polaroid-shadow-hover transition-all duration-300 transform ${photo.rotation} hover:rotate-0 hover:-translate-y-2 border border-stone-200/80 cursor-pointer flex flex-col perspective-1000`}
              onClick={() => onSelectPhoto(photo)}
            >
              {/* Washi Tape strip on top */}
              <div 
                className={`absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6.5 ${tapeClasses} z-20 pointer-events-none group-hover:scale-105 transition-transform`}
                style={{
                  transform: `translateX(-50%) rotate(${index % 2 === 0 ? '-2deg' : '2.5deg'})`
                }}
              />

              {/* Photo Frame Container: True Polaroid 4:5 vertical proportion */}
              <div className="relative w-full aspect-[4/5] rounded-xs overflow-hidden border border-stone-300/80 bg-stone-900/10 group-hover:brightness-105 transition-all shadow-inner">
                <ScrapbookIllustration
                  type={photo.illustrationType}
                  gradient={photo.themeGradient}
                  caption={photo.caption}
                  customImageUrl={photo.customImageUrl}
                  filterPreset={activeFilter}
                  objectPosition={photo.objectPosition}
                  fitMode={photo.fitMode || 'cover'}
                />

                {/* Hover overlay with action icons */}
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2.5 z-30">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPhoto(photo);
                    }}
                    title="View Full Polaroid"
                    className="p-2.5 bg-white/95 hover:bg-white text-stone-800 rounded-full shadow-md transition-transform hover:scale-110 cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {onToggleFitMode && photo.customImageUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFitMode(photo.id);
                      }}
                      title={photo.fitMode === 'contain' ? "Switch to Fill" : "Switch to Full Frame (No crop)"}
                      className="p-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-md transition-transform hover:scale-110 cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEditPhoto(photo);
                    }}
                    title="Change or edit this photo"
                    className="p-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-md transition-transform hover:scale-110 cursor-pointer"
                  >
                    <ImagePlus className="w-4 h-4" />
                  </button>
                </div>

                {/* Photo sequence badge in polaroid corner */}
                <span className="absolute bottom-2 left-2 text-[10px] font-mono bg-stone-900/75 backdrop-blur-xs text-white px-2 py-0.5 rounded-sm z-30">
                  #{String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Handwritten Polaroid Caption */}
              <div className="mt-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-hand font-bold text-stone-900 leading-tight group-hover:text-amber-900 transition-colors">
                    {photo.caption}
                  </h3>
                  <p className="text-xs font-sans text-stone-600 mt-1 italic leading-relaxed">
                    "{photo.roastSubtitle}"
                  </p>
                </div>

                {/* Metadata & Interactive Reaction Counters */}
                <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-stone-500 flex items-center gap-1">
                    <span>📅</span>
                    <span>{photo.date}</span>
                  </span>

                  {/* Reaction Buttons */}
                  <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => onReact(photo.id, 'laughs')}
                      title="Laugh at this"
                      className="px-2 py-0.5 bg-amber-50 hover:bg-amber-100 text-stone-700 rounded-md text-[11px] flex items-center gap-1 transition-transform active:scale-95 cursor-pointer border border-amber-200"
                    >
                      <span>😂</span>
                      <span className="font-mono text-[10px] font-bold">{photo.reactions.laughs}</span>
                    </button>

                    <button
                      onClick={() => onReact(photo.id, 'brains')}
                      title="Belbuddhi moment"
                      className="px-2 py-0.5 bg-rose-50 hover:bg-rose-100 text-stone-700 rounded-md text-[11px] flex items-center gap-1 transition-transform active:scale-95 cursor-pointer border border-rose-200"
                    >
                      <span>🧠</span>
                      <span className="font-mono text-[10px] font-bold">{photo.reactions.brains}</span>
                    </button>

                    <button
                      onClick={() => onReact(photo.id, 'hearts')}
                      title="Pure Dosti Love"
                      className="px-2 py-0.5 bg-pink-50 hover:bg-pink-100 text-stone-700 rounded-md text-[11px] flex items-center gap-1 transition-transform active:scale-95 cursor-pointer border border-pink-200"
                    >
                      <span>❤️</span>
                      <span className="font-mono text-[10px] font-bold">{photo.reactions.hearts}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

