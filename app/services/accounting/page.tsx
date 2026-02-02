import { ServicePageLayout } from "@/components/service-page-layout"

export default function AccountingPage() {
  return (
    <ServicePageLayout title="Бухгалтерские услуги">
      {/* Benefits */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#1a2a3a] mb-4">Обратившись к нашим специалистам Вы:</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-[#f8f9fa] rounded-lg p-4">
            <div className="w-8 h-8 rounded-lg bg-[#5A8A72]/10 flex items-center justify-center mb-3">
              <svg className="w-4 h-4 text-[#5A8A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-gray-600">Сократите издержки на содержание собственного отдела бухгалтерии и высвободите ресурсы организации для решения других задач</p>
          </div>
          <div className="bg-[#f8f9fa] rounded-lg p-4">
            <div className="w-8 h-8 rounded-lg bg-[#243851]/10 flex items-center justify-center mb-3">
              <svg className="w-4 h-4 text-[#243851]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <p className="text-sm text-gray-600">Получите профессиональные консультации по бухгалтерскому и налоговому учету с актуальной информацией по изменениям в законодательстве</p>
          </div>
          <div className="bg-[#f8f9fa] rounded-lg p-4">
            <div className="w-8 h-8 rounded-lg bg-[#5A8A72]/10 flex items-center justify-center mb-3">
              <svg className="w-4 h-4 text-[#5A8A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <p className="text-sm text-gray-600">Минимизируете финансовые риски по ведению бухучета за счёт перехода ответственности к аудиторской компании</p>
          </div>
          <div className="bg-[#f8f9fa] rounded-lg p-4">
            <div className="w-8 h-8 rounded-lg bg-[#243851]/10 flex items-center justify-center mb-3">
              <svg className="w-4 h-4 text-[#243851]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
            <p className="text-sm text-gray-600">Грамотно оптимизируете налоговые расходы компании, снизив налоговую нагрузку</p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-[#243851] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Перечень услуг по бухгалтерскому и налоговому учету</h2>
        <ul className="space-y-3 text-sm text-white/80">
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-1.5 shrink-0" />
            <span>Полное или частичное ведение бухгалтерского и налогового учета на базе программы 1С (у клиента отсутствует необходимость приобретать собственную лицензию), сдача отчетности</span>
          </li>
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-1.5 shrink-0" />
            <span>Участие в налоговых и иных проверках</span>
          </li>
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-1.5 shrink-0" />
            <span>Услуга «Главный бухгалтер» (проверка первичной документации, закрытие периода, сдача отчетности, рекомендации по оптимизации налогообложения)</span>
          </li>
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-1.5 shrink-0" />
            <span>Взаимодействие происходит с помощью использования CRM программы, экономя время клиента и повышая эффективность и контроль оказания услуг</span>
          </li>
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-1.5 shrink-0" />
            <span>Восстановление бухгалтерского и налогового учета</span>
          </li>
        </ul>
      </div>
    </ServicePageLayout>
  )
}
