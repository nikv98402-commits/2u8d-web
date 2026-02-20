import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { LanguageSelector } from './LanguageSelector';

// ИМПОРТ ЛОГОТИПА: Используем тот же метод, что и в App.tsx
import logoSvg from '/logo.svg?url';

export const Header = () => {
  const { t, i18n } = useTranslation();

  // Управляем направлением текста (RTL для иврита, LTR для остальных)
  useEffect(() => {
    const currentLang = i18n.language || 'ru';
    document.body.dir = currentLang.startsWith('he') ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <header className="fixed w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Логотип */}
        <a href="/" className="flex items-center gap-3 group">
          <img
            src={logoSvg} // Используем импортированную переменную
            alt="2U8D Logo"
            className="h-10 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-500"
          />
          <div className="flex flex-col text-start">
            <span className="text-lg font-bold tracking-[0.2em] leading-none">
              2U8D
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/40 leading-none mt-1">
              Management & Strategy
            </span>
          </div>
        </a>

        {/* Навигация и Селектор */}
        <div className="flex items-center space-x-10 rtl:space-x-reverse">
          <nav className="hidden md:flex space-x-10 rtl:space-x-reverse items-center text-[10px] tracking-[0.3em] uppercase font-light">
            <a href="#about" className="hover:text-gray-400 transition-colors">
              {t('nav.about')}
            </a>
            <a
              href="#projects"
              className="hover:text-gray-400 transition-colors"
            >
              {t('nav.projects')}
            </a>
            <a href="#team" className="hover:text-gray-400 transition-colors">
              {t('nav.team')}
            </a>
            <a
              href="#contacts"
              className="hover:text-gray-400 transition-colors"
            >
              {t('nav.contacts')}
            </a>
          </nav>

          {/* Выпадающий список языков */}
          <div className="flex items-center border-s border-white/10 ps-10 rtl:ps-0 rtl:pe-10">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};
