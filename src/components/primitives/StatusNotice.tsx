import React from 'react';
import { Clock, Info, ShieldAlert, FileText } from 'lucide-react';
import { usePreferences } from '../../context/PreferencesContext';

export interface StatusNoticeProps {
  type: 'review_pending' | 'translation_pending' | 'source_pending' | 'info';
  customTitle?: string;
  customMessage?: string;
  className?: string;
}

export const StatusNotice: React.FC<StatusNoticeProps> = ({
  type,
  customTitle,
  customMessage,
  className = '',
}) => {
  const { language } = usePreferences();

  const configs = {
    review_pending: {
      icon: Clock,
      title: language === 'ml' ? 'പണ്ഡിതപരിശോധനയിലാണ്' : 'Scholarly Review in Progress',
      message:
        language === 'ml'
          ? 'ഈ പാഠവും പദാർത്ഥവും സമഗ്രമായ പണ്ഡിതപരിശോധനയ്ക്ക് വിധേയമായിക്കൊണ്ടിരിക്കുന്നു.'
          : 'This text and translation are currently undergoing rigorous editorial and scholarly review.',
      colorClass: 'text-amber border-amber/30 bg-amber/5',
    },
    translation_pending: {
      icon: FileText,
      title: language === 'ml' ? 'വിവർത്തനം തയ്യാറാകുന്നു' : 'Translation in Preparation',
      message:
        language === 'ml'
          ? 'ഈ ഭാഗത്തിന്റെ ആധികാരിക മലയാള വിവർത്തനം വൈകാതെ ലഭ്യമാകും.'
          : 'An authoritative Malayalam translation for this section is currently being prepared.',
      colorClass: 'text-rajas border-rajas/30 bg-rajas/5',
    },
    source_pending: {
      icon: ShieldAlert,
      title: language === 'ml' ? 'ആധാരരേഖ പരിശോധനയിൽ' : 'Source Document Verification',
      message:
        language === 'ml'
          ? 'മൂലഗ്രന്ഥ താളിന്റെ ആധികാരിക പ്രതി പരിശോധിക്കപ്പെട്ടുവരുന്നു.'
          : 'Critical edition verification and facsimile coordinates are being indexed.',
      colorClass: 'text-teal border-teal/30 bg-teal/5',
    },
    info: {
      icon: Info,
      title: customTitle || (language === 'ml' ? 'വിവരം' : 'Notice'),
      message: customMessage || '',
      colorClass: 'text-purusha border-purusha/30 bg-purusha/5',
    },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <div
      role="status"
      className={`flex items-start gap-3 p-4 rounded-xl border ${config.colorClass} ${className}`}
    >
      <Icon className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
      <div className="text-xs sm:text-sm space-y-1">
        <span className="font-semibold text-sattva block">
          {customTitle || config.title}
        </span>
        <p className="text-sattva-dim leading-relaxed">
          {customMessage || config.message}
        </p>
      </div>
    </div>
  );
};
