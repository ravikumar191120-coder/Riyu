import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Disc3, Music2, ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const MusicPlayerVinyl: React.FC<Props> = ({ isPlaying, onTogglePlay }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showAutoStartPrompt, setShowAutoStartPrompt] = useState(true);

  // Background audio source from prompt
  const AUDIO_SRC = "https://files.catbox.moe/ezs6m2.m4a";

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {
        // Autoplay policy might catch it before interaction
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // First interaction listener to enable smooth playback
  useEffect(() => {
    const handleFirstClick = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        setShowAutoStartPrompt(false);
      }
    };
    window.addEventListener('click', handleFirstClick, { once: true });
    return () => window.removeEventListener('click', handleFirstClick);
  }, [hasInteracted]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      setIsMuted(val === 0);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <>
      {/* Hidden Real HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
      />

      {/* Floating Auto-start prompt banner for users */}
      {showAutoStartPrompt && !isPlaying && (
        <div 
          onClick={() => {
            onTogglePlay();
            setShowAutoStartPrompt(false);
          }}
          className="fixed bottom-24 right-4 sm:right-6 z-40 bg-stone-900 text-stone-100 px-4 py-2.5 rounded-full shadow-xl border border-amber-400/50 flex items-center gap-2.5 cursor-pointer hover:bg-stone-800 transition-all animate-bounce"
        >
          <Music2 className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span className="text-xs font-mono">
            Tap to play Birthday Lofi BGM 🎵
          </span>
          <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded font-bold">
            PLAY
          </span>
        </div>
      )}

      {/* Floating Aesthetic Vinyl Player Widget */}
      <div className="fixed bottom-4 right-4 sm:right-6 z-40">
        <div className={`bg-[#fffefc] border-2 border-[#d8c39e] rounded-2xl polaroid-shadow transition-all duration-300 ${
          isMinimized ? 'p-2' : 'p-4 sm:p-5 w-80'
        }`}>
          {/* Header Bar */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              {!isMinimized && (
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-stone-500">
                  Soyam's Lofi Tape
                </span>
              )}
            </div>

            <button
              onClick={() => setIsMinimized(!isMinimized)}
              title={isMinimized ? "Expand Music Player" : "Minimize"}
              className="p-1 text-stone-500 hover:text-stone-900 rounded transition-colors cursor-pointer"
            >
              {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Minimized View */}
          {isMinimized ? (
            <div className="flex items-center gap-2 mt-1">
              <button
                onClick={onTogglePlay}
                className="w-10 h-10 rounded-full bg-stone-900 text-amber-300 flex items-center justify-center cursor-pointer shadow-md"
              >
                {isPlaying ? (
                  <Disc3 className="w-6 h-6 animate-spin-slow" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </button>
            </div>
          ) : (
            /* Expanded Full Player View */
            <div className="mt-3">
              <div className="flex items-center gap-3">
                {/* Vinyl Record */}
                <div 
                  onClick={onTogglePlay}
                  className="relative w-16 h-16 shrink-0 rounded-full bg-stone-900 border-2 border-stone-800 shadow-md flex items-center justify-center cursor-pointer overflow-hidden group"
                >
                  {/* Vinyl Grooves */}
                  <div className={`w-full h-full rounded-full border border-stone-700/50 absolute inset-0 ${
                    isPlaying ? 'animate-spin-slow' : ''
                  }`}>
                    <div className="absolute inset-2 rounded-full border border-stone-700/40" />
                    <div className="absolute inset-4 rounded-full border border-stone-700/30" />
                    <div className="absolute inset-6 rounded-full bg-rose-600 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#fdfaf2]" />
                    </div>
                  </div>

                  {/* Play / Pause indicator on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white">
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </div>
                </div>

                {/* Song Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-stone-900 truncate">
                    Aesthetic Chill Lofi - Bestie Vibes
                  </h4>
                  <p className="text-[11px] font-sans text-stone-500 truncate mt-0.5">
                    Curated with love by Soyam for Riya
                  </p>
                  
                  {/* Status Badge */}
                  <span className="inline-block mt-1 text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                    {isPlaying ? "Playing 🎵" : "Paused ⏸️"}
                  </span>
                </div>
              </div>

              {/* Progress Slider */}
              <div className="mt-3">
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
                />
                <div className="flex justify-between text-[10px] font-mono text-stone-500 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-200">
                <button
                  onClick={onTogglePlay}
                  className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>Play</span>
                    </>
                  )}
                </button>

                {/* Volume Controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={toggleMute}
                    className="p-1 text-stone-600 hover:text-stone-900 cursor-pointer"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-3.5 h-3.5" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-16 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-700"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
