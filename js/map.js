let moscow = [55.75251764757979, 37.623144425933845];
let peter = [59.93986432055929, 30.314590557971915];

ymaps.ready(init);
function init(){
	// Создание карты.
	let map = new ymaps.Map('map', {
		center: moscow,
		zoom: 3,
	});

	let placemark1 = new ymaps.Placemark(moscow, {
        balloonContent: `
        <div class="balloon">
            <div class="ballon-adress">Город 1, улица 1/1</div>
            <div class="balloon-contancts">
                <a href="tel: +79999999999">+7 999 999-99-99</a>
            </div>
        </div>
        `
    }, {
			iconLayout: 'default#image',
			iconImageHref: '../images/location-pin.png',
			iconImageSize: [40, 50],
			iconImageOffset: [-20, -50],
		}
	);

    let placemark2 = new ymaps.Placemark(peter, {
        balloonContent: `
        <div class="balloon">
            <div class="ballon-adress">Город 2, улица 2/2</div>
            <div class="balloon-contancts">
                <a href="tel: +79999999999">+7 999 999-99-99</a>
            </div>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../images/location-pin.png',
        iconImageSize: [40, 50],
        iconImageOffset: [-20, -50],
    }
);

	// map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	// map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	// map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	map.geoObjects.add(placemark1);
	map.geoObjects.add(placemark2);
}


let contactItemBtn = document.querySelectorAll('.contact-item-btn');
const map = document.querySelector('.map-block');

contactItemBtn.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault();
        map.scrollIntoView({
            block: "center",
            behavior: "smooth"
        });
    })
});