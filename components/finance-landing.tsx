"use client"
import React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ArrowDownRight,
  Phone,
  MessageCircle,
  Send,
  TrendingUp,
  Menu,
  X,
  Building2,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CallbackModal } from "@/components/callback-modal"

const services = [
  "Финансовый консалтинг",
  "Регистрация и ликвидация ЮЛ",
  "Бухгалтерские услуги",
  "Кадровый аутсорсинг",
  "Банковские услуги",
  // Дополнительные услуги могут быть добавлены здесь
]

const testimonials = [
  {
    name: "Сергей Теплицкий",
    text: "Пользуюсь услугами сопровождения бухгалтерии с 2011 года. Претензий и штрафов со стороны проверяющих органов не возникало. Бухгалтерия - эта область за которую я в своем бизнесе спокоен.",
  },
  {
    name: "Андрей",
    text: "Консультация по налогообложению операций транспортно-экспедиторской деятельности была предоставлена оперативно и позволила нам разобраться в особенностях начисления НДС на эти услуги и отстоять свою позицию перед налоговиками.",
  },
  {
    name: "Юрий",
    text: 'Спасибо компании "ФинЭксперт" за качественный аудит.',
  },
  {
    name: "Ирина",
    text: 'Аудиторы компании "ФинЭксперт" помогли своей грамотной и своевременной консультацией отстоять позицию предприятия перед налоговиками.',
  },
  {
    name: "Игорь",
    text: "На мой запрос предоставили грамотную консультацию по налогу на прибыль и НДС на услуги экспедирования, которая помогла правильно отразить операции в учете и отстоять перед налоговиками свою позицию. В результате к нам не были применены санкции и мы не переплатили налоги как того хотели налоговики.",
  },
]

