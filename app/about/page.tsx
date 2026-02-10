import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Phone, Building2 } from "lucide-react"

export default function AboutPage() {
  const navLinks = [
    { name: "Главная", href: "/" },
    { name: "О компании", href: "/about" },
    { name: "Услуги", href: "/#services" },
    { name: "Новости", href: "/news" },
    { name: "Контакты", href: "/#pricing" },
  ]

  const services = [
    "Бухгалтерский учет",
    "Налоговый учет",
    "Аудит",
    "Консалтинг",
    "Юридические услуги",
  ]

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
              <Image
                src="/images/logo-fin.png"
                alt="ФинЭксперт"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
              />
              <span className="text-sm sm:text-base font-bold tracking-tight text-[#1a2a3a]">
                Фин<span className="text-[#5A8A72]">Эксперт</span>
              </span>
            </Link>

            {/* Page indicator + Back */}
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-xs text-gray-400 uppercase tracking-wider hidden sm:block">О компании</span>
              <Link 
                href="/" 
                className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-gray-500 hover:text-[#1a2a3a] transition-colors px-2 py-1 rounded hover:bg-gray-100"
              >
                <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Назад</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Intro Card */}
          <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6 lg:p-8 mb-4 sm:mb-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <Image
                src="/images/logo-fin.png"
                alt="ФинЭксперт"
                width={40}
                height={40}
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0"
              />
              <div>
                <h1 className="text-base sm:text-lg md:text-xl font-bold text-[#1a2a3a]">ООО "ФинЭКСПЕРТ"</h1>
                <p className="text-xs sm:text-sm text-gray-400">С 2011 года на рынке</p>
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
              Компания ООО "ФинЭксперт" является экспертом и Вашим партнером, помогает своим клиентам добиваться успехов в мире быстро развивающейся Бизнес среды. С 2011 года компания помогаем малому и среднему бизнесу решать задачи, которые возникают в процессе создания, роста и развития Вашего бизнеса.
            </p>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              <span className="font-semibold text-[#1a2a3a]">Наша цель:</span> процветание и успех каждого клиента. От формирования Бизнес стратегии до автоматизации бизнес процессов.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Confidentiality */}
            <div className="bg-white rounded-lg sm:rounded-xl border border-gray-100 p-4 sm:p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3">
                <svg className="w-5 h-5 sm:w-5 sm:h-5 text-[#243851] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <h3 className="text-sm sm:text-base font-semibold text-[#1a2a3a]">Конфиденциальность</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Гарантируем безопасность данных. Используем сертифицированные CRM программы.
              </p>
            </div>

            {/* Always Available */}
            <div className="bg-[#243851] rounded-lg sm:rounded-xl p-4 sm:p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3">
                <svg className="w-5 h-5 sm:w-5 sm:h-5 text-white/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-sm sm:text-base font-semibold text-white">Всегда рядом</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Не уходим в отпуск. Всегда доступны и готовы оперативно решить вопросы.
              </p>
            </div>

            {/* Best Results */}
            <div className="bg-[#5A8A72] rounded-lg sm:rounded-xl p-4 sm:p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3">
                <svg className="w-5 h-5 sm:w-5 sm:h-5 text-white/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                <h3 className="text-sm sm:text-base font-semibold text-white">Лучший результат</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Работаем в полную силу для достижения максимальных показателей.
              </p>
            </div>

            {/* Development */}
            <div className="bg-white rounded-lg sm:rounded-xl border border-gray-100 p-4 sm:p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3">
                <svg className="w-5 h-5 sm:w-5 sm:h-5 text-[#5A8A72] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
                <h3 className="text-sm sm:text-base font-semibold text-[#1a2a3a]">Развитие</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Постоянно совершенствуем знания и методы работы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Glass effect */}
      <footer className="py-4 sm:py-8 bg-gray-200/50 backdrop-blur-xl border-t border-gray-200/50 mt-auto">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {/* Logo */}
            <div>
              <Link href="/" className="footer-link flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                <Image
                  src="/images/logo-fin.png"
                  alt="ФинЭксперт"
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
                <span className="text-sm font-bold text-[#1a2a3a]">
                  Фин<span className="text-[#5A8A72]">Эксперт</span>
                </span>
              </Link>
              <p className="text-xs text-gray-400 leading-relaxed">
                Финансовые решения для бизнеса
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-semibold text-[#1a2a3a] mb-1 sm:mb-2">Навигация</h4>
              <ul className="space-y-0 sm:space-y-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="footer-link text-xs text-gray-400 hover:text-[#1a2a3a] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold text-[#1a2a3a] mb-1 sm:mb-2">Услуги</h4>
              <ul className="space-y-0 sm:space-y-1">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      href="/#services"
                      className="footer-link text-xs text-gray-400 hover:text-[#1a2a3a] transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="text-xs font-semibold text-[#1a2a3a] mb-1 sm:mb-2">Контакты</h4>
              <ul className="space-y-0.5 sm:space-y-1.5">
                <li>
                  <a
                    href="tel:+78129827090"
                    className="footer-link text-xs text-gray-400 hover:text-[#1a2a3a] transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3 shrink-0" />
                    <span>+7 (812) 982 70 90</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@finexspert24.ru"
                    className="footer-link text-xs text-gray-400 hover:text-[#1a2a3a] transition-colors break-all"
                  >
                    info@finexspert24.ru
                  </a>
                </li>
                <li className="text-xs text-gray-400 leading-relaxed flex items-start gap-1.5">
                  <Building2 className="w-3 h-3 shrink-0 mt-0.5" />
                  <span>г. Москва, Одинцово, ул. Садовая, д. 3Б, офис 809</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300/50 mt-5 sm:mt-6 pt-4 sm:pt-5 text-center text-xs text-gray-400">
            © 2026 ФинЭксперт. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}
