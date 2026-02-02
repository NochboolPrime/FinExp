import { ServicePageLayout } from "@/components/service-page-layout"

export default function RegistrationPage() {
  return (
    <ServicePageLayout title="Регистрация и ликвидация ЮЛ">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#1a2a3a] mb-4">Регистрация фирм в Москве и Санкт-Петербурге</h2>
        <p className="text-gray-600 mb-4">
          Когда начинаете собственный бизнес, в первую очередь необходимо правильно его зарегистрировать. 
          Различают три формы ведения предпринимательской деятельности:
        </p>
        <div className="grid sm:grid-cols-3 gap-3 mb-4">
          <div className="bg-[#f8f9fa] rounded-lg p-3 text-center">
            <span className="text-sm font-medium text-[#1a2a3a]">ИП</span>
            <p className="text-xs text-gray-500 mt-1">Индивидуальный предприниматель</p>
          </div>
          <div className="bg-[#f8f9fa] rounded-lg p-3 text-center">
            <span className="text-sm font-medium text-[#1a2a3a]">ООО</span>
            <p className="text-xs text-gray-500 mt-1">Общество с ограниченной ответственностью</p>
          </div>
          <div className="bg-[#f8f9fa] rounded-lg p-3 text-center">
            <span className="text-sm font-medium text-[#1a2a3a]">АО</span>
            <p className="text-xs text-gray-500 mt-1">Акционерное общество</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Для наших клиентов поможем оформить Усиленную Квалифицированную Электронную Подпись (УКЭП или ЭЦП), 
          при помощи которой документы подаются на государственную регистрацию без необходимости обращения к нотариусу.
        </p>
      </div>

      {/* Services List */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#1a2a3a] mb-4">Наши услуги по регистрации фирм</h2>
        <ul className="space-y-2.5 text-sm text-gray-600">
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-1.5 shrink-0" />
            <span>Консультации по вопросам выбора организационно-правовой формы, наименования, порядка и способов оплаты уставного капитала</span>
          </li>
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-1.5 shrink-0" />
            <span>Подготовка необходимого комплекта документов, разработка устава</span>
          </li>
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-1.5 shrink-0" />
            <span>Комплексное сопровождение регистрации фирмы "под ключ"</span>
          </li>
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-1.5 shrink-0" />
            <span>Подбор "юридического адреса"</span>
          </li>
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-1.5 shrink-0" />
            <span>Открытие расчетного счета в банке</span>
          </li>
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-1.5 shrink-0" />
            <span>Ведение бухгалтерского учета организации, сдача отчетности</span>
          </li>
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-1.5 shrink-0" />
            <span>Оказание бухгалтерских и налоговых консультаций, выбор режима налогообложения</span>
          </li>
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-1.5 shrink-0" />
            <span>Сопровождение регистрации выпуска акций акционерного общества</span>
          </li>
        </ul>
      </div>

      {/* Pricing Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-[#1a2a3a]">Стоимость услуг</h2>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div>
              <p className="font-medium text-[#1a2a3a]">Регистрация ООО, АО</p>
              <p className="text-xs text-gray-500 mt-0.5">Регистрация юридического лица "под ключ". Гос. пошлина не включена (4 000 руб.)</p>
            </div>
            <span className="text-[#5A8A72] font-semibold whitespace-nowrap ml-4">от 4 900 руб.</span>
          </div>
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div>
              <p className="font-medium text-[#1a2a3a]">Регистрация ИП</p>
              <p className="text-xs text-gray-500 mt-0.5">Регистрация ИП "под ключ". Гос. пошлина не включена.</p>
            </div>
            <span className="text-[#5A8A72] font-semibold whitespace-nowrap ml-4">от 3 900 руб.</span>
          </div>
        </div>
        <div className="p-4 bg-gray-50 text-xs text-gray-500">
          Нотариальные расходы оплачиваются дополнительно. При использовании ЭЦП государственная пошлина не уплачивается!
        </div>
      </div>

      {/* Bonus */}
      <div className="bg-gradient-to-r from-[#5A8A72] to-[#4D7A64] rounded-xl p-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            <span className="text-white font-bold">Бухгалтерские услуги бесплатно!</span>
          </div>
          <p className="text-white/90 text-sm leading-relaxed">
            При заказе{" "}
            <a 
              href="https://www.gestion.ru/registraciya-firm/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white font-medium"
            >
              регистрации фирмы
            </a>{" "}
            или{" "}
            <a 
              href="https://www.gestion.ru/registraciya-firm/registraciya-ip/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white font-medium"
            >
              ИП
            </a>{" "}
            Вы получаете два месяца бесплатного обслуживания в рамках ведения бухгалтерского и налогового учета. Подробности - у наших специалистов.
          </p>
        </div>
      </div>
    </ServicePageLayout>
  )
}