export function FinanceLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [missionSlide, setMissionSlide] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false)
  const [isCallbackOpen, setIsCallbackOpen] = useState(false)
  const testimonialRef = useRef<HTMLDivElement>(null)

  const missionSlides = [
    {
      title: "Миссия Компании",
      text: 'ООО "ФинЭксперт" является экспертом и партнером, помогает клиентам добиваться успехов в мире развивающейся Бизнес среды.',
    },
    {
      title: "Наша цель",
      text: "Процветание и успех каждого клиента. Используя полный пакет инструментов в сфере бизнеса, от формирования Бизнес стратегии и построения финансовой модели, до автоматизации бизнес процессов и учета. Готовы максимально содействовать вашему развитию!",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setMissionSlide((prev) => (prev + 1) % missionSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [missionSlides.length])

  useEffect(() => {
    if (isTestimonialHovered) return
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [isTestimonialHovered])

  const navLinks = [
    { name: "Главная", href: "#" },
    { name: "О компании", href: "/about" },
    { name: "Услуги", href: "#services" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "Новости", href: "/news" },
    { name: "Контакты", href: "#pricing" },
  ]

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle internal anchor links
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        const headerOffset = 80 // Account for fixed header
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      } else if (href === '#') {
        // Scroll to top for home link
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#1a2a3a] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2a3a]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-1.5 sm:gap-2">
              <Image
                src="/images/logo-fin.png"
                alt="ФинЭксперт"
                width={36}
                height={36}
                className="w-7 h-7 sm:w-9 sm:h-9 object-contain"
              />
              <span className="text-base sm:text-lg font-bold tracking-tight">
                Фин<span className="text-[#5A8A72]">Эксперт</span>
              </span>
            </a>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-sm text-gray-400 hover:text-white transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#5A8A72] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>
            {/* Contact */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+78129827090" className="text-sm font-medium">
                +7 (812) 982-70-90
              </a>
              <button
                onClick={() => setIsCallbackOpen(true)}
                className="px-4 py-2 bg-[#5A8A72] hover:bg-[#4D7A64] text-white text-sm font-medium rounded-lg transition-colors"
              >
                Заказать звонок
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 transition-all duration-300 hover:bg-white/10 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#243851] border-t border-white/5 animate-in slide-in-from-top duration-300">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white hover:bg-white/5 py-2 px-3 rounded-lg transition-all duration-300 transform hover:translate-x-1"
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href)
                    setMobileMenuOpen(false)
                  }}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a href="tel:+78129827090" className="block font-medium py-2">
                  +7 (812) 982-70-90
                </a>
                <button
                  onClick={() => {
                    setIsCallbackOpen(true)
                    setMobileMenuOpen(false)
                  }}
                  className="w-full px-4 py-2.5 bg-[#5A8A72] hover:bg-[#4D7A64] text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Hero Section */}
      <section className="pt-14 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="relative rounded-sm overflow-hidden min-h-[450px] sm:min-h-[500px] lg:min-h-[600px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/office-hero.jpg"
                alt="Офис ФинЭксперт"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-900/60" />
            </div>
            {/* Content */}
            <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-[450px] sm:min-h-[500px] lg:min-h-[600px]">
              {/* Left - Text Content with Auto Slider */}
              <div className="max-w-xl space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="relative h-52 sm:h-48 lg:h-44 overflow-hidden">
                  {missionSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === missionSlide
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-balance mb-2 sm:mb-3 font-sans">
                        {slide.title}
                      </h1>
                      <p className="text-gray-200 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed">
                        {slide.text}
                      </p>
                    </div>
                  ))}
                </div>
{/* Dots Indicator - фиксированный размер на всех экранах */}
                <div className="flex gap-2">
                  {missionSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setMissionSlide(index)}
                      className={`dot-indicator w-2 h-2 rounded-sm transition-all duration-300 ${
                        index === missionSlide ? "bg-white w-6" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
               
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    onClick={() => setIsCallbackOpen(true)}
                    className="bg-[#243851] hover:bg-[#2d4562] text-white rounded-sm px-4 sm:px-6 h-11 sm:h-12 lg:h-14 text-sm sm:text-base font-medium group w-full sm:w-auto"
                  >
                    <span className="truncate">Получить консультацию</span>
                    <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 shrink-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={(e) => {
                      e.preventDefault()
                      const servicesEl = document.getElementById('services')
                      if (servicesEl) {
                        servicesEl.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="border-white/30 text-white hover:bg-white/10 rounded-sm px-4 sm:px-6 h-11 sm:h-12 lg:h-14 text-sm sm:text-base font-medium group bg-transparent w-full sm:w-auto"
                  >
                    <span className="truncate">Посмотреть услуги</span>
                    <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 shrink-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                  </Button>
                </div>
              </div>
              {/* Right - Stats Cards */}
              <div className="flex lg:flex-col flex-row gap-1 sm:gap-3 lg:gap-4 mt-4 sm:mt-8 lg:mt-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-sm p-1.5 sm:p-4 lg:p-6 text-white flex-1 lg:flex-initial text-center lg:text-left">
                  <span className="text-base sm:text-3xl lg:text-4xl font-bold block">23</span>
                  <p className="text-[9px] sm:text-sm text-gray-200 mt-0.5 sm:mt-1 leading-tight">Работника в компании</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-sm p-1.5 sm:p-4 lg:p-6 text-white flex-1 lg:flex-initial text-center lg:text-left">
                  <span className="text-base sm:text-3xl lg:text-4xl font-bold block">246</span>
                  <p className="text-[9px] sm:text-sm text-gray-200 mt-0.5 sm:mt-1 leading-tight">Счастливых клиентов</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-sm p-1.5 sm:p-4 lg:p-6 text-white flex-1 lg:flex-initial text-center lg:text-left">
                  <span className="text-base sm:text-3xl lg:text-4xl font-bold block">7</span>
                  <p className="text-[9px] sm:text-sm text-gray-200 mt-0.5 sm:mt-1 leading-tight">Лет на рынке</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section - Interactive Accordion Style */}
      <section id="services" className="py-10 sm:py-12 lg:py-16 bg-[#f8f9fa] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 items-start">
            {/* Left - Header */}
            <div className="lg:sticky lg:top-32">
              <span className="inline-block px-2.5 sm:px-3 py-1 bg-[#243851]/10 text-[#243851] text-xs font-medium rounded-sm mb-2 sm:mb-3">
                Наши услуги
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a2a3a] mb-3 sm:mb-4 leading-tight">
                Комплексные решения для вашего бизнеса
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Наши специалисты без труда решат финансово-экономические, кадровые, бухгалтерские и налоговые задачи
              </p>
              <div className="hidden lg:block">
                <Button
                  onClick={() => setIsCallbackOpen(true)}
                  className="bg-[#243851] hover:bg-[#2d4562] text-white rounded-sm px-6 h-12 text-sm font-medium"
                >
                  Оставить заявку
                  <ArrowDownRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            {/* Right - Services List */}
            <div className="space-y-2">
              {[
                {
                  title: "Финансовый консалтинг",
                  desc: "Повышение финансовой эффективности компаний. Анализ, стратегия, оптимизация затрат и увеличение прибыли.",
                  iconPath: "M3 17L9 11L13 15L21 7M21 7H15M21 7V13",
                  href: "/services/consulting",
                },
                {
                  title: "Регистрация и ликвидация ЮЛ",
                  desc: "Регистрация и ликвидация ООО, АО и ИП под ключ. Полное сопровождение на всех этапах.",
                  iconPath: "M9 12L11 14L15 10M19 21H5C4 21 3 20 3 19V5C3 4 4 3 5 3H19C20 3 21 4 21 5V19C21 20 20 21 19 21Z",
                  href: "/services/registration",
                },
                {
                  title: "Бухгалтерские услуги",
                  desc: "Ведение бухгалтерского и налогового учета. Подготовка отчетности, оптимизация налогов.",
                  iconPath: "M4 5H20M4 9H12M4 13H20M4 17H12",
                  href: "/services/accounting",
                },
                {
                  title: "Кадровый аутсорсинг",
                  desc: "Кадровое делопроизводство и подбор сотрудников. HR-консалтинг и управление персоналом.",
                  iconPath: "M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 11C7.02944 11 3 14.5817 3 19V21H21V19C21 14.5817 16.9706 11 12 11Z",
                  href: "/services/hr",
                },
                {
                  title: "Банковские услуги",
                  desc: "Помощь в получении банковских гарантий и кредитов. Работа с лучшими банками-партнерами.",
                  iconPath: "M3 21H21M3 10H21M5 6L12 3L19 6M4 10V21M20 10V21M8 14V17M12 14V17M16 14V17",
                  href: "/services/banking",
                },
              ].map((service, index) => (
                <Link
                  href={service.href}
                  key={index}
                  className="group relative bg-white rounded-sm overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-lg hover:shadow-[#243851]/10 active:scale-[0.99] block"
                >
                  {/* Animated left border */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gray-200 group-hover:bg-[#243851] transition-colors duration-300">
                    <div className="absolute inset-0 bg-[#243851] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                  </div>
                 
                  <div className="p-3 pl-4 sm:p-4 sm:pl-6">
                    <div className="flex items-start gap-2.5 sm:gap-4">
                      {/* Minimal Line Icon */}
                      <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shrink-0 relative">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-4 h-4 sm:w-5 sm:h-5 text-[#243851] group-hover:scale-110 transition-transform duration-300"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={service.iconPath} />
                        </svg>
                        <div className="absolute inset-0 rounded-sm bg-[#243851]/0 group-hover:bg-[#243851]/5 transition-colors duration-300" />
                      </div>
                     
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                          <h3 className="text-sm sm:text-base font-semibold text-[#1a2a3a] group-hover:text-[#243851] transition-colors">
                            {service.title}
                          </h3>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-300 group-hover:text-[#243851] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-300 shrink-0"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 17L17 7M17 7H8M17 7V16" />
                          </svg>
                        </div>
                       
                        {/* Description - expands on hover, always visible on mobile */}
                        <div className="sm:grid sm:grid-rows-[0fr] sm:group-hover:grid-rows-[1fr] sm:transition-all sm:duration-500">
                          <div className="sm:overflow-hidden">
                            <p className="text-gray-500 text-xs leading-relaxed pt-0.5 pb-0.5 sm:pb-1">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* About Company Section - Premium */}
      <section id="about" className="relative">
        {/* Full width image with overlay */}
        <div className="relative h-[500px] sm:h-[450px] lg:h-[450px]">
          <Image
            src="/images/office-building.png"
            alt="Команда ФинЭксперт"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1a2a3a]/60" />
         
          {/* Content over image */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8">
                {/* Mission */}
                <div className="bg-[#1a2a3a]/95 backdrop-blur-sm p-4 sm:p-5 lg:p-8 rounded-lg">
                  <h3 className="text-sm sm:text-base lg:text-xl font-semibold uppercase tracking-wide text-white block mb-2 sm:mb-3">Миссия</h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    Мы стремимся быть признанным экспертом и предпочтительным партнером, помогая нашим клиентам добиваться успехов в мире быстро развивающейся Бизнес среды в России.
                  </p>
                </div>
                {/* Work Principle */}
                <div className="bg-[#1a2a3a]/95 backdrop-blur-sm p-4 sm:p-5 lg:p-8 rounded-lg text-slate-600 bg-secondary-foreground">
                  <h3 className="text-sm sm:text-base lg:text-xl font-semibold uppercase tracking-wide block mb-2 sm:mb-3 text-primary">Принцип работы</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-primary">
                    Это стремление соответствовать высоким стандартам качества российских компаний, а также лучшим традициям отечественной и мировой школы делового стиля и профессиональной этики.
                  </p>
                </div>
                {/* Specialists */}
                <div className="bg-[#1a2a3a]/95 backdrop-blur-sm p-4 sm:p-5 lg:p-8 rounded-lg sm:col-span-2 lg:col-span-1">
                  <h3 className="text-sm sm:text-base lg:text-xl font-semibold uppercase tracking-wide text-white block mb-2 sm:mb-3">Специалисты</h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    Это высококвалифицированные профессионалы, имеющие большой опыт работы. Они без труда решают финансово-экономические, кадровые, бухгалтерские и налоговые задачи.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-10 sm:py-14 lg:py-20 bg-[#f8f9fa] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block px-2.5 sm:px-3 py-1 bg-[#243851]/10 text-[#243851] text-xs font-medium rounded-full mb-2 sm:mb-3">
              Отзывы клиентов
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a2a3a]">
              Что говорят о нас
            </h2>
          </div>
          {/* Testimonials Carousel */}
          <div
            ref={testimonialRef}
            className="relative"
            onMouseEnter={() => setIsTestimonialHovered(true)}
            onMouseLeave={() => setIsTestimonialHovered(false)}
          >
            {/* Main testimonial card */}
            <div className="relative bg-white shadow-md border border-gray-100 rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-12 min-h-[260px] sm:min-h-[220px] flex flex-col justify-center">
              {/* Quote icon */}
              <Quote className="absolute top-3 left-3 sm:top-6 sm:left-6 w-5 h-5 sm:w-8 sm:h-8 text-[#5A8A72]/20" />
             
              {/* Content */}
              <div className="relative z-10 px-6 sm:px-4">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === activeTestimonial
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                    }`}
                  >
                    <p className="text-[#1a2a3a]/80 text-sm sm:text-base lg:text-xl leading-relaxed mb-3 sm:mb-6 text-center px-1 sm:px-2">
                      "{testimonial.text}"
                    </p>
                    <p className="text-center text-[#1a2a3a] font-semibold text-sm sm:text-base">
                      {testimonial.name}
                    </p>
                  </div>
                ))}
              </div>
              {/* Navigation arrows */}
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="absolute left-1.5 sm:left-4 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gray-50 hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center transition-colors group z-20"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#243851] transition-colors" />
              </button>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="absolute right-1.5 sm:right-4 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gray-50 hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center transition-colors group z-20"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#243851] transition-colors" />
              </button>
            </div>
{/* Progress dots - фиксированный размер на всех экранах */}
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`dot-indicator h-1.5 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? "w-6 bg-[#5A8A72]" : "w-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
  />
  ))}
  </div>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section id="pricing" className="py-8 sm:py-10 lg:py-12 bg-[#243851] relative overflow-hidden scroll-mt-20">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 overflow-hidden bg-[rgba(36,56,81,1)]">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#243851] rounded-full opacity-40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#3a5a7c] rounded-full opacity-30 blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          {/* Header centered */}
          <div className="text-center mb-5 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              Запись на прием
            </h2>
           
            {/* Contact info row */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2.5 sm:gap-4 lg:gap-10 text-xs sm:text-sm">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 text-white/60 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2" />
                </svg>
                <span className="text-center sm:text-left leading-snug">г. Москва, Одинцово, ул. Садовая, д. 3Б, офис 809</span>
              </a>
              <a href="mailto:info@finexspert24.ru" className="flex items-center gap-1.5 sm:gap-2 text-white/60 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="M3 5l9 7 9-7" />
                </svg>
                <span className="break-all">info@finexspert24.ru</span>
              </a>
              <a href="tel:+78129827090" className="flex items-center gap-1.5 sm:gap-2 text-white/60 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span className="whitespace-nowrap">+7 (812) 982 70 90</span>
              </a>
            </div>
          </div>
          {/* Form */}
          <form className="relative">
            <div className="absolute -top-2 -right-2 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-r-2 border-[#5A8A72]/30 rounded-tr-xl sm:rounded-tr-2xl hidden sm:block" />
            <div className="absolute -bottom-2 -left-2 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-l-2 border-[#5A8A72]/30 rounded-bl-xl sm:rounded-bl-2xl hidden sm:block" />
           
            <div className="bg-white/10 backdrop-blur-xl rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 border border-white/10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {/* Name */}
                <div className="relative">
                  <Input
                    placeholder="Ваше имя *"
                    required
                    className="h-11 sm:h-12 rounded-lg border-0 bg-white/10 placeholder:text-white/40 focus:bg-white/20 focus:ring-2 focus:ring-[#5A8A72]/50 transition-all pl-9 sm:pl-10 text-white text-sm sm:text-base"
                  />
                  <div className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5A8A72]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
                {/* Email */}
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Ваш e-mail"
                    className="h-11 sm:h-12 rounded-lg border-0 bg-white/10 text-white placeholder:text-white/40 focus:bg-white/20 focus:ring-2 focus:ring-[#5A8A72]/50 transition-all pl-9 sm:pl-10 text-sm sm:text-base"
                  />
                  <div className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5A8A72]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 6L12 13L2 6" />
                    </svg>
                  </div>
                </div>
                {/* Phone */}
                <div className="relative">
                  <Input
                    type="tel"
                    placeholder="Ваш телефон"
                    className="h-11 sm:h-12 rounded-lg border-0 bg-white/10 text-white placeholder:text-white/40 focus:bg-white/20 focus:ring-2 focus:ring-[#5A8A72]/50 transition-all pl-9 sm:pl-10 text-sm sm:text-base"
                  />
                  <div className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5A8A72]">
                    <Phone className="w-full h-full" />
                  </div>
                </div>
                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="h-11 sm:h-12 bg-[#5A8A72] hover:bg-[#4D7A64] text-[#1a2a3a] rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-[#5A8A72]/30 hover:scale-[1.02] active:scale-[0.98] group text-sm sm:text-base"
                >
                  <span className="text-foreground">Записаться</span>
                  <ArrowDownRight className="w-4 h-4 ml-1.5 sm:ml-2 group-hover:rotate-45 transition-transform text-foreground" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 sm:py-10 lg:py-12 bg-gray-100/80 backdrop-blur-xl border-t border-gray-200/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-gray-200/30 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Logo */}
            <div>
              <a href="#" className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
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
              </a>
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
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-xs sm:text-sm text-gray-500 hover:text-[#1a2a3a] transition-colors inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Services */}
            <div>
              <h4 className="font-semibold mb-2.5 sm:mb-4 text-[#1a2a3a] text-sm sm:text-base">Услуги</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  { name: "Финансовый консалтинг", href: "/services/consulting" },
                  { name: "Регистрация и ликвидация ЮЛ", href: "/services/registration" },
                  { name: "Бухгалтерские услуги", href: "/services/accounting" },
                  { name: "Кадровый аутсорсинг", href: "/services/hr" },
                  { name: "Банковские услуги", href: "/services/banking" },
                ].map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-xs sm:text-sm text-gray-500 hover:text-[#1a2a3a] transition-colors inline-block"
                    >
                      {service.name}
                    </a>
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
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300/50 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
            © 2026 ФинЭксперт. Все права защищены.
          </div>
        </div>
      </footer>
      {/* Callback Modal */}
      <CallbackModal
        isOpen={isCallbackOpen}
        onClose={() => setIsCallbackOpen(false)}
      />
    </div>
  )
}
