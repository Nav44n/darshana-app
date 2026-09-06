import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { getSystem } from '../content';
import { ChevronRight, ChevronLeft, ArrowLeft } from 'lucide-react';
import Markdown from 'react-markdown';
import { useLanguage } from '../context/LanguageContext';
import { getVerseTerm } from '../utils/textTerminology';

export default function ThreadView() {
  const { systemId } = useParams();
  const { language } = useLanguage();
  const system = getSystem(systemId || '');
  const [stepIndex, setStepIndex] = useState(0);

  if (!system || !system.thread || system.thread.length === 0) {
    return <div className="text-center py-12">Thread not found</div>;
  }

  const step = system.thread[stepIndex];
  const totalSteps = system.thread.length;

  const handleNext = () => setStepIndex((i) => Math.min(i + 1, totalSteps - 1));
  const handlePrev = () => setStepIndex((i) => Math.max(i - 1, 0));

  const content = step.content[language] ?? step.content.en;
  const isFallback = language === 'ml' && !step.content.ml;
  const targetTextId = step.textId || system.texts[0]?.id;
  const targetText = system.texts.find(t => t.id === targetTextId);
  const verseTermSingular = getVerseTerm(targetText, 1);
  const verseTermPlural = getVerseTerm(targetText, 2);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-3xl mx-auto pb-24">
      <div className="flex items-center justify-between text-sm text-neutral-500 mb-2">
        <div className="flex items-center space-x-2">
          <Link to={`/system/${system.id}`} className="hover:text-blue-600 transition-colors">
            {system.title}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-neutral-900 font-medium">Thread</span>
        </div>
        <div className="font-medium text-neutral-400">
          Step {stepIndex + 1} of {totalSteps}
        </div>
      </div>

      {isFallback && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
          Malayalam translation for this thread step is pending. Displaying English version.
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-xs border border-neutral-200 overflow-hidden">
        {/* Progress bar */}
        <div className="h-1.5 w-full bg-neutral-100">
          <div 
            className="h-full bg-blue-500 transition-all duration-300 ease-out" 
            style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }}
          />
        </div>

        <div className="p-8 md:p-10 space-y-8">
          {content?.title && (
            <h2 className="text-3xl font-serif font-bold text-neutral-900 leading-tight">
              {content.title}
            </h2>
          )}

          {content?.narrative && (
            <div className="text-lg md:text-xl text-neutral-700 leading-relaxed font-serif">
              <Markdown>{content.narrative}</Markdown>
            </div>
          )}

          {content?.summary && (
            <div className="pt-6 border-t border-neutral-100">
              <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-4">Summary</h3>
              <div className="prose prose-neutral max-w-none text-neutral-600">
                <Markdown>{content.summary}</Markdown>
              </div>
            </div>
          )}
          
          {content?.keyPoints && content.keyPoints.length > 0 && (
            <div className="pt-6 border-t border-neutral-100">
              <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-4">Key Insights</h3>
              <ul className="space-y-3">
                {content.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex text-neutral-700 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-3 shrink-0"></span>
                    <span className="flex-1"><Markdown>{point}</Markdown></span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {step.verseIds && step.verseIds.length > 0 && targetTextId && (
            <div className="pt-6 border-t border-neutral-100">
              <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-4">Related {verseTermPlural}</h3>
              <div className="flex flex-wrap gap-2">
                {step.verseIds.map((vId) => (
                  <Link 
                    key={vId} 
                    to={`/system/${system.id}/text/${targetTextId}/verse/${vId}`}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-700 text-sm hover:bg-neutral-200 transition-colors"
                  >
                    {verseTermSingular} {vId}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-neutral-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          {stepIndex > 0 ? (
            <button
              onClick={handlePrev}
              className="flex items-center text-sm font-medium text-neutral-600 hover:text-blue-600 transition-colors px-4 py-2"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              <span className="hidden sm:inline">Previous</span>
            </button>
          ) : (
            <div className="w-24" />
          )}

          <Link
            to={`/system/${system.id}`}
            className="flex flex-col items-center justify-center p-2 rounded-full hover:bg-neutral-100 transition-colors text-neutral-500"
            title="Back to System"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>

          {stepIndex < totalSteps - 1 ? (
            <button
              onClick={handleNext}
              className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors px-4 py-2"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          ) : (
            <div className="w-24" />
          )}
        </div>
      </div>
    </div>
  );
}

