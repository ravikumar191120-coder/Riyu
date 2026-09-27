import React, { useState } from 'react';
import { SECRET_LETTER_CONTENT } from '../data/scrapbookData';
import { Mail, Sparkles, Copy, Check, Printer, X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onDropConfetti: () => void;
}

export const SecretLetterSection: React.FC<Props> = ({
  isOpen,
  onOpen,
  onClose,
  onDropConfetti,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const fullText = `${SECRET_LETTER_CONTENT.recipient}\n\n${SECRET_LETTER_CONTENT.paragraphs.join('\n\n')}\n\n${SECRET_LETTER_CONTENT.signoff}\n${SECRET_LETTER_CONTENT.sender}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="secret-letter" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Teaser / Envelope Card on Page */}
      <div className="text-center mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-500 bg-stone-100 px-3 py-1 rounded-sm border border-stone-200">
          Top Secret · Bestie Eyes Only
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#2d2926] mt-3">
          The Unfiltered Letter from <span className="font-hand text-rose-600 italic">Soyam</span>
        </h2>
        <p className="mt-2 text-base font-hand font-semibold text-stone-600">
          Zero filters, maximum nostalgia, pure unfiltered friendship and honest words for 28th September.
        </p>
      </div>

      {/* Sealed Vintage Envelope Container */}
      <div className="max-w-xl mx-auto">
        <div 
          onClick={() => {
            onOpen();
            onDropConfetti();
          }}
          className="group relative bg-[#fdf6e9] border-2 border-[#d8c39e] rounded-2xl p-8 sm:p-12 polaroid-shadow hover:polaroid-shadow-hover transition-all duration-300 transform -rotate-1 hover:rotate-0 hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center overflow-hidden"
        >
          {/* Top washi tape */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-36 h-7 washi-tape washi-pink rotate-2 pointer-events-none z-10" />

          {/* Envelope flap lines */}
          <div className="absolute top-0 inset-x-0 h-28 bg-[#f5ebd7] border-b-2 border-[#d8c39e] [clip-path:polygon(0_0,50%_100%,100%_0)] pointer-events-none opacity-80" />

          {/* Wax Seal Button in Center */}
          <div className="relative mt-8 mb-4">
            <div className="w-20 h-20 rounded-full bg-rose-700 border-4 border-rose-900/60 shadow-lg flex items-center justify-center text-rose-100 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <div className="w-14 h-14 rounded-full border border-dashed border-rose-400/80 flex flex-col items-center justify-center">
                <span className="font-hand font-bold text-lg leading-none">S & R</span>
                <span className="text-[9px] font-mono tracking-tighter uppercase mt-0.5">SEALED</span>
              </div>
            </div>
            {/* Sparkle badge */}
            <span className="absolute -top-1 -right-1 text-xl animate-bounce">✨</span>
          </div>

          <h3 className="text-2xl font-serif-display font-bold text-stone-900 mt-2">
            Click Wax Seal to Break & Open
          </h3>
          <p className="text-xs sm:text-sm font-sans text-stone-600 mt-1 max-w-sm">
            Stamped with the Official Seal of Permanent Friendship & Roasting Rights.
          </p>

          <div className="mt-4 px-4 py-1.5 bg-rose-50 text-rose-800 text-xs font-mono font-semibold rounded-full border border-rose-200">
            Confidential · Soyam ➔ Belbuddhi
          </div>
        </div>
      </div>

      {/* Unfolded Letter Modal Dialog */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-stone-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <div 
            className="relative max-w-2xl w-full bg-notebook-ruled border-2 border-[#d8c39e] rounded-lg p-6 sm:p-10 polaroid-shadow-hover my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Washi tapes on corners */}
            <div className="absolute -top-3.5 left-8 w-24 h-6 washi-tape -rotate-3 z-10" />
            <div className="absolute -top-3.5 right-8 w-24 h-6 washi-tape washi-green rotate-3 z-10" />

            {/* Modal Controls */}
            <div className="flex items-center justify-between border-b border-stone-300/80 pb-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-stone-500 uppercase tracking-widest">
                  Letter from Soyam · {SECRET_LETTER_CONTENT.date}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  title="Copy Letter Text"
                  className="p-1.5 text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded transition-colors cursor-pointer text-xs flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-[11px] font-semibold text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handlePrint}
                  title="Print / Save PDF"
                  className="p-1.5 text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded transition-colors cursor-pointer text-xs flex items-center gap-1"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Print</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Letter Content in Handwriting Font */}
            <div className="space-y-4 text-stone-900 font-sans">
              <div className="text-xl sm:text-2xl font-hand font-bold text-rose-900">
                {SECRET_LETTER_CONTENT.recipient},
              </div>

              {SECRET_LETTER_CONTENT.paragraphs.map((p, idx) => (
                <p 
                  key={idx} 
                  className="text-base sm:text-lg font-hand font-medium leading-relaxed text-stone-800"
                >
                  {p}
                </p>
              ))}

              <div className="pt-6 border-t border-stone-300/80">
                <p className="font-hand text-lg text-stone-600 italic">
                  {SECRET_LETTER_CONTENT.signoff}
                </p>
                <p className="font-hand font-bold text-2xl text-rose-800 mt-1">
                  {SECRET_LETTER_CONTENT.sender}
                </p>
              </div>
            </div>

            {/* Bottom Close Button */}
            <div className="mt-8 text-center">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
              >
                Close Letter
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
