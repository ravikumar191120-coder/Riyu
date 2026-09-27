import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/scrapbookData';
import { Sparkles, Brain, CheckCircle2, XCircle, RotateCcw, Award, ChevronRight, Share2, Check } from 'lucide-react';

interface Props {
  onDropConfetti: () => void;
}

export const BirthdayQuiz: React.FC<Props> = ({ onDropConfetti }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (optIdx: number) => {
    if (showExplanation) return;
    setSelectedOption(optIdx);
    setShowExplanation(true);

    if (currentQ.options[optIdx].isCorrect) {
      setScore((prev) => prev + 1);
      onDropConfetti();
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
      onDropConfetti();
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setQuizFinished(false);
    setCopiedShare(false);
  };

  const handleShareResult = () => {
    const text = `🧠 I took 'The Belbuddhi Friendship Quiz' for Riya's Birthday by Soyam!\nScore: ${score}/${QUIZ_QUESTIONS.length}\nTitle: ${
      score === 6
        ? '🏆 Certified Belbuddhi Grandmaster'
        : score >= 4
        ? '⭐ Gold-Tier Chaos Bestie'
        : '🚨 Needs 2 Extra Brain Cells'
    }\nCelebrating Riya's 28th September Birthday! 🎂🎉`;
    navigator.clipboard.writeText(text);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <section id="birthday-quiz" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block relative">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 bg-stone-100 px-3 py-1 rounded-sm border border-stone-200">
            Interactive Test · Riya & Soyam Dosti Edition
          </span>
          <div className="absolute -top-3 -right-6 text-xl">📝</div>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#2d2926] mt-3">
          The Official <span className="font-hand text-rose-600 italic">Belbuddhi</span> Quiz 🧠✨
        </h2>
        <p className="mt-2 text-base font-hand font-semibold text-stone-600">
          How well do you actually know Riya's navigation fails, WhatsApp reply speeds, and our sacred friendship rules?
        </p>
      </div>

      {/* Main Quiz Box styled as a handmade scrapbook examination */}
      <div className="bg-[#fffefc] border-2 border-[#d8c39e] rounded-3xl p-6 sm:p-10 polaroid-shadow relative overflow-hidden">
        {/* Washi tape at top */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-40 h-7 washi-tape washi-green rotate-1 pointer-events-none z-10" />

        {!quizFinished ? (
          <div>
            {/* Top Status & Progress Bar */}
            <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-amber-100 text-amber-900 rounded-md text-xs font-mono font-bold border border-amber-200">
                  Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <span className="text-xs font-mono text-stone-500 hidden sm:inline">
                  {currentQ.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-stone-700">
                  Current Score: {score} 🧠
                </span>
              </div>
            </div>

            {/* Progress line */}
            <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden mb-6 border border-stone-200">
              <div 
                className="bg-rose-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-stone-900 leading-snug">
                {currentQ.question}
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = selectedOption === oIdx;
                let optionStyle = "bg-[#fffdfa] border-stone-200 hover:border-amber-400 hover:bg-amber-50/50 text-stone-800";

                if (showExplanation) {
                  if (opt.isCorrect) {
                    optionStyle = "bg-emerald-50 border-emerald-400 text-emerald-950 shadow-xs";
                  } else if (isSelected && !opt.isCorrect) {
                    optionStyle = "bg-rose-50 border-rose-400 text-rose-950";
                  } else {
                    optionStyle = "bg-stone-50/60 border-stone-200 opacity-60 text-stone-500";
                  }
                }

                return (
                  <button
                    key={oIdx}
                    disabled={showExplanation}
                    onClick={() => handleSelectOption(oIdx)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3.5 group ${optionStyle}`}
                  >
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-colors ${
                      showExplanation && opt.isCorrect 
                        ? 'bg-emerald-600 text-white'
                        : isSelected && !opt.isCorrect
                        ? 'bg-rose-600 text-white'
                        : 'bg-stone-200 group-hover:bg-amber-200 text-stone-800'
                    }`}>
                      {opt.label}
                    </span>

                    <span className="flex-1 text-sm font-sans font-medium leading-relaxed">
                      {opt.text}
                    </span>

                    {showExplanation && (
                      <span className="shrink-0 mt-0.5">
                        {opt.isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 animate-bounce" />
                        ) : isSelected ? (
                          <XCircle className="w-5 h-5 text-rose-600" />
                        ) : null}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Immediate Roast Explanation Box */}
            {showExplanation && selectedOption !== null && (
              <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200 animate-in fade-in zoom-in duration-200">
                <div className="flex items-start gap-2">
                  <span className="text-xl">💬</span>
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-amber-900">
                      Soyam's Commentary:
                    </h4>
                    <p className="text-sm font-hand font-semibold text-amber-950 mt-0.5">
                      {currentQ.options[selectedOption].roastNote}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md cursor-pointer transition-transform active:scale-95"
                  >
                    <span>{currentIdx + 1 === QUIZ_QUESTIONS.length ? "See Final Results 🏆" : "Next Question"}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Final Results Screen */
          <div className="text-center py-6">
            <div className="w-20 h-20 rounded-full bg-amber-100 border-4 border-amber-300 mx-auto flex items-center justify-center text-amber-800 mb-4 shadow-inner">
              <Award className="w-10 h-10 animate-bounce" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
              Exam Complete · Certified Results
            </span>

            <h3 className="text-3xl sm:text-4xl font-serif-display font-bold text-stone-900 mt-2">
              Your Belbuddhi Score: <span className="font-hand text-rose-600 font-bold">{score} / {QUIZ_QUESTIONS.length}</span>
            </h3>

            {/* Result Tier Title */}
            <div className="inline-block mt-4 px-6 py-2 bg-amber-100 border-2 border-dashed border-amber-400 rounded-xl">
              <p className="font-hand font-bold text-xl sm:text-2xl text-amber-950">
                {score === 6
                  ? "🏆 Supreme Belbuddhi Grandmaster (100% Certified Dosti)"
                  : score >= 4
                  ? "⭐ Gold-Tier Chaos Bestie (1 Brain Cell Fully Functional)"
                  : "🚨 Emergency Brain Cell Upgrade Pending"}
              </p>
            </div>

            <p className="text-sm font-sans text-stone-700 max-w-lg mx-auto mt-4 leading-relaxed">
              {score === 6
                ? "Flawless victory! You know Riya and Soyam's chaotic dynamics down to the molecular level. You have earned lifelong VIP privileges in the Belbuddhi Hall of Fame!"
                : score >= 4
                ? "Impressive score! You clearly understand the deep complexities of navigating with broken GPS and waiting 3 days for a WhatsApp reply."
                : "A valiant effort! Clearly that 1 shared brain cell was offline during testing. Extra birthday cake is strictly prescribed!"}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <button
                onClick={handleRestart}
                className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-stone-300"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>

              <button
                onClick={handleShareResult}
                className="px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                {copiedShare ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Score Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Copy Score & Rank</span>
                  </>
                )}
              </button>

              <button
                onClick={onDropConfetti}
                className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Drop Victory Confetti 🎉</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
