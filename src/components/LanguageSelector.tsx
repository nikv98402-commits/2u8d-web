import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'he', label: 'HE' }
];

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Определяем текущий язык из i18next
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Закрытие выпадающего списка при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left font-mono" ref={dropdownRef}>
      {/* Кнопка текущего языка */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-16 px-3 py-2 border border-white/20 hover:border-white/60 transition-all duration-300 text-[11px] font-bold tracking-widest"
      >
        <span>{currentLang.label}</span>
        <svg 
          className={`w-2.5 h-2.5 transition-transform duration-300 ml-1 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Выпадающее меню */}
      {isOpen && (
        <div className="absolute right-0 mt-1 w-16 bg-[#0a0a0a] border border-white/10 shadow-2xl z-[100]">
          <div className="flex flex-col">
            {languages
              .filter(lang => lang.code !== currentLang.code)
              .map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className="px-3 py-2 text-[11px] text-gray-500 hover:text-white hover:bg-white/5 text-left transition-all duration-300"
                >
                  {lang.label}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};