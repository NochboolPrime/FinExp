import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Phone, Building2 } from "lucide-react"

export default function NewsPage() {
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
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
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
              <span className="text-xs text-gray-400 uppercase tracking-wider hidden sm:block">Новости</span>
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
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-12 flex-1">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Page Header */}
          <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6 lg:p-8 mb-4 sm:mb-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#243851]/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#243851]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
              </div>
              <div>
                <h1 className="text-base sm:text-lg md:text-xl font-bold text-[#1a2a3a]">Новости компании</h1>
                <p className="text-xs sm:text-sm text-gray-400">Актуальная информация и события</p>
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Здесь будут публиковаться новости компании, изменения в законодательстве, полезные статьи и актуальная информация для наших клиентов.
            </p>
          </div>

          {/* Empty State */}
          <div className="bg-white rounded-lg sm:rounded-xl border border-gray-100 p-8 sm:p-10 md:p-12 text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-400 mb-1.5 sm:mb-2">Новостей пока нет</h3>
            <p className="text-xs sm:text-sm text-gray-400">Следите за обновлениями</p>
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
