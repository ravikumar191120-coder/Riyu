import React, { useState } from 'react';
import { PolaroidItem } from '../data/scrapbookData';
import { X, Check, ImagePlus, RefreshCw, Upload, ExternalLink } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  polaroids: PolaroidItem[];
  onUpdatePhoto: (id: number, url: string) => void;
  onResetAll: () => void;
}

export const CustomPhotoModal: React.FC<Props> = ({
  isOpen,
  onClose,
  polaroids,
  onUpdatePhoto,
  onResetAll,
}) => {
  const [activeTabId, setActiveTabId] = useState<number>(1);
  const [customInput, setCustomInput] = useState<string>('');
  const [savedNotice, setSavedNotice] = useState<boolean>(false);

  if (!isOpen) return null;

  const activePhoto = polaroids.find(p => p.id === activeTabId) || polaroids[0];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdatePhoto(activePhoto.id, customInput.trim());
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 1500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomInput(result);
          onUpdatePhoto(activePhoto.id, result);
          setSavedNotice(true);
          setTimeout(() => setSavedNotice(false), 1500);
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
        className="relative max-w-3xl w-full bg-[#fffefb] border-2 border-stone-300 rounded-xl p-6 sm:p-8 polaroid-shadow-hover my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-900">
              <ImagePlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-display font-bold text-xl text-stone-900">
                Custom Polaroid Photo Manager
              </h3>
              <p className="text-xs text-stone-500 font-sans">
                Replace any of the 15 photos with Catbox links (e.g. catbox.moe) or upload from your device.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body: Split view of photo selector & edit form */}
        <div className="flex-1 overflow-y-auto py-4 flex flex-col md:flex-row gap-6">
          {/* Photo List Selector (Left) */}
          <div className="w-full md:w-1/2 space-y-1.5 max-h-[380px] overflow-y-auto pr-2 border-r border-stone-200">
            {polaroids.map((p) => {
              const isSelected = p.id === activeTabId;
              const hasCustom = !!p.customImageUrl;

              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setActiveTabId(p.id);
                    setCustomInput(p.customImageUrl || '');
                    setSavedNotice(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-sans flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-amber-100 text-amber-950 font-bold border border-amber-300'
                      : 'hover:bg-stone-100 text-stone-700'
                  }`}
                >
                  <span className="truncate pr-2">
                    <span className="font-mono text-stone-400 mr-1.5">#{p.id}</span>
                    {p.caption}
                  </span>
                  {hasCustom && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-mono font-semibold shrink-0">
                      Custom Photo
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Edit Form for selected photo (Right) */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg mb-4">
                <span className="text-[10px] font-mono text-stone-500 uppercase">Selected Polaroid:</span>
                <h4 className="font-hand font-bold text-lg text-stone-900 mt-0.5">
                  #{activePhoto.id} · {activePhoto.caption}
                </h4>
                <p className="text-xs text-stone-600 italic mt-1">
                  "{activePhoto.roastSubtitle}"
                </p>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Direct Image URL (Catbox, Imgur, direct link):
                  </label>
                  <input
                    type="url"
                    placeholder="https://files.catbox.moe/abc123.jpg"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Apply Link</span>
                  </button>

                  <label className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {savedNotice && (
                  <p className="text-xs text-emerald-700 font-semibold bg-emerald-50 p-2 rounded border border-emerald-200">
                    ✨ Photo updated for Photo #{activePhoto.id}!
                  </p>
                )}
              </form>
            </div>

            {/* Quick helper note */}
            <div className="mt-6 pt-4 border-t border-stone-200 text-[11px] text-stone-500 space-y-1">
              <p>💡 Tip: Upload to <a href="https://catbox.moe" target="_blank" rel="noopener noreferrer" className="underline font-bold text-amber-800 inline-flex items-center gap-0.5">catbox.moe <ExternalLink className="w-2.5 h-2.5" /></a> and paste the link here for high quality!</p>
              <p>All customized photos are stored in your browser's local memory.</p>
            </div>
          </div>
        </div>

        {/* Footer with Reset All Button */}
        <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={onResetAll}
            className="text-xs text-stone-500 hover:text-rose-600 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset All to Default Illustrations</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
