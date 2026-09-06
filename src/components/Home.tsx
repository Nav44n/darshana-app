import React from 'react';
import { Link } from 'react-router';
import { systems } from '../content';
import { getSystemAccent } from '../utils/theme';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center py-12">
        <h1 className="text-4xl font-serif font-bold text-neutral-900 mb-4">Darśana</h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          An exploration of classical Indian philosophical systems (Darśanas), 
          their foundational texts, and core concepts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {systems.map((system) => {
          const accent = getSystemAccent(system.id);
          return (
            <Link
              key={system.id}
              to={`/system/${system.id}`}
              className={`block group bg-white rounded-xl shadow-xs border ${accent.borderLight} hover:shadow-md transition-all p-6 relative overflow-hidden`}
            >
              <div 
                className="absolute top-0 left-0 right-0 h-1 opacity-80 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: accent.primary }}
              />
              <h2 
                className="text-2xl font-serif font-bold text-neutral-800 transition-colors mb-2"
                style={{ color: undefined }}
              >
                {system.title}
              </h2>
              <p className="text-neutral-600 mb-4 h-12 overflow-hidden">
                {system.subtitle}
              </p>
              <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Texts</span>
                <span className="text-xs font-normal text-neutral-400 lowercase">
                  {system.texts.reduce((acc, t) => acc + (t.concepts?.length || 0), 0)} concepts
                </span>
              </div>
              <ul className="space-y-1">
                {system.texts.map((text) => (
                  <li key={text.id} className="text-neutral-700 flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <span 
                        className="w-1.5 h-1.5 rounded-full mr-2"
                        style={{ backgroundColor: accent.primary }}
                      ></span>
                      {text.transliteratedTitle}
                    </div>
                    {text.sources && text.sources.length > 0 && (
                      <span className="text-[11px] text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded">
                        {text.sources.length} commentaries
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

