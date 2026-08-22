import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../types';

const languages: { code: Language; label: string }[] = [
  { code: 'kz', label: 'KZ' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((item) => {
        const isActive = language === item.code;

        return (
          <button
            key={item.code}
            onClick={() => setLanguage(item.code)}
            className={`
              min-w-[38px]
              px-2.5
              py-1.5
              rounded-full
              text-xs
              tracking-wider
              transition-all
              duration-300
              ${
                isActive
                  ? 'bg-[#C9A96E] text-[#0A0A0A]'
                  : 'text-[#F5F0EB]/60 hover:text-[#F5F0EB] hover:bg-[#F5F0EB]/10'
              }
            `}
            aria-label={`Switch language to ${item.label}`}
            aria-pressed={isActive}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};