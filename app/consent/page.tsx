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
              Настоящим я, действуя свободно, своей волей и в своём интересе, даю согласие ООО «ФинЭксперт» (ИНН 7807362241, ОГРН 1117847326651), расположенному по адресу: г. Москва, Одинцово, ул. Садовая, д. 3Б, офис 809, на обработку моих персональных данных.
            </p>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                Перечень персональных данных
              </h2>
              <p className="leading-relaxed mb-3">
                Согласие дается на обработку следующих персональных данных:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Фамилия, имя, отчество</li>
                <li>Номер контактного телефона</li>
                <li>Адрес электронной почты</li>
                <li>Наименование организации (при наличии)</li>
                <li>Иные данные, добровольно предоставленные мной</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                Цели обработки персональных данных
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Обеспечение связи со мной для консультирования по услугам компании</li>
                <li>Заключение и исполнение договоров на оказание услуг</li>
                <li>Направление информационных сообщений, в том числе рекламного характера</li>
                <li>Ведение деловой переписки</li>
                <li>Исполнение требований законодательства Российской Федерации</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                Способы обработки персональных данных
              </h2>
              <p className="leading-relaxed">
                Обработка персональных данных осуществляется с использованием средств автоматизации и/или без использования таких средств. Обработка включает: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                Срок действия согласия
              </h2>
              <p className="leading-relaxed">
                Настоящее согласие действует до момента его отзыва путём направления письменного уведомления на адрес электронной почты <a href="mailto:info@finexspert24.ru" className="text-[#5A8A72] hover:underline">info@finexspert24.ru</a> или по почтовому адресу: г. Москва, Одинцово, ул. Садовая, д. 3Б, офис 809.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                Отзыв согласия
              </h2>
              <p className="leading-relaxed">
                Я понимаю, что могу отозвать своё согласие на обработку персональных данных в любой момент, направив письменное заявление Оператору. Отзыв согласия не влияет на законность обработки, основанной на согласии до его отзыва.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1a2a3a] mb-3">
                Подтверждение согласия
              </h2>
              <p className="leading-relaxed">
                Заполняя формы на сайте и нажимая кнопку отправки данных, я подтверждаю, что ознакомлен с настоящим согласием, <Link href="/privacy" className="text-[#5A8A72] hover:underline">Политикой конфиденциальности</Link>, и даю своё согласие на обработку персональных данных в соответствии с указанными условиями.
              </p>
            </section>

            <div className="bg-[#f8f9fa] rounded-lg p-4 sm:p-6 mt-6">
              <h3 className="font-semibold text-[#1a2a3a] mb-2">Контактная информация оператора</h3>
              <ul className="space-y-1 text-sm">
                <li><strong>Наименование:</strong> ООО «ФинЭксперт»</li>
                <li><strong>ИНН:</strong> 7807362241</li>
                <li><strong>ОГРН:</strong> 1117847326651</li>
                <li><strong>Адрес:</strong> г. Москва, Одинцово, ул. Садовая, д. 3Б, офис 809</li>
                <li><strong>Телефон:</strong> <a href="tel:+78129827090" className="text-[#5A8A72] hover:underline">+7 (812) 982-70-90</a></li>
                <li><strong>Email:</strong> <a href="mailto:info@finexspert24.ru" className="text-[#5A8A72] hover:underline">info@finexspert24.ru</a></li>
              </ul>
            </div>

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
