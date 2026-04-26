import Image from "next/image"
import Link from "next/link"
import { Phone, Building2 } from "lucide-react"

const navLinks = [
  { name: "Главная", href: "/" },
  { name: "О компании", href: "/about" },
  { name: "Услуги", href: "/#services" },
  { name: "Отзывы", href: "/#testimonials" },
  { name: "Новости", href: "/news" },
  { name: "Контакты", href: "/#pricing" },
]

const servicesList = [
  "Финансовый консалтинг",
  "Регистрация и ликвидация ЮЛ",
  "Бухгалтерские услуги",
  "Кадровый аутсорсинг",
  "Банковские услуги",
  "Составление РКМ",
  "Документы для Минпромторга",
]

export function Footer() {
  return (
    <footer className="py-8 sm:py-10 lg:py-12 bg-gray-100/80 backdrop-blur-xl border-t border-gray-200/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-gray-200/30 backdrop-blur-sm" />
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <Image
                src="/images/logo-fin.png"
                alt="ФинЭксперт"
                width={36}
                height={36}
                className="w-7 h-7 sm:w-9 sm:h-9 object-contain"
              />
              <span className="text-base sm:text-lg font-bold text-[#1a2a3a]">
                Фин<span className="text-[#5A8A72]">Эксперт</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Профессиональные финансовые решения для вашего бизнеса
            </p>
          </div>
          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-2.5 sm:mb-4 text-[#1a2a3a] text-sm sm:text-base">Навигация</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-500 hover:text-[#1a2a3a] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-2.5 sm:mb-4 text-[#1a2a3a] text-sm sm:text-base">Услуги</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {servicesList.map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="text-xs sm:text-sm text-gray-500 hover:text-[#1a2a3a] transition-colors inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-2.5 sm:mb-4 text-[#1a2a3a] text-sm sm:text-base">Контакты</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="tel:+78129827090"
                  className="text-xs sm:text-sm text-gray-500 hover:text-[#1a2a3a] transition-colors flex items-center gap-1.5 sm:gap-2"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  +7 (812) 982 70 90
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@finexspert24.ru"
                  className="text-xs sm:text-sm text-gray-500 hover:text-[#1a2a3a] transition-colors break-all"
                >
                  info@finexspert24.ru
                </a>
              </li>
              <li className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline mr-1.5 sm:mr-2" />
                г. Москва, Одинцово, ул. Садовая, д. 3Б, офис 809
              </li>
              <li className="text-xs sm:text-sm text-gray-500 pt-2 border-t border-gray-200/50">
                ИНН: 7807362241
              </li>
              <li className="text-xs sm:text-sm text-gray-500">
                ОГРН: 1117847326651
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300/50 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-400">
            © 2026 ФинЭксперт. Все права защищены.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-[#1a2a3a] transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/consent" className="text-gray-400 hover:text-[#1a2a3a] transition-colors">
              Согласие на обработку ПД
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
