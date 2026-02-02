"use client"

import { Button } from "@/components/ui/button"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Phone, Building2 } from "lucide-react"
import { CallbackModal } from "@/components/callback-modal"

interface ServicePageLayoutProps {
  title: string
  children: React.ReactNode
}

export function ServicePageLayout({ title, children }: ServicePageLayoutProps) {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false)
  const navLinks = [
    { name: "Главная", href: "/" },
    { name: "О компании", href: "/about" },
    { name: "Услуги", href: "/#services" },
    { name: "Новости", href: "/#news" },
    { name: "Контакты", href: "/#pricing" },
  ]

  const services = [
    { name: "Финансовый консалтинг", href: "/services/consulting" },
    { name: "Регистрация и ликвидация ЮЛ", href: "/services/registration" },
    { name: "Бухгалтерские услуги", href: "/services/accounting" },
    { name: "Кадровый аутсорсинг", href: "/services/hr" },
    { name: "Банковские услуги", href: "/services/banking" },
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
              <span className="text-xs text-gray-400 uppercase tracking-wider hidden sm:block">Услуги</span>
              <Link 
                href="/#services" 
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
      <main className="flex-1 pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Title */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a2a3a] leading-tight">{title}</h1>
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6">
            {children}
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10 bg-[#243851] rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Заинтересовала услуга?</h3>
              <p className="text-xs sm:text-sm text-white/70">Оставьте заявку и мы свяжемся с вами</p>
            </div>
            <button
              onClick={() => setIsCallbackOpen(true)}
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-[#5A8A72] hover:bg-[#4D7A64] active:bg-[#3d6353] text-white font-semibold rounded-lg transition-all text-sm sm:text-base hover:shadow-lg hover:shadow-[#5A8A72]/30 whitespace-nowrap"
            >
              Заказать услугу
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-gray-200/50 backdrop-blur-xl border-t border-gray-200/50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
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
              <h4 className="text-xs font-semibold text-[#1a2a3a] mb-2">Навигация</h4>
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-[#1a2a3a] transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold text-[#1a2a3a] mb-2">Услуги</h4>
              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-xs text-gray-400 hover:text-[#1a2a3a] transition-colors inline-block"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="text-xs font-semibold text-[#1a2a3a] mb-2">Контакты</h4>
              <ul className="space-y-1.5">
                <li>
                  <a
                    href="tel:+78129827090"
                    className="text-xs text-gray-400 hover:text-[#1a2a3a] transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3 shrink-0" />
                    <span>+7 (812) 982 70 90</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@finexspert24.ru"
                    className="text-xs text-gray-400 hover:text-[#1a2a3a] transition-colors break-all"
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

      {/* Callback Modal */}
      <CallbackModal 
        isOpen={isCallbackOpen} 
        onClose={() => setIsCallbackOpen(false)}
        title="Заказать услугу"
      />
    </div>
  )
}
