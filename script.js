let mainPageContent = null; // Переменная для хранения контента главной страницы

// Навигация между страницами
function navigateTo(section) {
    const content = document.getElementById("content");

    // Переключение на главную страницу
    if (section === "main") {
        if (!mainPageContent) {
            // Сохраняем контент главной страницы при первом посещении
            mainPageContent = `
                <section id="main">
                    <h1>ПРОФИСТЮАРД</h1>
                    <p class="highlight">Обеспечение безопасности при проведении массовых мероприятий</p>
                    <div class="slider">
                        <img id="sliderImage" src="стадион 1.jpg" alt="Слайд">
                    </div>
                    <div class="video">
                        <p>ПРОФИСТЮАРД</p>
                        <video controls>
                            <source src="главный.mp4" type="video/mp4">
                            Ваш браузер не поддерживает видео.
                        </video>
                    </div>
                    <div class="partners">
                        <h2 class="partners-title">Наши партнеры</h2>
                        <div class="partners-logos">
                            <a href="https://fakelfc.ru/" target="_blank">
                                <img src="факел.jpg" alt="Факел">
                            </a>
                            <a href="https://pfc-cska.com/" target="_blank">
                                <img src="цска.jpg" alt="ЦСКА">
                            </a>
                            <a href="https://fcdm.ru/" target="_blank">
                                <img src="динамо.jpg" alt="Динамо">
                            </a>
                            <a href="https://fc-orel.ru/" target="_blank">
                                <img src="орёл.jpg" alt="Орёл">
                            </a>
                            <a href="https://rfs.ru/" target="_blank">
                                <img src="рфс.jpg" alt="РФС">
                            </a>
                            <a href="https://fcmetallurg-lp.ru/" target="_blank">
                                <img src="липецк.jpg" alt="Липецк">
                            </a>
                        </div>
                    </div>
                </section>`;
        }

        content.innerHTML = mainPageContent; // Вставляем сохранённый контент
        setupSlider(); // Активируем слайдер
    }
    // Переключение на секцию "Обеспечение"
else if (section === "security") {
    content.innerHTML = `
        <section id="security">
            <h2>Обеспечение</h2>
            <div class="slider">
                <img id="sliderImage" src="стадион 1.jpg" alt="Слайд">
            </div>
            <p>
                ООО <b>Профистюард</b> - это команда передовых специалистов, предоставляющих
                высокое качество сервиса своих услуг уже более 10 лет. Сотрудники проходят обязательную
                специальную подготовку, которая разработана с учетом требований местного законодательства
                и специфики объектов с которыми мы работаем. В случае появления внештатной ситуации
                специалисты Профистюард готовы оперативно на нее среагировать, решив вопрос быстро
                и качественно. Наша основная задача — создание максимально комфортных условий для
                пришедших гостей мероприятия. Стюард — это лицо стадиона и матча, а также первый
                помощник болельщиков. Все сотрудники ООО <b>Профистюард</b> владеют навыками
                медицинской помощи, пожарной безопасности, проходят практические учения для отработки
                действий при чрезвычайных ситуациях и эвакуации зрителей.
            </p>
            <div class="photo-gallery">
                <div class="photo-item">
                    <a href="https://vk.com/@-214276041-obuchenie-kak-zapisatsya-i-proiti" target="_blank">
                        <img src="я1.jpg" alt="Обучиться">
                        <p>Обучиться</p>
                    </a>
                </div>
                <div class="photo-item">
                    <a href="https://vk.com/wall-214276041_297?w=wall-214276041_297" target="_blank">
                        <img src="я2.jpg" alt="Заявиться">
                        <p>Заявиться</p>
                    </a>
                </div>
                <div class="photo-item">
                    <a href="https://vk.com/wall-214276041_405?w=wall-214276041_405" target="_blank">
                        <img src="я3.jpg" alt="Реферальная">
                        <p>Реферальная</p>
                    </a>
                </div>
                <div class="photo-item">
                    <a href="https://vk.com/wall-214276041_357?w=wall-214276041_357" target="_blank">
                        <img src="я4.jpg" alt="Навигация">
                        <p>Навигация</p>
                    </a>
                </div>
            </div>
            <p>
                Оказываем комплекс услуг по обеспечению общественного порядка на массовых мероприятиях,
                проводимых в спортивных аренах, стадионах, а также развлекательных комплексах и концертных залах!
            </p>
            <p><b>Работали(ем) на площадках в Воронеже:</b></p>
            <ul>
                <li>📍 ЦСК, Стадион Труд</li>
                <li>📍 Стадион Локомотив</li>
                <li>📍 Стадион Чайка</li>
                <li>📍 СК Юбилейный</li>
                <li>📍 площадка у Сити-парка «Град» (Джимхана)</li>
            </ul>
            <p><b>В Москве:</b></p>
            <ul>
                <li>📍 ВЭБ Арена</li>
                <li>📍 Большая спортивная арена Олимпийского комплекса Лужники</li>
                <li>📍 ВТБ Арена</li>
            </ul>
            <p><b>В Волгограде:</b></p>
            <ul>
                <li>📍 Волгоград Арена</li>
            </ul>
            <div class="video-gallery">
                <div class="video-item">
                    <video controls>
                        <source src="суперфинал.mp4" type="video/mp4">
                        Ваш браузер не поддерживает видео.
                    </video>
                    <p>СуперФинал Кубка России: Зенит Балтика</p>
                </div>
                <div class="video-item">
                    <video controls>
                        <source src="суперкубок.mp4" type="video/mp4">
                        Ваш браузер не поддерживает видео.
                    </video>
                    <p>Суперкубок России: Краснодар Зенит</p>
                </div>
                <div class="video-item">
                    <video controls>
                        <source src="сборная.mp4" type="video/mp4">
                        Ваш браузер не поддерживает видео.
                    </video>
                    <p>Товарищеский матч: Россия Сербия</p>
                </div>
                <div class="video-item">
                    <video controls>
                        <source src="факел.mp4" type="video/mp4">
                        Ваш браузер не поддерживает видео.
                    </video>
                    <p>МИР РПЛ: Динамо Факел</p>
                </div>
            </div>
        </section>`;
}



    // Переключение на секцию "Специальная подготовка"
else if (section === "training") {
    content.innerHTML = `
        <section id="training">
            <h2><b>Специальная подготовка</b></h2>
            <p>Специальная подготовка контролеров-распорядителей осуществляется на основании договоров о делегировании прав с РФС, ФХР и ФХМР по программам, утверждённым данными общероссийскими спортивными федерациями.</p>
            <img src="обучение.jpg" alt="Обучение" style="display: block; margin: 20px auto;">
            <h3><b>Процедура прохождения специальной подготовки контролера-распорядителя компании «Профистюард»</b></h3>
            <p>
                Процедура прохождения специальной подготовки контролера-распорядителя компании «Профистюард»:
            </p>
            <ul>
                <li>анкетирование;</li>
                <li>личное собеседование;</li>
                <li>проведение проверки на отсутствие непогашенной судимости, действующего административного наказания по статье 20.31 КоАП РФ;</li>
                <li>стажировка на одном из мероприятий;</li>
                <li>теоретическая подготовка (лекции);</li>
                <li>практическая подготовка совместно с сотрудниками полиции на одном из объектов спорта;</li>
                <li>проведение итоговой аттестации;</li>
                <li>получение документа, подтверждающего прохождение специальной подготовки;</li>
                <li>получение удостоверения контролера-распорядителя.</li>
            </ul>
            <p>
                Процедура подготовки утверждена приказом Минспорта России от 13 апреля 2017 года № 346
                «Об утверждении порядка прохождения специальной подготовки физическими лицами, желающими осуществлять деятельность в качестве контролёров-распорядителей», подготовка проводится в соответствии с программами, соответствующими требованиям приказа от 30 октября 2014 г. № 998 «Об утверждении требований к содержанию программы специальной подготовки контролёров-распорядителей».
            </p>
            <div class="photo-gallery">
                <div class="photo-item">
                    <a href="https://vk.com/@-214276041-obuchenie-kak-zapisatsya-i-proiti" target="_blank">
                        <img src="я1.jpg" alt="Обучиться">
                        <p>Обучиться</p>
                    </a>
                </div>
                <div class="photo-item">
                    <a href="https://vk.com/wall-214276041_297?w=wall-214276041_297" target="_blank">
                        <img src="я2.jpg" alt="Заявиться">
                        <p>Заявиться</p>
                    </a>
                </div>
            </div>
        </section>`;
}

    // Переключение на секцию "Оборудование"
    else if (section === "equipment") {
        content.innerHTML = `
            <section id="equipment">
                <h2>Оборудование</h2>
                <p class="equipment-text">Компания предлагает средства связи:</p>
                <div class="equipment-item">
                    <img src="рация1.jpg" alt="Радиостанции">
                    <p>Радиостанции</p>
                </div>
                <div class="equipment-item">
                    <img src="гарнитура.jpg" alt="Гарнитуры">
                    <p>Гарнитуры</p>
                </div>
                <div class="equipment-item">
                    <img src="громкоговоритель.jpg" alt="Громкоговорители">
                    <p>Громкоговорители</p>
                </div>
                <div class="equipment-item">
                    <img src="металл.jpg" alt="Металлодетектор">
                    <p>Металлодетектор</p>
                </div>
            </section>`;
    }
    else {
        console.error('Unknown section');
    }
}

// Инициализация слайдера на главной странице
function setupSlider() {
    const sliderImages = ['стадион 1.jpg', 'стадион 2.jpg', 'стадион 3.jpg', 'стадион 4.jpg', 'стадион 5.jpg'];
    let currentIndex = 0;
    const sliderImageElement = document.getElementById('sliderImage');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % sliderImages.length;
        sliderImageElement.src = sliderImages[currentIndex];
    }, 3000); // Переключение каждые 3 секунды
}
