import { ServicePageLayout } from "@/components/service-page-layout"

export default function HRPage() {
  return (
    <ServicePageLayout title="Кадровый аутсорсинг">
      {/* HR Administration */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#1a2a3a] mb-4">Кадровое администрирование</h2>
        <ul className="space-y-2.5 text-sm text-gray-600">
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-1.5 shrink-0" />
            <span>Ведение, постановка и восстановление кадрового учета</span>
          </li>
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-1.5 shrink-0" />
            <span>Разработка регламентов и положений</span>
          </li>
        </ul>
      </div>

      {/* Recruitment */}
      <div className="bg-[#243851] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Подбор персонала</h2>
        <div className="space-y-3 text-sm text-white/80">
          <p>
            Профессиональный подход к подбору персонала, быстрое закрытие вакансий специалистов и ТОП менеджеров. 
            Использование собственной базы резюме, привлечение претендентов в социальных сетях, на специализированных 
            выставках и семинарах, применение нестандартных методов, прямой поиск работников среди сотрудников компаний-конкурентов.
          </p>
          <p>Проведение первичного отбора. Оценка и проверка кандидатов.</p>
          <p>Гарантия на подобранного кандидата. Индивидуальная работа с каждым запросом, предложение только лучших кандидатов.</p>
        </div>
      </div>

      {/* Services for Job Seekers */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#1a2a3a] mb-4">Услуги для соискателей</h2>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Resume Audit */}
          <div className="bg-[#5A8A72] rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-white">Аудит резюме</h3>
              <span className="text-white/80 font-bold">500 руб.</span>
            </div>
            <p className="text-sm text-white/70 mb-3">Грамотно составленное резюме - это 50% успеха.</p>
            <ul className="space-y-1.5 text-xs text-white/70">
              <li>• Проверка структуры информации</li>
              <li>• Анализ на соответствие требованиям рынка</li>
              <li>• Указание на ошибки и клише</li>
              <li>• Обратная связь по опыту и навыкам</li>
            </ul>
          </div>

          {/* Resume Creation */}
          <div className="bg-[#f8f9fa] rounded-xl p-5 border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-[#1a2a3a]">Создание резюме "с нуля"</h3>
              <span className="text-[#5A8A72] font-bold">5000 руб.</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">Какой результат получаете:</p>
            <ul className="space-y-1.5 text-xs text-gray-500">
              <li>• Работающее резюме и сопроводительное письмо</li>
              <li>• Отражение конкурентных преимуществ</li>
              <li>• Увеличение количества приглашений</li>
              <li>• Преимущество перед другими кандидатами</li>
            </ul>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  )
}
