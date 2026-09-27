import React, { useEffect, useState } from 'react';
import { PolaroidItem } from '../data/scrapbookData';
import { ScrapbookIllustration } from './ScrapbookIllustration';
import { X, ChevronLeft, ChevronRight, ImagePlus, Check, Sparkles, Laugh, Brain, Heart, Skull, SlidersHorizontal, Eye } from 'lucide-react';

interface Props {
  photo: PolaroidItem | null;
  allPhotos: PolaroidItem[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onUpdatePhotoUrl: (id: number, url: string) => void;
  onReact: (photoId: number, reactionType: 'laughs' | 'brains' | 'hearts' | 'skulls') => void;
}

export const PhotoLightboxModal: React.FC<Props> = ({
  photo,
  allPhotos,
  onClose,
  onNext,
  onPrev,
  onUpdatePhotoUrl,
  onReact,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const [savedNotice, setSavedNotice] = useState(false);
  const [modalFilter, setModalFilter] = useState('vintage');
  const [fitMode, setFitMode] = useState<'cover' | 'contain'>('cover');

  useEffect(() => {
    if (photo) {
      setInputUrl(photo.customImageUrl || '');
      setIsEditing(false);
    }
  }, [photo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, onClose, onNext, onPrev]);

  if (!photo) return null;

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdatePhotoUrl(photo.id, inputUrl.trim());
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      setIsEditing(false);
    }, 1200);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setInputUrl(result);
          onUpdatePhotoUrl(photo.id, result);
          setSavedNotice(true);
          setTimeout(() => {
            setSavedNotice(false);
            setIsEditing(false);
          }, 1200);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-stone-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-[#fffefc] border-2 border-stone-300 rounded-sm p-6 sm:p-8 polaroid-shadow-hover my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Washi Tape at Top */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-36 h-7 washi-tape rotate-1 z-10" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors cursor-pointer z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={onPrev}
          title="Previous Photo"
          className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 hover:bg-white text-stone-800 rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer z-20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={onNext}
          title="Next Photo"
          className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 hover:bg-white text-stone-800 rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer z-20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Modal Polaroid Content */}
        <div className="flex flex-col">
          {/* Main Photo Area */}
          <div className={`w-full ${fitMode === 'contain' ? 'h-96' : 'aspect-4/3 sm:aspect-16/10'} rounded-xs overflow-hidden border-2 border-stone-200 bg-stone-900 relative shadow-inner flex items-center justify-center`}>
            {photo.customImageUrl && fitMode === 'contain' ? (
              <img
                src={photo.customImageUrl}
                alt={photo.caption}
                className="max-w-full max-h-full object-contain filter-warm-vintage transition-all"
              />
            ) : (
              <ScrapbookIllustration
                type={photo.illustrationType}
                gradient={photo.themeGradient}
                caption={photo.caption}
                customImageUrl={photo.customImageUrl}
                filterPreset={modalFilter}
              />
            )}

            <span className="absolute bottom-2 left-2 text-xs font-mono bg-stone-900/80 text-white px-2 py-0.5 rounded-sm">
              Photo {photo.id} of {allPhotos.length}
            </span>

            {photo.customImageUrl && (
              <button
                onClick={() => setFitMode(fitMode === 'cover' ? 'contain' : 'cover')}
                className="absolute top-2 right-2 text-[10px] font-mono bg-stone-900/80 hover:bg-stone-900 text-white px-2 py-1 rounded cursor-pointer transition-colors flex items-center gap-1"
              >
                <Eye className="w-3 h-3" />
                <span>{fitMode === 'cover' ? 'Full Frame' : 'Fill'}</span>
              </button>
            )}
          </div>

          {/* Quick Filters in Modal */}
          <div className="mt-3 flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-stone-600 border-b border-stone-200 pb-3">
            <span className="flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3 text-amber-700" />
              <span>Aesthetic:</span>
            </span>
            <div className="flex gap-1.5 flex-wrap">
              {['vintage', 'golden', 'polaroid', 'mono', 'normal'].map((f) => (
                <button
                  key={f}
                  onClick={() => setModalFilter(f)}
                  className={`px-2 py-0.5 rounded text-[11px] capitalize cursor-pointer ${
                    modalFilter === f ? 'bg-amber-800 text-white font-bold' : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Caption & Roast Narrative */}
          <div className="mt-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-hand font-bold text-stone-900">
                  {photo.caption}
                </h3>
                <p className="text-sm font-sans text-stone-700 mt-2 italic leading-relaxed">
                  "{photo.roastSubtitle}"
                </p>
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="shrink-0 px-3 py-1.5 text-xs font-medium text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ImagePlus className="w-3.5 h-3.5" />
                <span>{isEditing ? "Hide Form" : "Custom Photo"}</span>
              </button>
            </div>

            {/* Custom Photo Editor Form */}
            {isEditing && (
              <form onSubmit={handleSaveUrl} className="mt-4 p-4 bg-amber-50/70 border border-amber-200 rounded-lg">
                <p className="text-xs font-medium text-amber-950 mb-2">
                  Replace with a real photo (Catbox URL, direct image link, or upload from device):
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="url"
                    placeholder="https://files.catbox.moe/... or image URL"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    className="flex-1 px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="px-4 py-1.5 text-xs font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Save Link</span>
                    </button>
                    
                    <label className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-md transition-colors flex items-center gap-1 cursor-pointer">
                      <span>Upload File</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
                {savedNotice && (
                  <p className="text-xs text-emerald-700 font-semibold mt-2 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Photo updated successfully! Saved in your scrapbook.</span>
                  </p>
                )}
              </form>
            )}

            {/* Bottom details & Reactions */}
            <div className="mt-6 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-stone-500 font-mono">
                <span>📍 {photo.location}</span>
                <span>·</span>
                <span>📅 {photo.date}</span>
              </div>

              {/* Reactions Bar */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-500 font-sans mr-1">React:</span>
                <button
                  onClick={() => onReact(photo.id, 'laughs')}
                  className="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-stone-800 rounded-md border border-amber-200 text-xs flex items-center gap-1.5 cursor-pointer transition-transform active:scale-95"
                >
                  <Laugh className="w-3.5 h-3.5 text-amber-600" />
                  <span className="font-mono font-bold">{photo.reactions.laughs}</span>
                </button>

                <button
                  onClick={() => onReact(photo.id, 'brains')}
                  className="px-2.5 py-1 bg-rose-50 hover:bg-rose-100 text-stone-800 rounded-md border border-rose-200 text-xs flex items-center gap-1.5 cursor-pointer transition-transform active:scale-95"
                >
                  <Brain className="w-3.5 h-3.5 text-rose-600" />
                  <span className="font-mono font-bold">{photo.reactions.brains}</span>
                </button>

                <button
                  onClick={() => onReact(photo.id, 'hearts')}
                  className="px-2.5 py-1 bg-pink-50 hover:bg-pink-100 text-stone-800 rounded-md border border-pink-200 text-xs flex items-center gap-1.5 cursor-pointer transition-transform active:scale-95"
                >
                  <Heart className="w-3.5 h-3.5 text-pink-600 fill-pink-600" />
                  <span className="font-mono font-bold">{photo.reactions.hearts}</span>
                </button>

                <button
                  onClick={() => onReact(photo.id, 'skulls')}
                  className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-md border border-stone-300 text-xs flex items-center gap-1.5 cursor-pointer transition-transform active:scale-95"
                >
                  <Skull className="w-3.5 h-3.5 text-stone-600" />
                  <span className="font-mono font-bold">{photo.reactions.skulls}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

