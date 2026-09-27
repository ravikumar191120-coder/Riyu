import React, { useState } from 'react';
import { Brain, Sparkles, CheckCircle2, RotateCcw, Printer, Award, Zap } from 'lucide-react';

interface Props {
  onDropConfetti: () => void;
}

export const BrainScannerMiniGame: React.FC<Props> = ({ onDropConfetti }) => {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  const [currentThought, setCurrentThought] = useState('Standby mode. Awaiting scan command.');

  const thoughts = [
    "Checking active neurons... Error: Only 1 neuron responded with 'beep'.",
    "Pinging cognitive memory: Found 14,000 photos, 0 outfits to wear.",
    "Measuring reply speed: Current latency is 76 hours.",
    "Detecting GPS capabilities: Recalculating... turned left into a wall.",
    "Analyzing food appetite: 99.8% capacity allocated for momos & chai.",
    "Finalizing diagnosis: 100% pure certified Belbuddhi."
  ];

  const handleStartScan = () => {
    setScanning(true);
    setProgress(0);
    setScanComplete(false);

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep += 1;
      setProgress(Math.min(currentStep * 18, 100));
      setCurrentThought(thoughts[Math.min(currentStep - 1, thoughts.length - 1)]);

      if (currentStep >= 6) {
        clearInterval(interval);
        setScanning(false);
        setScanComplete(true);
        onDropConfetti();
      }
    }, 650);
  };

  const handleReset = () => {
    setScanning(false);
    setProgress(0);
    setScanComplete(false);
    setCurrentThought('Standby mode. Awaiting scan command.');
  };

  return (
    <section id="brain-scanner" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-500 bg-stone-100 px-3 py-1 rounded-sm border border-stone-200">
          Science & Banter Lab · Soyam Research
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#2d2926] mt-3">
          The <span className="font-hand text-rose-600 italic">Belbuddhi</span> Diagnostic Scanner 🧠🔬
        </h2>
        <p className="mt-2 text-base font-hand font-semibold text-stone-600">
          State-of-the-art cognitive diagnostic tool designed to locate Riya's wandering brain cells.
        </p>
      </div>

      <div className="bg-[#fffefb] border-2 border-[#e8dcc4] rounded-2xl p-6 sm:p-10 polaroid-shadow relative overflow-hidden">
        {/* Washi tape */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-36 h-7 washi-tape washi-blue rotate-1 pointer-events-none z-10" />

        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          {/* Animated Brain Icon / Scanner */}
          <div className="relative my-6">
            <div className={`w-28 h-28 rounded-full border-4 ${
              scanning ? 'border-amber-500 animate-spin-slow' : 'border-rose-400'
            } bg-rose-50 flex items-center justify-center transition-all shadow-inner`}>
              <Brain className={`w-14 h-14 ${scanning ? 'text-amber-600 animate-pulse' : 'text-rose-600'}`} />
            </div>

            {scanning && (
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-600 animate-ping opacity-30" />
            )}

            <div className="absolute -bottom-2 bg-stone-900 text-amber-300 font-mono text-[10px] px-2.5 py-0.5 rounded-full border border-amber-400">
              {scanning ? `SCANNING: ${progress}%` : scanComplete ? "DIAGNOSIS COMPLETE" : "STATUS: READY"}
            </div>
          </div>

          {/* Scanner Progress Bar */}
          {scanning && (
            <div className="w-full max-w-md bg-stone-100 rounded-full h-2.5 mb-4 overflow-hidden border border-stone-200">
              <div 
                className="bg-amber-500 h-2.5 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {/* Real-time thought display */}
          <div className="p-4 bg-[#fbf8f0] border border-[#e5dcd0] rounded-xl w-full max-w-lg mb-6 min-h-[68px] flex items-center justify-center">
            <p className="text-xs sm:text-sm font-mono text-stone-700 leading-relaxed">
              {currentThought}
            </p>
          </div>

          {/* Action Trigger Buttons */}
          <div className="flex gap-3">
            {!scanning && !scanComplete && (
              <button
                onClick={handleStartScan}
                className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Zap className="w-4 h-4" />
                <span>Initiate Brain Cell Scan</span>
              </button>
            )}

            {scanComplete && (
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer text-xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Scan Again</span>
              </button>
            )}
          </div>

          {/* Scan Results & Official Certificate */}
          {scanComplete && (
            <div className="mt-8 w-full border-2 border-dashed border-amber-400 bg-amber-50/60 rounded-2xl p-6 sm:p-8 text-left relative animate-in fade-in zoom-in duration-300">
              <div className="flex items-center justify-between border-b border-amber-200 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-amber-700" />
                  <h3 className="font-serif-display font-bold text-xl text-amber-950">
                    Official Certificate of Belbuddhi Excellence
                  </h3>
                </div>
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1 bg-amber-200 hover:bg-amber-300 text-amber-900 rounded text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Certificate</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-amber-950">
                <div>
                  <p className="text-stone-500 font-mono">CANDIDATE:</p>
                  <p className="font-bold text-sm">Riya (Official Belbuddhi)</p>
                </div>
                <div>
                  <p className="text-stone-500 font-mono">PRIMARY CERTIFYING OFFICER:</p>
                  <p className="font-bold text-sm">Soyam (Chief Bestie & Roaster)</p>
                </div>
                <div>
                  <p className="text-stone-500 font-mono">MEASURED BRAIN CELL COUNT:</p>
                  <p className="font-bold text-sm text-rose-700">1.00 (Shared with Soyam)</p>
                </div>
                <div>
                  <p className="text-stone-500 font-mono">RECOMMENDED TREATMENT:</p>
                  <p className="font-bold text-sm">Extra birthday cake & unlimited chai</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-200/80 flex items-center justify-between text-[11px] font-mono text-amber-800">
                <span>VERIFIED BY: Soyam Dosti Labs</span>
                <span>STATUS: 100% PURE DOSTI VALID</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
