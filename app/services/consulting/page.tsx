import { ServicePageLayout } from "@/components/service-page-layout"

export default function ConsultingPage() {
  return (
    <ServicePageLayout title="Финансовый консалтинг">
      {/* Analysis Section */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#1a2a3a] mb-4">Анализ финансового состояния</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-2 shrink-0" />
            <span className="text-gray-600">Экспресс-диагностика финансового состояния организации</span>
          </li>
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-2 shrink-0" />
            <span className="text-gray-600">Комплексный финансово-экономический анализ</span>
          </li>
          <li className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5A8A72] mt-2 shrink-0" />
            <span className="text-gray-600">Рекомендации по повышению платежеспособности, устойчивости, эффективности бизнеса</span>
          </li>
        </ul>
      </div>

      {/* Management Accounting Section */}
      <div className="bg-[#243851] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          Внедрение/оптимизация системы управленческого учета и бюджетирования
        </h2>
        <div className="space-y-4 text-white/80">
          <p>
            Формализация стратегии и учетной политики Предприятия в области финансового управления. 
            Разработка форм бюджетных документов (альбом бюджетных форм), требований, и сопровождение 
            внедрения автоматизированного управленческого учета на базе программы 1С.
          </p>
          <p>Подготовка и консультирование персонала.</p>
          <p>Внедрение CRM программы на базе Битрикс 24</p>
        </div>
      </div>
    </ServicePageLayout>
  )
}
