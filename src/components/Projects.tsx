import { useTranslation } from 'react-i18next';

const projectsData = [
  {
    id: 1,
    titleRu: 'Федеральный ритейл-проект',
    titleEn: 'Federal Retail Network',
    titleHe: 'פרויקט קמעונאות ארצי',
    categoryRu: 'Логистика и здравый смысл',
    categoryEn: 'Logistics & Common Sense',
    categoryHe: 'לוגיסטיקה ושכל ישר',
    descRu: 'Мы решили посмотреть, что будет, если разобрать огромный механизм розницы на винтики и собрать его заново, выкинув всё лишнее. Оказалось, если убрать бюрократический «шум», система начинает работать с невероятной энергией.',
    descEn: "We decided to see what happens if you take the massive retail mechanism apart and rebuild it without the fluff. Once you remove the bureaucratic 'noise', the system starts running on pure energy.",
    descHe: 'החלטנו לבדוק מה יקרה אם נפרק את מנגנון הקמעונאות הענק לגורמים ונרכיב אותו מחדש ללא המיותר. התברר שברגע שמסירים את "הרעש" הבירוקרטי, המערכת מתחילה לעבוד באנרגיה מטורפת.',
    // Исправленный локальный путь
    image: '/projects/retail.jpg', 
  },
  {
    id: 2,
    titleRu: 'Медицинские технологии',
    titleEn: 'Medical Technologies',
    titleHe: 'טכנולוגיות רפואיות',
    categoryRu: 'Биология и порядок',
    categoryEn: 'Biology & Order',
    categoryHe: 'ביולוגיה וסדר',
    descRu: 'Медицина часто кажется магией, но мы подошли к ней как к интересной физической задаче. Мы ищем способ сделать процессы такими же понятными, как закон тяготения, чтобы врачи могли тратить время на спасение людей.',
    descEn: "Medicine often feels like magic, but we approached it like a fascinating physics problem. We're looking for a way to make processes as clear as the law of gravity, so doctors can focus on saving lives.",
    descHe: 'רפואה נראית לעיתים קרובה לקסם, אך ניגשנו אליה כאל בעיה פיזיקלית מרתקת. אנו מחפשים דרך להפוך תהליכים לברורים כמו חוק המשיכה, כדי שרופאים יוכלו להקדיש זמן להצלת חיים.',
    // Исправленный локальный путь
    image: '/projects/medical.jpg',
  },
  {
    id: 3,
    titleRu: 'E-commerce платформа',
    titleEn: 'E-commerce Platform',
    titleHe: 'פלטפורמת מסחר אלקטרוני',
    categoryRu: 'Цифровая честность',
    categoryEn: 'Digital Honesty',
    categoryHe: 'יושרה דיגיטלית',
    descRu: 'Мы просто развлекаемся, создавая среду, где код и желание покупателя встречаются без посредников. Когда всё встает на свои места и лишний фейк исчезает, это просто красиво.',
    descEn: "We're just having fun creating an environment where code and customer desire meet without middlemen. When everything clicks into place and the fake fluff disappears, it's just beautiful.",
    descHe: 'אנחנו פשוט נהנים ליצור סביבה שבה הקוד ורצון הלקוח נפגשים ללא מתווכים. כשכל החלקים מסדרים במקומם והזיוף נעלם, זה פשוט יפה.',
    // Исправленный локальный путь
    image: '/projects/ecommerce.jpg',
  },
  {
    id: 4,
    titleRu: 'Проект в области недвижимости',
    titleEn: 'Real Estate Development',
    titleHe: 'פיתוח נדל"ן',
    categoryRu: 'Пространство и структура',
    categoryEn: 'Space & Structure',
    categoryHe: 'מרחב ומבנה',
    descRu: 'Здания — это способ организовать пространство так, чтобы людям не хотелось из него убегать. Мы пытаемся понять фундаментальные правила того, как стены и окна влияют на наше самоощущение.',
    descEn: "Buildings are a way to organize space so people don't want to run away from it. We're trying to understand the fundamental rules of how walls and windows affect our well-being.",
    descHe: 'מבנים הם דרך לארגן מרחב כך שאנשים לא ירצו לברוח ממנו. אנו מנסים להבין את הכללים הבסיסיים של האופן שבה קירות וחלונות משפיעים על התחושה העצמית שלנו.',
    // Исправленный локальный путь
    image: '/projects/real-estate.jpg',
  },
];

export function Projects() {
  const { i18n } = useTranslation();
  
  const currentLang = i18n.language || 'ru';
  const isEn = currentLang.startsWith('en');
  const isHe = currentLang.startsWith('he');

  const getField = (project: any, field: string) => {
    if (isHe) return project[`${field}He`];
    if (isEn) return project[`${field}En`];
    return project[`${field}Ru`];
  };

  return (
    <section id="projects" className="py-32 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-24 text-start">
          <h2 className="text-xs uppercase tracking-[0.4em] text-[#ff4d00] mb-8 font-medium">
            {isHe ? 'ההרפתקאות שלנו' : isEn ? 'Our Adventures' : 'Наши приключения'}
          </h2>
          <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight">
            {isHe 
              ? 'דברים שמצאנו תוך כדי חיפוש אחר האופן שבו העולם באמת עובד.'
              : isEn
              ? "Things we've found while looking for how the world really works."
              : 'То, что мы обнаружили, пытаясь понять, как на самом деле всё устроено.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:bg-white/10 flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-white/5 bg-neutral-900 relative">
                {/* Эффект наложения для глубины */}
                <div className="absolute inset-0 bg-[#ff4d00]/10 opacity-0 group-hover:opacity-30 transition-opacity duration-700 z-10" />
                <img
                  src={project.image}
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  alt={getField(project, 'title')}
                />
              </div>

              <div className="p-12 text-start">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#ff4d00] mb-6 block font-bold">
                  {getField(project, 'category')}
                </span>
                <h3 className="text-3xl font-medium mb-6 tracking-tight leading-tight">
                  {getField(project, 'title')}
                </h3>
                <p className="text-white/60 text-base font-light leading-relaxed">
                  {getField(project, 'desc')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}