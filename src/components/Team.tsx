import { useTranslation } from 'react-i18next';
import { teamMembers } from '../data/teamData';

export function Team() {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language || 'ru';
  const isEn = currentLang.startsWith('en');
  const isHe = currentLang.startsWith('he');

  // Универсальная функция получения локализованных строк
  const getMemberData = (member: any, field: string) => {
    if (isHe)
      return member[`${field}He`] || member[`${field}En`] || member[field];
    if (isEn) return member[`${field}En`] || member[field];
    return member[`${field}Ru`] || member[field];
  };

  return (
    <section
      id="team"
      className="py-32 px-6 bg-white text-black rounded-t-[3rem] md:rounded-t-[5rem]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-24 text-start">
          <h2 className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-8 font-medium">
            {t('nav.team', 'Люди')}
          </h2>
          <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight">
            {isHe
              ? 'צוות של מומחים המאוחדים על ידי מצפן פנימי משותף ודחף לאמת יסודית.'
              : isEn
              ? 'A team of experts united by a shared internal compass and a drive for fundamental truth.'
              : 'Команда экспертов, объединенных общим внутренним компасом и стремлением к фундаментальной истине.'}
          </p>
        </div>

        {/* Сетка адаптирована под 5+ участников (3 колонки на десктопе) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {teamMembers.map((member) => (
            <div key={member.id} className="group flex flex-col">
              <div className="aspect-[4/5] mb-8 overflow-hidden rounded-[2.5rem] bg-gray-100 relative">
                <img
                  src={member.photo}
                  alt={getMemberData(member, 'name')}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                />
              </div>

              <div className="border-t border-black/10 pt-6 text-start transition-all duration-500 group-hover:border-[#ff4d00]">
                <h3 className="text-2xl font-medium tracking-tight mb-1">
                  {getMemberData(member, 'name')}
                </h3>
                <p className="text-[#ff4d00] text-[10px] uppercase tracking-widest font-bold mb-4">
                  {getMemberData(member, 'role')}
                </p>

                <div className="space-y-4">
                  <p className="text-sm font-medium leading-relaxed italic opacity-80">
                    {getMemberData(member, 'trackRecord')}
                  </p>
                  <p className="text-xs text-black/60 font-light leading-relaxed group-hover:text-black transition-colors duration-500">
                    {getMemberData(member, 'bio')}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {/* Traits теперь тоже могут быть локализованы через t() если добавить их в JSON, 
                      либо отображаются как есть из массива */}
                  {(member.traits || []).map((trait: string) => (
                    <span
                      key={trait}
                      className="text-[9px] border border-black/10 px-3 py-1 rounded-full opacity-60 group-hover:opacity-100 group-hover:border-[#ff4d00]/30 transition-all duration-500 uppercase tracking-tighter"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Финальный блок в стиле Ричарда Фейнмана */}
        <div className="mt-32 pt-16 border-t border-black/5 text-start">
          <div className="max-w-4xl">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-black/80 italic">
              {isHe
                ? 'מלבד צוות הליבה, יש לנו קבוצה של מוחות מבריקים שפתרו בעבר חידות ב-VTB, Sportmaster, Leroy Merlin, KPMG ו-Megafon. זה כמו מעבדה גדולה: אספנו אנשים שיודעים בדיוק איך המנגנונים האלה עובדים, כדי שלא נצטרך להמציא מחדש את חוקי הפיזיקה בכל פעם מחדש.'
                : isEn
                ? "Besides the core team, we work with a group of brilliant minds who’ve tackled puzzles at VTB, Sportmaster, Leroy Merlin, KPMG, and Megafon. It’s like a laboratory: we’ve gathered those who know exactly how these giant mechanisms work from the inside, so we don't waste time reinventing the laws of physics every time we start something new."
                : 'Знаете, помимо основного состава, с нами работает целая толпа отличных ребят, которые раньше разбирались с головоломками в ВТБ, Спортмастере, Леруа Мерлен, KPMG и Мегафоне. Это похоже на большую лабораторию: мы собрали тех, кто точно знает, как эти гигантские механизмы устроены изнутри, чтобы не тратить время на переизобретение законов физики каждый раз, когда мы затеваем что-то новое.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
