import { ServicePageLayout } from "@/components/service-page-layout"

export default function BankingPage() {
  return (
    <ServicePageLayout title="Услуги в банковской сфере">
      {/* Main Offer */}
      <div className="bg-[#243851] rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Привлечём кредиты и оформим гарантии банков</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="w-10 h-10 rounded-lg bg-[#5A8A72] flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
            <p className="text-white/80 text-sm">Получим лучший процент по кредиту в текущих возможностях рынка</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="w-10 h-10 rounded-lg bg-[#5A8A72] flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-white/80 text-sm">Работаем со всеми программами поддержки бизнеса (льготные кредиты и займы, гос. гарантии, субсидирование)</p>
          </div>
        </div>
      </div>

      {/* Advantages */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#1a2a3a] mb-4">Наши преимущества</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-[#5A8A72]/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#5A8A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-[#1a2a3a] mb-1">Работаем без предоплат</h3>
              <p className="text-sm text-gray-500">Вы платите комиссию по факту доступа к деньгам. Никаких скрытых платежей и рисков.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-[#243851]/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#243851]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-[#1a2a3a] mb-1">Ускоряем любую сделку</h3>
              <p className="text-sm text-gray-500">За счёт опыта и налаженных связей с банками значительно сокращаем сроки рассмотрения и оформления.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs */}
      <div className="bg-[#f8f9fa] rounded-xl p-6 border border-gray-100">
        <h2 className="text-lg font-semibold text-[#1a2a3a] mb-4">Программы поддержки бизнеса</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-[#5A8A72] mb-1">%</div>
            <p className="text-sm text-gray-600">Льготные кредиты</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-[#243851] mb-1">GOV</div>
            <p className="text-sm text-gray-600">Гос. гарантии</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-[#5A8A72] mb-1">SUB</div>
            <p className="text-sm text-gray-600">Субсидирование</p>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  )
}
