"use client"

import React from "react"

import { useState } from "react"

interface CallbackModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
}

export function CallbackModal({ isOpen, onClose, title = "Заказать звонок" }: CallbackModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    setTimeout(() => {
      setIsSuccess(false)
      setName("")
      setPhone("")
      onClose()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg sm:rounded-xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-100">
          <h3 className="text-base sm:text-lg font-semibold text-[#1a2a3a]">{title}</h3>
          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors shrink-0"
            aria-label="Закрыть"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          {isSuccess ? (
            <div className="text-center py-5 sm:py-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#5A8A72]/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#5A8A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="text-[#1a2a3a] font-semibold text-base sm:text-lg">Заявка отправлена</p>
              <p className="text-sm text-gray-500 mt-1.5 sm:mt-2">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm text-gray-600 mb-1.5 font-medium">Ваше имя</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-[#1a2a3a] text-sm sm:text-base focus:outline-none focus:border-[#5A8A72] focus:ring-2 focus:ring-[#5A8A72]/20 transition-all"
                  placeholder="Введите имя"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-gray-600 mb-1.5 font-medium">Ваш телефон</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-[#1a2a3a] text-sm sm:text-base focus:outline-none focus:border-[#5A8A72] focus:ring-2 focus:ring-[#5A8A72]/20 transition-all"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 sm:py-3.5 bg-[#5A8A72] hover:bg-[#4D7A64] active:bg-[#3d6353] text-white text-sm sm:text-base font-semibold rounded-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#5A8A72]/30"
              >
                {isSubmitting ? "Отправка..." : "Отправить"}
              </button>
              <p className="text-xs text-gray-400 text-center leading-relaxed px-2">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
