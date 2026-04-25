import Link from "next/link"
import Image from "next/image"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-[#1a2a3a] py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-fin.png"
              alt="ФинЭксперт"
              width={36}
              height={36}
              className="w-8 h-8 object-contain"
            />
            <span className="text-lg font-bold text-white">
              Фин<span className="text-[#5A8A72]">Эксперт</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1a2a3a] mb-6">
            Политика конфиденциальности
          </h1>

          <div className="prose prose-sm sm:prose max-w-none text-gray-600 space-y-6">
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                1. Общие положения
              </h2>
              <p className="leading-relaxed">
                Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации, которую ООО «ФинЭксперт» (ИНН 7807362241, ОГРН 1117847326651) может получить о пользователе во время использования сайта.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                2. Определение терминов
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).</li>
                <li><strong>Обработка персональных данных</strong> — любое действие или совокупность действий с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, передачу, обезличивание, блокирование, удаление, уничтожение.</li>
                <li><strong>Оператор</strong> — ООО «ФинЭксперт», самостоятельно организующее и осуществляющее обработку персональных данных.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                3. Какие персональные данные мы собираем
              </h2>
              <p className="leading-relaxed mb-3">
                Мы можем собирать следующие категории персональных данных:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Имя, фамилия, отчество</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
                <li>Наименование организации</li>
                <li>Иная информация, добровольно предоставленная пользователем</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                4. Цели обработки персональных данных
              </h2>
              <p className="leading-relaxed mb-3">
                Персональные данные обрабатываются в следующих целях:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Связь с пользователем для оказания консультационных услуг</li>
                <li>Заключение и исполнение договоров на оказание услуг</li>
                <li>Направление информационных и рекламных материалов (при наличии согласия)</li>
                <li>Улучшение качества обслуживания</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                5. Правовые основания обработки
              </h2>
              <p className="leading-relaxed">
                Обработка персональных данных осуществляется на основании согласия субъекта персональных данных, а также в целях исполнения договора, стороной которого является субъект персональных данных.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                6. Защита персональных данных
              </h2>
              <p className="leading-relaxed">
                Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                7. Права субъекта персональных данных
              </h2>
              <p className="leading-relaxed mb-3">
                Пользователь имеет право:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Получать информацию об обработке своих персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия или бездействие Оператора в уполномоченный орган</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                8. Контактная информация
              </h2>
              <p className="leading-relaxed">
                По вопросам, связанным с обработкой персональных данных, вы можете обратиться по адресу электронной почты: <a href="mailto:info@finexspert24.ru" className="text-[#5A8A72] hover:underline">info@finexspert24.ru</a> или по телефону: <a href="tel:+78129827090" className="text-[#5A8A72] hover:underline">+7 (812) 982-70-90</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                9. Заключительные положения
              </h2>
              <p className="leading-relaxed">
                Настоящая Политика может быть изменена или дополнена Оператором в любое время. Новая редакция Политики вступает в силу с момента её размещения на сайте.
              </p>
            </section>

            <p className="text-sm text-gray-400 pt-4 border-t border-gray-200">
              Дата последнего обновления: 25 апреля 2026 г.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#5A8A72] hover:text-[#4D7A64] font-medium transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Вернуться на главную
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
