import React from 'react';
import { 
  Camera, 
  Brain, 
  Moon, 
  Sparkles, 
  Image as ImageIcon, 
  Sun, 
  HelpCircle, 
  MessageCircle, 
  Zap, 
  Smile, 
  Laugh, 
  Music, 
  Award, 
  Flame, 
  Cake
} from 'lucide-react';

interface Props {
  type: string;
  gradient: string;
  caption: string;
  customImageUrl?: string;
  filterPreset?: string;
  objectPosition?: string;
  fitMode?: 'cover' | 'contain';
}

export const ScrapbookIllustration: React.FC<Props> = ({ 
  type, 
  gradient, 
  caption, 
  customImageUrl,
  filterPreset = 'vintage',
  objectPosition = 'object-center',
  fitMode = 'cover'
}) => {
  const [imgError, setImgError] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  // Map filter preset to CSS class
  const filterClass = {
    vintage: 'filter-warm-vintage',
    golden: 'filter-golden-hour',
    polaroid: 'filter-polaroid-film',
    mono: 'filter-noir-mono',
    vibrant: 'filter-vibrant',
    normal: ''
  }[filterPreset] || 'filter-warm-vintage';

  if (customImageUrl && !imgError) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-stone-900/15 flex items-center justify-center select-none group/img">
        {/* Placeholder skeleton shimmer while loading */}
        {!loaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-stone-200 via-amber-100 to-stone-200 animate-pulse flex items-center justify-center">
            <span className="text-xs font-hand text-stone-500 font-bold">Unfolding Memory...</span>
          </div>
        )}

        {/* Ambient blurred backdrop when fitMode is contain (e.g. for Photo 2 tall screenshots) */}
        {fitMode === 'contain' && (
          <img 
            src={customImageUrl} 
            alt="" 
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-lg scale-115 opacity-40 brightness-75 pointer-events-none"
          />
        )}

        {/* Real Catbox / Uploaded Image with vintage photo adjustments */}
        <img 
          src={customImageUrl} 
          alt={caption}
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setImgError(true)}
          loading="lazy"
          className={`relative z-10 transition-all duration-700 ease-out group-hover/img:scale-105 group-hover/img:brightness-105 ${filterClass} ${
            fitMode === 'contain' 
              ? 'max-h-full max-w-full object-contain p-1 drop-shadow-md' 
              : `w-full h-full object-cover ${objectPosition}`
          } ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Vintage warm film overlay & soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-amber-900/10 pointer-events-none z-20" />
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.18)] pointer-events-none z-20" />

        {/* Glossy light reflection sweep animation on hover */}
        <div className="absolute inset-0 w-1/2 -left-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-[-25deg] group-hover/img:animate-sheen pointer-events-none z-20" />

        {/* Vintage Digital Camera Date Stamp in Corner: 28 Sep */}
        <div className="absolute bottom-2 right-2.5 font-mono text-[9px] font-bold text-amber-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] tracking-widest pointer-events-none opacity-85 z-20">
          '26 09 28
        </div>
      </div>
    );
  }

  // Styled SVG/CSS Fallback & Default Artistic Scrapbook Motifs
  return (
    <div className={`w-full h-full relative overflow-hidden bg-gradient-to-br ${gradient} flex flex-col items-center justify-center p-4 select-none`}>
      {/* Film grain / vintage photo paper overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:10px_10px]" />
      
      {/* Decorative corner brackets */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-stone-600/30" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-stone-600/30" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-stone-600/30" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-stone-600/30" />

      {/* Motif Graphics based on type */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {type === 'nature' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-amber-200/80 border-2 border-dashed border-amber-600/40 flex items-center justify-center mb-2 shadow-inner">
              <Camera className="w-8 h-8 text-amber-800" />
            </div>
            <span className="absolute -top-1 -right-2 text-xl">🌿</span>
            <span className="absolute -bottom-1 -left-2 text-xl">📸</span>
          </div>
        )}

        {type === 'brain' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-rose-200/80 border-2 border-rose-400/50 flex items-center justify-center mb-2 animate-pulse">
              <Brain className="w-9 h-9 text-rose-700" />
            </div>
            <span className="absolute -top-3 -right-2 text-xl animate-bounce">💡</span>
            <span className="absolute -bottom-2 -left-2 text-sm bg-white/90 text-rose-800 px-1.5 py-0.5 rounded font-mono font-bold shadow-xs">1%</span>
          </div>
        )}

        {type === 'night' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-indigo-200/80 border-2 border-indigo-400/50 flex items-center justify-center mb-2">
              <Moon className="w-8 h-8 text-indigo-700" />
            </div>
            <span className="absolute -top-2 -right-2 text-xl">☁️</span>
            <span className="absolute -bottom-1 -left-1 text-sm">✨</span>
          </div>
        )}

        {type === 'innocent' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-emerald-200/80 border-2 border-emerald-400/50 flex items-center justify-center mb-2">
              <Smile className="w-9 h-9 text-emerald-800" />
            </div>
            <span className="absolute -top-3 left-3 text-lg">😇</span>
            <span className="absolute -bottom-2 -right-1 text-base">😈</span>
          </div>
        )}

        {type === 'diva' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-fuchsia-200/80 border-2 border-fuchsia-400/50 flex items-center justify-center mb-2">
              <Sparkles className="w-8 h-8 text-fuchsia-800" />
            </div>
            <span className="absolute -top-2 -right-2 text-xl">💅</span>
            <span className="absolute -bottom-1 -left-2 text-lg">🕶️</span>
          </div>
        )}

        {type === 'camera_roll' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-lg bg-amber-200/80 border-2 border-amber-500/50 flex items-center justify-center mb-2">
              <ImageIcon className="w-8 h-8 text-amber-800" />
            </div>
            <span className="absolute -top-2 -right-2 text-sm bg-red-500 text-white font-mono px-1 rounded-full font-bold">50+</span>
            <span className="absolute -bottom-1 -left-1 text-lg">🗑️</span>
          </div>
        )}

        {type === 'aesthetic' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-lime-200/80 border-2 border-lime-400/50 flex items-center justify-center mb-2">
              <Sun className="w-9 h-9 text-amber-600" />
            </div>
            <span className="absolute -top-2 -left-2 text-xl">✨</span>
            <span className="absolute -bottom-1 -right-2 text-xl">🌻</span>
          </div>
        )}

        {type === 'confused' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-sky-200/80 border-2 border-sky-400/50 flex items-center justify-center mb-2">
              <HelpCircle className="w-9 h-9 text-sky-800" />
            </div>
            <span className="absolute -top-2 -right-2 text-xl">😵‍💫</span>
            <span className="absolute -bottom-1 -left-2 text-lg">❓</span>
          </div>
        )}

        {type === 'texting' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-purple-200/80 border-2 border-purple-400/50 flex items-center justify-center mb-2">
              <MessageCircle className="w-8 h-8 text-purple-800" />
            </div>
            <span className="absolute -top-2 -right-2 text-xl">⏳</span>
            <span className="absolute -bottom-1 -left-1 text-sm bg-stone-700 text-white px-1 rounded">2d ago</span>
          </div>
        )}

        {type === 'moods' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-amber-200/80 border-2 border-amber-400/50 flex items-center justify-center mb-2">
              <Zap className="w-8 h-8 text-amber-700" />
            </div>
            <span className="absolute -top-2 -left-2 text-xl">😇</span>
            <span className="absolute -bottom-1 -right-2 text-xl">🌋</span>
          </div>
        )}

        {type === 'laughing' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-teal-200/80 border-2 border-teal-400/50 flex items-center justify-center mb-2">
              <Laugh className="w-9 h-9 text-teal-800" />
            </div>
            <span className="absolute -top-2 -right-2 text-xl">🤣</span>
            <span className="absolute -bottom-1 -left-1 text-xl">💀</span>
          </div>
        )}

        {type === 'bollywood' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-violet-200/80 border-2 border-violet-400/50 flex items-center justify-center mb-2">
              <Music className="w-8 h-8 text-violet-800" />
            </div>
            <span className="absolute -top-2 -right-2 text-xl">🎬</span>
            <span className="absolute -bottom-1 -left-2 text-xl">🌧️</span>
          </div>
        )}

        {type === 'formal' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-xl bg-rose-200/80 border-2 border-rose-400/50 flex items-center justify-center mb-2">
              <Award className="w-8 h-8 text-rose-800" />
            </div>
            <span className="absolute -top-2 -right-2 text-xl">🎩</span>
            <span className="absolute -bottom-1 -left-1 text-xl">☕</span>
          </div>
        )}

        {type === 'crime_partner' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-yellow-200/80 border-2 border-yellow-500/50 flex items-center justify-center mb-2">
              <Flame className="w-8 h-8 text-orange-600" />
            </div>
            <span className="absolute -top-2 -left-2 text-xl">🍕</span>
            <span className="absolute -bottom-1 -right-2 text-xl">🤝</span>
          </div>
        )}

        {type === 'birthday_finale' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-amber-200/90 border-2 border-amber-500/50 flex items-center justify-center mb-2">
              <Cake className="w-9 h-9 text-amber-800" />
            </div>
            <span className="absolute -top-3 -right-3 text-2xl">🎉</span>
            <span className="absolute -bottom-2 -left-2 text-xl">🎈</span>
          </div>
        )}

        <p className="text-xs font-hand text-stone-700 max-w-[170px] mt-1 font-semibold leading-tight line-clamp-2">
          {caption}
        </p>
        <span className="text-[10px] text-stone-500 font-mono mt-0.5 uppercase tracking-wider">
          Memory Archive
        </span>
      </div>
    </div>
  );
};
