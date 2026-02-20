import { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from './components/Header';
import { Team } from './components/Team';
import { Projects } from './components/Projects';

// ИМПОРТ ЛОГОТИПА: Это самый надежный способ в Vite/React
import logoSvg from '/logo.svg?url'; 

function AppContent() {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language || 'ru';
  const isEn = currentLang.startsWith('en');
  const isHe = currentLang.startsWith('he');

  // Автоматическая поддержка RTL для иврита
  useEffect(() => {
    document.body.dir = isHe ? 'rtl' : 'ltr';
  }, [isHe]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white/20 scroll-smooth">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <img
            src="/images/hero-volcano.png"
            alt="Volcano Eruption"
            className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-[10s] hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-10" />

          <div className="relative z-20 text-center px-4 max-w-5xl">
            <div className="flex flex-col items-center mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.2em] uppercase leading-tight mb-6">
                {isHe ? (
                  <>חברת ניהול <span className="text-[#ff4d00]">2U8D</span></>
                ) : isEn ? (
                  <>Management Company <span className="text-[#ff4d00]">2U8D</span></>
                ) : (
                  <>Управляющая компания <span className="text-[#ff4d00]">2U8D</span></>
                )}
              </h1>

              <div className="w-12 h-[1px] bg-white/20 mb-8" />

              <h2 className="text-2xl md:text-5xl lg:text-6xl font-extralight tracking-[0.15em] uppercase opacity-90">
                {isHe ? 'איך הכל עובד' : isEn ? 'How everything works' : 'Как всё устроено'}
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-200 font-light tracking-wide leading-relaxed mb-12 max-w-2xl mx-auto opacity-80">
              {t('hero.subtitle')}
            </p>

            <div className="flex justify-center">
              <a
                href="#projects"
                className="px-10 py-4 bg-white text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#ff4d00] hover:text-white transition-all duration-500 shadow-2xl"
              >
                {t('hero.cta')}
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-30">
            <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent animate-pulse" />
          </div>
        </section>

        {/* SECTION: ABOUT */}
        <section id="about" className="py-32 px-6 bg-white text-black text-start overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">
                {t('about.mission')}
              </h2>
              <p className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-neutral-900 italic">
                {t('about.missionText')}
              </p>
            </div>

            <div className="flex flex-col justify-end space-y-12">
              <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">
                {t('about.values')}
              </h2>
              <div className="grid grid-cols-1 gap-2">
                {['value1', 'value2', 'value3'].map((v, i) => (
                  <div
                    key={i}
                    className="group border-s border-black/5 ps-8 py-6 hover:border-[#ff4d00] transition-all duration-700 cursor-default"
                  >
                    <span className="block text-[10px] text-gray-300 mb-2 font-mono group-hover:text-[#ff4d00] transition-colors duration-500">
                      0{i + 1}
                    </span>
                    <div className="text-xl md:text-2xl font-light uppercase tracking-wider transition-transform duration-500 group-hover:translate-x-3 rtl:group-hover:-translate-x-3 leading-snug">
                      {t(`about.${v}`)}
                    </div>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <p className="mt-4 text-sm md:text-base text-gray-500 max-w-md font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                          {t(`about.desc${i + 1}`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Team />

        {/* SECTION: CONTACTS */}
        <section id="contacts" className="py-40 px-6 bg-white text-black border-t border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            {/* Используем импортированную переменную logoSvg */}
            <img
              src={logoSvg}
              alt="2U8D Logo"
              className="h-20 w-auto mb-10 opacity-100 transition-opacity duration-700"
            />
            <h2 className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-10">
              {t('nav.contacts')}
            </h2>
            <div className="space-y-10">
              <a
                href="mailto:it@2u8d.ru"
                className="text-3xl md:text-6xl font-light border-b border-black/10 hover:border-black transition-all duration-500 pb-4 inline-block tracking-tighter"
              >
                it@2u8d.ru
              </a>
              <div className="space-y-3">
                <p className="text-gray-400 text-sm tracking-[0.2em] uppercase font-medium">
                  {isHe ? 'מוסקבה, רוסיה' : isEn ? 'Moscow, Russia' : 'Москва, Россия'}
                </p>
                <p className="text-[12px] text-gray-600 tracking-[0.1em] uppercase leading-relaxed">
                  {isHe
                    ? '1-Y Krasnogvardeyskiy Proyezd, 21, Bashnya OKO'
                    : '1-й Красногвардейский пр-д, 21, башня ОКО'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-[#0a0a0a] text-center text-[9px] uppercase tracking-[0.5em] text-gray-600 border-t border-white/5">
        © 2026 {isHe ? 'חברת ניהול 2U8D' : isEn ? '2U8D Management Company' : 'Управляющая компания 2U8D'} — Management & Strategy.
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div className="h-screen bg-black" />}>
      <AppContent />
    </Suspense>
  );
}