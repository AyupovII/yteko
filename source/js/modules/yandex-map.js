export const yandexMap = () => {
	if (document.getElementById('yandex-map') !== null) {
			function init() {
					let map = new ymaps.Map('yandex-map', {
							center: [54.780153, 56.072265],
							zoom: 16,
							type: 'yandex#map',
							controls: [],
					});
					map.controls.add('zoomControl');

					map.behaviors.disable('scrollZoom');

					let placemark = new ymaps.Placemark([54.780153, 56.072265], {}, {
							iconLayout: 'default#image',
							iconImageHref: '/local/templates/yteko/assets/img/mark-icon.png',
							iconImageSize: [32, 43],
							iconImageOffset: [-15, -43],
					});
					map.geoObjects.add(placemark);
			}
			ymaps.ready(init);
	}
};