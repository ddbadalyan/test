export type Locale = "hy" | "ru" | "en";

export const languageMeta: Record<Locale, { label: string; short: string }> = {
  hy: { label: "Հայերեն", short: "ՀՅ" },
  ru: { label: "Русский", short: "РУ" },
  en: { label: "English", short: "EN" }
};

export const copy = {
  hy: {
    nav: { capabilities: "Հնարավորություններ", experience: "Փորձառություն", work: "Նմուշներ", contact: "Կապ", book: "Պատվիրել կայք" },
    ui: { light: "Բաց թեմա", dark: "Մուգ թեմա", menu: "Բացել ընտրացանկը", close: "Փակել", next: "Հաջորդը", previous: "Նախորդը", open: "Բացել", sent: "Հարցումն ուղարկված է" },
    system: { live: "ԿԵՆԴԱՆԻ", delight: "Տպավորություն", motionSystem: "ՇԱՐԺՄԱՆ ՀԱՄԱԿԱՐԳ", active: "ԱԿՏԻՎ", liveReaction: "ԿԵՆԴԱՆԻ ԱՐՁԱԳԱՆՔ", loader: "ՏՊԱՎՈՐՈՒԹՅՈՒՆ ԵՆՔ ՍՏԵՂԾՈՒՄ", footer: "Թվային փորձառություններ", backTop: "Դեպի վեր" },
    hero: {
      eyebrow: "ԴԻՋԻԹԱԼ ՓՈՐՁԱՌՈՒԹՅՈՒՆ, ՈՐԸ ՀԻՇՈՒՄ ԵՆ",
      titleA: "Ձեր բիզնեսը կարող է",
      titleB: "այսպես երևալ",
      description: "Ժամանակակից դիզայն, սահուն անիմացիաներ, ինտերակտիվ տարրեր և պրեմիում օգտատիրական փորձ՝ ցանկացած բիզնեսի համար։",
      primary: "Պատվիրել կայք",
      secondary: "Տեսնել հնարավորությունները",
      proof: "ԱՐԴԵՆ ՊԱՏՐԱՍՏ Է ՏՊԱՎՈՐԵԼ",
      phrase: "Այստեղ կարող է լինել ձեր բիզնեսը",
      live: "Կենդանի ինտերֆեյս",
      available: "Բաց համագործակցության համար",
      score: "Փորձառության գնահատական"
    },
    stats: [
      { value: "01", label: "յուրահատուկ տպավորություն" },
      { value: "∞", label: "աճի հնարավորություններ" },
      { value: "60fps", label: "սահուն շարժում" },
      { value: "3 լեզու", label: "մեկ հարթակում" }
    ],
    features: {
      eyebrow: "ՀՆԱՐԱՎՈՐՈՒԹՅՈՒՆՆԵՐ",
      title: "Մի կայք։ Բազմաթիվ ուղիներ՝ առաջ անցնելու։",
      text: "Յուրաքանչյուր բլոկ կարելի է հարմարեցնել ձեր ոլորտի, նպատակների և հաճախորդների իրական վարքագծի համար։",
      badge: "Թվային էկոհամակարգ",
      items: ["Անիմացիաներ", "Խելացի ձևեր", "Առցանց ամրագրում", "Ինտերնետ-խանութ", "Ապրանքների կատալոգ", "Անձնական կաբինետ", "Ինտեգրումներ", "Ինտերակտիվ քարտեզներ", "Անալիտիկա", "Բազմալեզու միջավայր"],
      miniTitle: "Կարողությունների քարտեզ",
      miniText: "Հիանալի փորձ՝ առաջին pixel-ից մինչև կրկնվող վաճառք"
    },
    motion: {
      eyebrow: "ՇԱՐԺՈՒՄ, ՈՐՆ ՈՒՆԻ ՆՊԱՏԱԿ",
      title: "Յուրաքանչյուր շարժում պատմում է ձեր պատմությունը։",
      text: "Անիմացիան այստեղ պարզապես դեկոր չէ։ Այն ուղղորդում է ուշադրությունը, արձագանքում գործողություններին և ստեղծում վստահություն։",
      timeline: ["Մտնել ուշադրության դաշտ", "Բացահայտել արժեքը", "Ընտրել գործողությունը"],
      cardA: "Հարթ անցումներ", cardB: "Կենդանի արձագանք", cardC: "Կերպարով մանրուքներ",
      phrase: "Այստեղ կարող է լինել ձեր ստարտափը"
    },
    interactive: {
      eyebrow: "ԻՆՏԵՐԱԿՏԻՎ ԼԱԲՈՐԱՏՈՐԻԱ",
      title: "Դիպչեք, շարժեք, զգացեք խորությունը։",
      text: "Կուրսորի արձագանք, մագնիսական կոճակներ, 3D թեքումներ, պարալաքս և լողացող առարկաներ՝ վերահսկված, արագ և չծանրաբեռնող։",
      pointer: "Կուրսորի արձագանք", floating: "Լողացող առարկաներ", depth: "3D խորություն", particles: "Նուրբ մասնիկներ",
      pulse: "Ինտերֆեյսը շնչում է", phrase: "Այստեղ կարող է լինել ձեր սերվիսը"
    },
    work: {
      eyebrow: "ՎԻԶՈՒԱԼ ԿՈՆՑԵՊՏՆԵՐ",
      title: "Ձեր գաղափարը կարող է ունենալ իր սեփական տեսարանը։",
      text: "Ահա թե ինչպես նույն տեխնոլոգիան կարող է դառնալ բրենդի, խանութի, ծառայության կամ նոր արտադրանքի բացառիկ լեզու։",
      items: [
        { label: "RETAIL / 01", title: "Այստեղ կարող է լինել ձեր խանութը" },
        { label: "BRAND / 02", title: "Այստեղ կարող է լինել ձեր բրենդը" },
        { label: "SERVICE / 03", title: "Այստեղ կարող է լինել ձեր ծառայությունը" },
        { label: "COMPANY / 04", title: "Այստեղ կարող է լինել ձեր ընկերությունը" }
      ]
    },
    cases: {
      eyebrow: "ԿԵՅՍԵՐԻ ՍՑԵՆԱՐՆԵՐ",
      title: "Հստակ սցենարներ՝ տարբեր նպատակների համար։",
      text: "Դեմո-կոնցեպտներ, որոնք ցույց են տալիս ոճի լայնությունը՝ նուրբ premium-ից մինչև համարձակ digital-first։",
      items: [
        { type: "BEAUTY / COMMERCE", title: "Մթնոլորտ, որը վերածվում է վաճառքի", metric: "+42%", metricLabel: "ավելի երկար այց" },
        { type: "B2B / PRODUCT", title: "Բարդ ծառայությունը՝ պարզ փորձառության մեջ", metric: "3.2×", metricLabel: "ավելի շատ հարցումներ" },
        { type: "HOSPITALITY / BOOKING", title: "Ամրագրում, որը թվում է բնական", metric: "24/7", metricLabel: "մատչելիություն" }
      ]
    },
    testimonials: {
      eyebrow: "ՏՊԱՎՈՐՈՒԹՅՈՒՆՆԵՐ",
      title: "Այն զգացողությունը, որ ուզում եք թողնել հաճախորդի մոտ։",
      items: [
        { quote: "«Այցելուն նույնիսկ մինչև առաջարկը կարդալը հասկանում է, որ սա բարձր մակարդակի բրենդ է»։", name: "Անահիտ Մ.", role: "Բրենդի ղեկավար / դեմո կարծիք" },
        { quote: "«Կայքը միաժամանակ շատ համարձակ է և զարմանալիորեն հեշտ օգտագործելի։ Հենց այդպիսի հավասարակշռություն էինք փնտրում»։", name: "Դավիթ Ա.", role: "Հիմնադիր / դեմո կարծիք" },
        { quote: "«Թվային ներկայություն, որը ոչ թե պարզապես լավ տեսք ունի, այլ ստիպում է վստահել»։", name: "Մարիամ Հ.", role: "Մարքեթինգի տնօրեն / դեմո կարծիք" }
      ]
    },
    faq: {
      eyebrow: "ՀԱՐՑԵՐ ԵՎ ՊԱՏԱՍԽԱՆՆԵՐ",
      title: "Ո՞րն է ձեր հաջորդ մեծ թվային քայլը։",
      items: [
        { q: "Կարո՞ղ է այս ոճը հարմարեցվել իմ բիզնեսին։", a: "Այո։ Դիզայնի լեզուն, կառուցվածքը, տոնայնությունը և գործառույթները կառուցվում են ձեր կոնկրետ բիզնես մոդելի շուրջ։" },
        { q: "Կայքը աշխատո՞ւմ է հեռախոսներում։", a: "Այո։ Փորձառությունը սկզբից նախագծվում է փոքր էկրանների համար, հետո ընդլայնվում է դեպի մեծերը՝ առանց որակի կորստի։" },
        { q: "Կարո՞ղ ենք ավելացնել վաճառք, ամրագրում կամ ինտեգրումներ։", a: "Այո։ Կայքը կարող է դառնալ խանութ, ամրագրման հարթակ, ծառայությունների կատալոգ կամ կապվել ձեր նախընտրած համակարգերի հետ։" },
        { q: "Իսկ արագությո՞ւնը։", a: "Անիմացիաները կառուցվում են փոխակերպումների և թափանցիկության վրա, պատկերները՝ ուշ բեռնմամբ, իսկ դեկորները նվազեցվում են touch ու reduced-motion ռեժիմներում։" }
      ]
    },
    contact: {
      eyebrow: "ԵԿԵՔ ՍՏԵՂԾԵՆՔ",
      title: "Սկսենք մի էջից, որից հնարավոր չէ անցնել հանգիստ։",
      text: "Կիսվեք գաղափարով․ մենք կվերադարձնենք այն հնարավոր կայքի առաջին տեսարանով։",
      name: "Անուն", email: "Էլ. փոստ", project: "Ի՞նչ եք ցանկանում ստեղծել", placeholderName: "Ձեր անունը", placeholderEmail: "you@company.com", placeholderProject: "Մի քանի բառ ձեր գաղափարի մասին", send: "Ուղարկել գաղափարը", helper: "Պատասխանը հասնում է 1 աշխատանքային օրվա ընթացքում", success: "Հիանալի է։ Ձեր գաղափարը արդեն ճանապարհին է։"
    },
    cta: { eyebrow: "ՀԱՋՈՐԴ ՔԱՅԼ", titleA: "Այստեղ կարող է լինել", titleB: "ձեր բիզնեսը։", text: "Առաջին տպավորությունը պետք չէ թողնել պատահականությանը։", action: "Ստեղծենք սա միասին", email: "Գրել մեզ" },
    modal: { eyebrow: "ՆԱԽԱԳԾԻ ՍԿԻԶԲ", title: "Պատմեք ձեր հաջորդ մեծ գաղափարի մասին։", text: "Ընտրեք հարմար պահը կամ անմիջապես ուղարկեք մի քանի տող։", slotA: "Երկուշաբթի · 11:00", slotB: "Չորեքշաբթի · 15:30", slotC: "Ուրբաթ · 12:00", continue: "Շարունակել կապի ձևին" }
  },
  ru: {
    nav: { capabilities: "Возможности", experience: "Опыт", work: "Работы", contact: "Контакты", book: "Заказать сайт" },
    ui: { light: "Светлая тема", dark: "Тёмная тема", menu: "Открыть меню", close: "Закрыть", next: "Следующий", previous: "Предыдущий", open: "Открыть", sent: "Заявка отправлена" },
    system: { live: "В ЭФИРЕ", delight: "Впечатление", motionSystem: "СИСТЕМА ДВИЖЕНИЯ", active: "АКТИВНА", liveReaction: "ЖИВАЯ РЕАКЦИЯ", loader: "СОЗДАЁМ ВПЕЧАТЛЕНИЕ", footer: "Цифровые впечатления", backTop: "Наверх" },
    hero: { eyebrow: "ЦИФРОВОЙ ОПЫТ, КОТОРЫЙ ЗАПОМИНАЮТ", titleA: "Ваш бизнес может", titleB: "выглядеть так", description: "Современный дизайн, плавные анимации, интерактивные элементы и премиальный пользовательский опыт для любого бизнеса.", primary: "Заказать сайт", secondary: "Посмотреть возможности", proof: "ГОТОВ ВПЕЧАТЛЯТЬ", phrase: "Здесь может быть ваш бизнес", live: "Живой интерфейс", available: "Открыты к сотрудничеству", score: "Оценка опыта" },
    stats: [{ value: "01", label: "уникальное впечатление" }, { value: "∞", label: "возможностей роста" }, { value: "60fps", label: "плавное движение" }, { value: "3 языка", label: "на одной платформе" }],
    features: { eyebrow: "ВОЗМОЖНОСТИ", title: "Один сайт. Множество способов быть впереди.", text: "Каждый блок адаптируется под вашу сферу, цели и реальное поведение клиентов.", badge: "Цифровая экосистема", items: ["Анимации", "Умные формы", "Онлайн-запись", "Интернет-магазин", "Каталог товаров", "Личный кабинет", "Интеграции", "Интерактивные карты", "Аналитика", "Мультиязычная среда"], miniTitle: "Карта возможностей", miniText: "Безупречный опыт: от первого пикселя до повторной продажи" },
    motion: { eyebrow: "ДВИЖЕНИЕ СО СМЫСЛОМ", title: "Каждое движение рассказывает вашу историю.", text: "Анимация здесь — не просто декор. Она направляет внимание, отвечает на действия и создаёт доверие.", timeline: ["Попасть в поле внимания", "Раскрыть ценность", "Выбрать действие"], cardA: "Плавные переходы", cardB: "Живой отклик", cardC: "Детали с характером", phrase: "Здесь может быть ваш стартап" },
    interactive: { eyebrow: "ИНТЕРАКТИВНАЯ ЛАБОРАТОРИЯ", title: "Коснитесь, двигайте, почувствуйте глубину.", text: "Реакция на курсор, магнитные кнопки, 3D-наклоны, параллакс и плавающие объекты — контролируемо, быстро и без перегруза.", pointer: "Реакция на курсор", floating: "Плавающие объекты", depth: "3D-глубина", particles: "Деликатные частицы", pulse: "Интерфейс дышит", phrase: "Здесь может быть ваш сервис" },
    work: { eyebrow: "ВИЗУАЛЬНЫЕ КОНЦЕПТЫ", title: "У вашей идеи может быть собственная сцена.", text: "Так одна технология превращается в уникальный язык бренда, магазина, сервиса или нового продукта.", items: [{ label: "RETAIL / 01", title: "Здесь может быть ваш магазин" }, { label: "BRAND / 02", title: "Здесь может быть ваш бренд" }, { label: "SERVICE / 03", title: "Здесь может быть ваш сервис" }, { label: "COMPANY / 04", title: "Здесь может быть ваша компания" }] },
    cases: { eyebrow: "СЦЕНАРИИ КЕЙСОВ", title: "Точные сценарии для разных целей.", text: "Демо-концепты показывают ширину стиля — от деликатного premium до смелого digital-first.", items: [{ type: "BEAUTY / COMMERCE", title: "Атмосфера, которая превращается в продажи", metric: "+42%", metricLabel: "дольше визит" }, { type: "B2B / PRODUCT", title: "Сложный сервис — в простой опыт", metric: "3.2×", metricLabel: "больше заявок" }, { type: "HOSPITALITY / BOOKING", title: "Бронирование, которое кажется естественным", metric: "24/7", metricLabel: "доступность" }] },
    testimonials: { eyebrow: "ВПЕЧАТЛЕНИЯ", title: "То чувство, которое вы хотите оставить клиенту.", items: [{ quote: "«Посетитель ещё не прочитал предложение, но уже понимает: перед ним бренд высокого уровня».", name: "Анаит М.", role: "Руководитель бренда / демо-отзыв" }, { quote: "«Сайт одновременно смелый и удивительно простой. Именно такой баланс мы искали».", name: "Давид А.", role: "Основатель / демо-отзыв" }, { quote: "«Цифровое присутствие, которое не просто хорошо выглядит, а вызывает доверие».", name: "Мариам А.", role: "Директор по маркетингу / демо-отзыв" }] },
    faq: { eyebrow: "ВОПРОСЫ И ОТВЕТЫ", title: "Какой будет ваш следующий большой цифровой шаг?", items: [{ q: "Можно адаптировать этот стиль под мой бизнес?", a: "Да. Язык дизайна, структура, тональность и функции строятся вокруг вашей конкретной модели бизнеса." }, { q: "Сайт будет работать на телефонах?", a: "Да. Опыт сначала проектируется для маленьких экранов, а затем масштабируется на большие без потери качества." }, { q: "Можно добавить продажи, запись или интеграции?", a: "Да. Сайт может стать магазином, платформой бронирования, каталогом услуг или связаться с нужными системами." }, { q: "А что со скоростью?", a: "Анимации основаны на transform и opacity, изображения загружаются отложенно, а декор сокращается на touch-устройствах и при reduced motion." }] },
    contact: { eyebrow: "ДАВАЙТЕ СОЗДАВАТЬ", title: "Начнём со страницы, мимо которой невозможно пройти спокойно.", text: "Поделитесь идеей — мы вернёмся с первым кадром возможного сайта.", name: "Имя", email: "Эл. почта", project: "Что хотите создать", placeholderName: "Ваше имя", placeholderEmail: "you@company.com", placeholderProject: "Пара слов о вашей идее", send: "Отправить идею", helper: "Ответим в течение 1 рабочего дня", success: "Отлично. Ваша идея уже в пути." },
    cta: { eyebrow: "СЛЕДУЮЩИЙ ШАГ", titleA: "Здесь может быть", titleB: "ваш бизнес.", text: "Первое впечатление не стоит оставлять случаю.", action: "Создадим это вместе", email: "Написать нам" },
    modal: { eyebrow: "СТАРТ ПРОЕКТА", title: "Расскажите о вашей следующей большой идее.", text: "Выберите удобное время или сразу отправьте несколько строк.", slotA: "Понедельник · 11:00", slotB: "Среда · 15:30", slotC: "Пятница · 12:00", continue: "Перейти к форме связи" }
  },
  en: {
    nav: { capabilities: "Capabilities", experience: "Experience", work: "Work", contact: "Contact", book: "Start a project" },
    ui: { light: "Light theme", dark: "Dark theme", menu: "Open menu", close: "Close", next: "Next", previous: "Previous", open: "Open", sent: "Request sent" },
    system: { live: "LIVE", delight: "Delight", motionSystem: "MOTION SYSTEM", active: "ACTIVE", liveReaction: "LIVE REACTION", loader: "MAKING AN IMPRESSION", footer: "Digital experiences", backTop: "Back to top" },
    hero: { eyebrow: "DIGITAL EXPERIENCES PEOPLE REMEMBER", titleA: "Your business can", titleB: "look like this", description: "Modern design, fluid motion, interactive details and a premium user experience for any kind of business.", primary: "Start a project", secondary: "Explore possibilities", proof: "READY TO IMPRESS", phrase: "Your business could be here", live: "Live interface", available: "Open for collaboration", score: "Experience score" },
    stats: [{ value: "01", label: "unforgettable impression" }, { value: "∞", label: "ways to grow" }, { value: "60fps", label: "fluid motion" }, { value: "3 languages", label: "one platform" }],
    features: { eyebrow: "CAPABILITIES", title: "One site. Many ways to move ahead.", text: "Every block adapts to your industry, goals and the real behaviour of your customers.", badge: "Digital ecosystem", items: ["Motion design", "Smart forms", "Online booking", "E-commerce", "Product catalogue", "Client portal", "Integrations", "Interactive maps", "Analytics", "Multilingual experience"], miniTitle: "Capability map", miniText: "A considered experience from the first pixel to a repeat sale" },
    motion: { eyebrow: "MOTION WITH PURPOSE", title: "Every movement tells your story.", text: "Animation is not decoration here. It guides attention, responds to intent and builds confidence.", timeline: ["Enter the attention field", "Reveal the value", "Choose an action"], cardA: "Seamless transitions", cardB: "A living response", cardC: "Details with character", phrase: "Your startup could be here" },
    interactive: { eyebrow: "INTERACTIVE LAB", title: "Touch, move, feel the depth.", text: "Cursor response, magnetic buttons, 3D tilts, parallax and floating objects — controlled, quick and never overwhelming.", pointer: "Cursor response", floating: "Floating objects", depth: "3D depth", particles: "Subtle particles", pulse: "The interface breathes", phrase: "Your service could be here" },
    work: { eyebrow: "VISUAL CONCEPTS", title: "Your idea can have a scene of its own.", text: "See how one technology becomes the distinct language of a brand, shop, service or new product.", items: [{ label: "RETAIL / 01", title: "Your shop could be here" }, { label: "BRAND / 02", title: "Your brand could be here" }, { label: "SERVICE / 03", title: "Your service could be here" }, { label: "COMPANY / 04", title: "Your company could be here" }] },
    cases: { eyebrow: "CASE SCENARIOS", title: "Precise scenarios for different ambitions.", text: "Demo concepts that show stylistic range, from quiet premium to audacious digital-first.", items: [{ type: "BEAUTY / COMMERCE", title: "An atmosphere that turns into sales", metric: "+42%", metricLabel: "longer visit" }, { type: "B2B / PRODUCT", title: "A complex service, made effortless", metric: "3.2×", metricLabel: "more requests" }, { type: "HOSPITALITY / BOOKING", title: "Booking that feels natural", metric: "24/7", metricLabel: "availability" }] },
    testimonials: { eyebrow: "IMPRESSIONS", title: "The feeling you want to leave with a customer.", items: [{ quote: "“Before they read the offer, visitors already know this is a high-calibre brand.”", name: "Anahit M.", role: "Brand lead / demo testimonial" }, { quote: "“It is bold and remarkably effortless at the same time. That is the balance we were after.”", name: "David A.", role: "Founder / demo testimonial" }, { quote: "“A digital presence that does not only look good — it makes people trust you.”", name: "Mariam H.", role: "Marketing director / demo testimonial" }] },
    faq: { eyebrow: "QUESTIONS, ANSWERED", title: "What will your next big digital move be?", items: [{ q: "Can this look be tailored to my business?", a: "Absolutely. The visual language, structure, tone and functionality are shaped around your particular business model." }, { q: "Will it work on phones?", a: "Yes. The experience is designed for small screens first, then expanded gracefully for larger ones." }, { q: "Can we add sales, booking or integrations?", a: "Yes. The site can become a store, booking platform, service catalogue or connect to the systems you rely on." }, { q: "What about speed?", a: "Motion relies on transforms and opacity, imagery is lazy-loaded, and decorative effects reduce on touch devices and reduced-motion settings." }] },
    contact: { eyebrow: "LET'S CREATE", title: "Let’s begin with a page people cannot quietly scroll past.", text: "Share an idea — we will return with the first frame of the site it could become.", name: "Name", email: "Email", project: "What would you like to create?", placeholderName: "Your name", placeholderEmail: "you@company.com", placeholderProject: "A few words about your idea", send: "Send the idea", helper: "We reply within one working day", success: "Lovely. Your idea is already on its way." },
    cta: { eyebrow: "THE NEXT MOVE", titleA: "Your business", titleB: "could be here.", text: "Your first impression is too important to leave to chance.", action: "Let’s build it together", email: "Email us" },
    modal: { eyebrow: "PROJECT KICK-OFF", title: "Tell us about your next big idea.", text: "Choose a comfortable time or simply send a few lines now.", slotA: "Monday · 11:00", slotB: "Wednesday · 15:30", slotC: "Friday · 12:00", continue: "Continue to contact form" }
  }
} as const;

export type Copy = (typeof copy)[Locale];
