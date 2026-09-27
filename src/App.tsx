import React, { useState, useEffect } from 'react';
import { INITIAL_POLAROIDS, PolaroidItem } from './data/scrapbookData';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { PhotoScrapbookGallery } from './components/PhotoScrapbookGallery';
import { BirthdayQuiz } from './components/BirthdayQuiz';
import { PhotoLightboxModal } from './components/PhotoLightboxModal';
import { StickyNotesSection } from './components/StickyNotesSection';
import { SecretLetterSection } from './components/SecretLetterSection';
import { BrainScannerMiniGame } from './components/BrainScannerMiniGame';
import { MusicPlayerVinyl } from './components/MusicPlayerVinyl';
import { CustomPhotoModal } from './components/CustomPhotoModal';
import { Footer } from './components/Footer';
import { MouseTrail } from './components/MouseTrail';
import { triggerConfetti, triggerEmojiConfetti } from './utils/confettiHelper';

export default function App() {
  const [polaroids, setPolaroids] = useState<PolaroidItem[]>(() => {
    try {
      const saved = localStorage.getItem('belbuddhi_polaroids_data');
      if (saved) {
        const parsed: PolaroidItem[] = JSON.parse(saved);
        // Ensure each item has its customImageUrl, objectPosition, and fitMode merged
        return INITIAL_POLAROIDS.map((def) => {
          const found = parsed.find((p) => p.id === def.id);
          return {
            ...def,
            ...found,
            customImageUrl: found?.customImageUrl || def.customImageUrl,
            objectPosition: def.objectPosition || found?.objectPosition,
            fitMode: found?.fitMode || def.fitMode,
          };
        });
      }
    } catch {
      // Fallback
    }
    return INITIAL_POLAROIDS;
  });

  const [selectedPhoto, setSelectedPhoto] = useState<PolaroidItem | null>(null);
  const [isPhotoManagerOpen, setIsPhotoManagerOpen] = useState(false);
  const [isSecretLetterOpen, setIsSecretLetterOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // Save to localStorage whenever polaroids change
  useEffect(() => {
    try {
      localStorage.setItem('belbuddhi_polaroids_data', JSON.stringify(polaroids));
    } catch (e) {
      console.warn("Storage quota or disabled", e);
    }
  }, [polaroids]);

  // Confetti launcher
  const handleDropConfetti = () => {
    triggerConfetti();
    triggerEmojiConfetti();
  };

  // Reactions handler
  const handleReact = (photoId: number, reactionType: 'laughs' | 'brains' | 'hearts' | 'skulls') => {
    setPolaroids((prev) =>
      prev.map((item) => {
        if (item.id === photoId) {
          return {
            ...item,
            reactions: {
              ...item.reactions,
              [reactionType]: item.reactions[reactionType] + 1,
            },
          };
        }
        return item;
      })
    );

    // Also update selectedPhoto if modal is currently open
    if (selectedPhoto && selectedPhoto.id === photoId) {
      setSelectedPhoto((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          reactions: {
            ...prev.reactions,
            [reactionType]: prev.reactions[reactionType] + 1,
          },
        };
      });
    }
  };

  // Update photo URL
  const handleUpdatePhotoUrl = (id: number, url: string) => {
    setPolaroids((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            customImageUrl: url || undefined,
          };
        }
        return item;
      })
    );

    if (selectedPhoto && selectedPhoto.id === id) {
      setSelectedPhoto((prev) => (prev ? { ...prev, customImageUrl: url || undefined } : null));
    }
  };

  // Toggle fit mode between cover and contain
  const handleToggleFitMode = (photoId: number) => {
    setPolaroids((prev) =>
      prev.map((item) => {
        if (item.id === photoId) {
          const newFit: 'cover' | 'contain' = item.fitMode === 'contain' ? 'cover' : 'contain';
          return {
            ...item,
            fitMode: newFit,
          };
        }
        return item;
      })
    );
  };

  // Reset all to default illustrations
  const handleResetAllPhotos = () => {
    setPolaroids(INITIAL_POLAROIDS);
    try {
      localStorage.removeItem('belbuddhi_polaroids_data');
    } catch {
      // ignore
    }
  };

  // Lightbox Navigation
  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = polaroids.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % polaroids.length;
    setSelectedPhoto(polaroids[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = polaroids.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + polaroids.length) % polaroids.length;
    setSelectedPhoto(polaroids[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#fdfaf2] text-[#2d2926] relative font-sans selection:bg-[#fed7aa] selection:text-[#7c2d12]">
      {/* Subtle Scrapbook Mouse Trail (Tiny stars & brain emojis) */}
      <MouseTrail />

      {/* Top Bar Navigation (3 Zones) */}
      <HeaderNav
        onDropConfetti={handleDropConfetti}
        onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
        isPlayingMusic={isPlayingMusic}
        onToggleMusic={() => setIsPlayingMusic(!isPlayingMusic)}
      />

      <main>
        {/* Hero Section with Cake, Candles, and Stats */}
        <HeroSection
          onDropConfetti={handleDropConfetti}
          onOpenSecretLetter={() => setIsSecretLetterOpen(true)}
        />

        {/* 15 Polaroids Scrapbook Gallery */}
        <PhotoScrapbookGallery
          polaroids={polaroids}
          onSelectPhoto={(photo) => setSelectedPhoto(photo)}
          onEditPhoto={(photo) => {
            setSelectedPhoto(photo);
          }}
          onReact={handleReact}
          onToggleFitMode={handleToggleFitMode}
        />

        {/* Interactive Birthday Quiz for Riya & Soyam */}
        <BirthdayQuiz onDropConfetti={handleDropConfetti} />

        {/* 4 Tabs Sticky Notes / Bestie Roast Board */}
        <StickyNotesSection />

        {/* Unfiltered Secret Letter from Soyam */}
        <SecretLetterSection
          isOpen={isSecretLetterOpen}
          onOpen={() => setIsSecretLetterOpen(true)}
          onClose={() => setIsSecretLetterOpen(false)}
          onDropConfetti={handleDropConfetti}
        />

        {/* Brain Diagnostic Scanner Mini Game */}
        <BrainScannerMiniGame onDropConfetti={handleDropConfetti} />
      </main>

      {/* Scrapbook Footer */}
      <Footer onDropConfetti={handleDropConfetti} />

      {/* Floating Vinyl Music Player */}
      <MusicPlayerVinyl
        isPlaying={isPlayingMusic}
        onTogglePlay={() => setIsPlayingMusic(!isPlayingMusic)}
      />

      {/* Lightbox Modal for individual photo view */}
      <PhotoLightboxModal
        photo={selectedPhoto}
        allPhotos={polaroids}
        onClose={() => setSelectedPhoto(null)}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
        onUpdatePhotoUrl={handleUpdatePhotoUrl}
        onReact={handleReact}
      />

      {/* Custom Photo Manager Modal for all 15 photos */}
      <CustomPhotoModal
        isOpen={isPhotoManagerOpen}
        onClose={() => setIsPhotoManagerOpen(false)}
        polaroids={polaroids}
        onUpdatePhoto={handleUpdatePhotoUrl}
        onResetAll={handleResetAllPhotos}
      />
    </div>
  );
}
