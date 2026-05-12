import Link from "next/link"
import Image from "next/image"

export default function ConsentPage() {
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
            Согласие на обработку персональных данных
          </h1>

          <div className="prose prose-sm sm:prose max-w-none text-gray-600 space-y-6">
            <p className="leading-relaxed">
              Настоящим я, действуя свободно, своей волей и в своём интересе, даю согласие Обществу с ограниченной ответственностью «ФинЭКСПЕРТ» (ИНН 7807362241, ОГРН 1117847326651, КПП 503201001), расположенному по адресу: 143002, Московская обл., г. Одинцово, ул. Садовая, д. 3Б, офис 809, на обработку моих персональных данных.
            </p>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                1. Перечень персональных данных
              </h2>
              <p className="leading-relaxed mb-3">
                Согласие дается на обработку следующих персональных данных:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Фамилия, имя, отчество</li>
                <li>Номер контактного телефона</li>
                <li>Адрес электронной почты</li>
                <li>Наименование организации (при наличии)</li>
                <li>Должность (при наличии)</li>
                <li>Иные данные, добровольно предоставленные мной при заполнении форм на сайте finexspert24.ru</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                2. Цели обработки персональных данных
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Обеспечение связи со мной для консультирования по услугам компании в сфере финансово-юридической экспертизы</li>
                <li>Заключение и исполнение договоров на оказание услуг</li>
                <li>Направление информационных сообщений, в том числе рекламного характера</li>
                <li>Ведение деловой переписки</li>
                <li>Исполнение требований законодательства Российской Федерации</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                3. Способы обработки персональных данных
              </h2>
              <p className="leading-relaxed">
                Обработка персональных данных осуществляется с использованием средств автоматизации и/или без использования таких средств. Обработка включает: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                4. Срок действия согласия
              </h2>
              <p className="leading-relaxed">
                Настоящее согласие действует до момента его отзыва путём направления письменного уведомления на адрес электронной почты <a href="mailto:kurdyukova@finexspert24.ru" className="text-[#5A8A72] hover:underline">kurdyukova@finexspert24.ru</a> или по почтовому адресу: 143002, Московская обл., г. Одинцово, ул. Садовая, д. 3Б, офис 809.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                5. Отзыв согласия
              </h2>
              <p className="leading-relaxed">
                Я понимаю, что могу отозвать своё согласие на обработку персональных данных в любой момент, направив письменное заявление Оператору. Отзыв согласия не влияет на законность обработки, основанной на согласии до его отзыва. В случае отзыва согласия Оператор прекращает обработку персональных данных и уничтожает их в течение 30 (тридцати) дней с момента получения отзыва.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                6. Подтверждение согласия
              </h2>
              <p className="leading-relaxed">
                Заполняя формы на сайте finexspert24.ru и отмечая чекбокс согласия, я подтверждаю, что ознакомлен с настоящим согласием, <Link href="/privacy" className="text-[#5A8A72] hover:underline">Политикой конфиденциальности</Link>, и даю своё согласие на обработку персональных данных в соответствии с указанными условиями.
              </p>
            </section>

            <p className="text-sm text-gray-400 pt-4 border-t border-gray-200">
              Дата последнего обновления: 12 мая 2026 г.
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
