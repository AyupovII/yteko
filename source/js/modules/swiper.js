import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation, Grid, Controller, EffectFade } from 'swiper/modules';

Swiper.use([Autoplay, Navigation, Pagination, Controller, EffectFade]);
export const swiper = () => {
	new Swiper('.swiper-main', {
		loop: true,
		autoplayDisableOnInteraction: false,
		slidesPerView: 1,
		autoplay: {
			delay: 6000,
		},
		pagination: {
			el: '.swiper-main-pagination',
			type: 'bullets',
			clickable: true,
			renderBullet(index, className) {
				return '<span class="' + className + '">' + '<em></em>' + '<i></i>' + '<b></b>' + '</span>';
			},
		},
	});
	new Swiper('.swiper-projects', {
		modules: [Autoplay, Pagination],
		loop: true,
		autoplayDisableOnInteraction: false,
		slidesPerView: 1,
		autoHeight: true,
		autoplay: {
			delay: 3000,
		},

	});
	new Swiper('.swiper-companies', {
		modules: [Autoplay, Pagination],
		loop: true,
		slidesOffsetAfter: 0,
		loopAddBlankSlides: false,
		slidesPerView: 1.5,
		slidesPerGroup: 2,
		updateOnWindowResize: false,
		spaceBetween: 10,
		autoplay: {
			delay: 3000,
		},

		breakpoints: {
			1280: {
				slidesPerView: 3.5,
				spaceBetween: 20,
			},

			768: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
		},

		pagination: {
			el: '.swiper-companies-pagination',
			type: 'bullets',
			clickable: true,
			renderBullet(index, className) {
				return '<span class="' + className + '">' + '<em></em>' + '<i></i>' + '<b></b>' + '</span>';
			},
		},
	});

	new Swiper('.swiper-certificates', {
		modules: [Autoplay, Pagination],
		loop: true,
		slidesPerView: 1.2,
		spaceBetween: 5,
		breakpoints: {
			1280: {
				slidesPerView: 4,
				spaceBetween: 20,
			},

			1024: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			400: {
				slidesPerView: 2,
			},
		},
		autoplay: {
			delay: 3000,
		},

		pagination: {
			el: '.swiper-certificates-pagination',
			type: 'bullets',
			clickable: true,
			renderBullet(index, className) {
				return '<span class="' + className + '">' + '<em></em>' + '<i></i>' + '<b></b>' + '</span>';
			},
		},
	});
	new Swiper('.swiper-images', {
		modules: [Autoplay, Pagination],
		loop: true,
		slidesPerView: 1,
		autoplay: {
			delay: 3000,
		},

		pagination: {
			el: '.swiper-images-pagination',
			type: 'bullets',
			clickable: true,
			renderBullet(index, className) {
				return '<span class="' + className + '">' + '<em></em>' + '<i></i>' + '<b></b>' + '</span>';
			},
		},
	});

	const swiperDocuments = document.querySelector('.swiper-documents');
	const swiperDocumentsSlides = document.querySelectorAll('.documents__slide');

	const checkSlidesWidth = () => {
		if (!swiperDocuments) return
		const SLIDE_WIDTH = 225
		const slidesCount = swiperDocumentsSlides.length
		const allSlidesWidth = SLIDE_WIDTH * slidesCount
		const sliderContainerWidth = swiperDocuments.closest('.accordion_hidden-wrap').offsetWidth
		return allSlidesWidth > sliderContainerWidth
	};

	new Swiper(swiperDocuments, {
		modules: [Autoplay, Pagination],
		slidesPerView: 'auto',
		loop: false,
		spaceBetween: 5,
		autoHeight: true,
		watchOverflow: true,
		breakpoints: {
			1280: {
				spaceBetween: 20,
			},
			768: {
				spaceBetween: 10,
			},
		},
		autoplay: {
			delay: 3000,
		},
		pagination: {
			enabled: checkSlidesWidth(),
			el: '.swiper-documents-pagination',
			type: 'bullets',
			clickable: true,
			renderBullet(index, className) {
				return '<span class="' + className + '">' + '<em>' + '</em>' + '<i></i>' + '<b></b>' + '</span>';
			},
		},
	});

	let swiperMap = null;
	const initSwiperRegion = () => {
		const slider = document.querySelector('.swiper-region');

		if (slider && !slider.getAttribute('inited')) {
			swiperMap = new Swiper(slider, {
				modules: [Autoplay, Pagination],
				loop: true,
				slidesPerView: 1,
				allowTouchMove: false,
				effect: 'fade',
			});
			slider.setAttribute('inited', true);
		}
	};

	initSwiperRegion();
	const map = document.querySelector('.region__map');
	if (map) {
		const main = document.querySelector('main');
		main.addEventListener('click', (evt) => {
			if (evt.target.classList.contains('region__point')) {
				initSwiperRegion();
				const mapPoint = evt.target;
				swiperMap.slideTo(parseInt(mapPoint.id.match(/\d+/)));
			}
		});
	}
	// Add a click event listener to the specific path element

	const swiperCompletedWork = new Swiper('.swiper-completed-work', {
		modules: [Autoplay, Navigation],
		loop: true,
		slidesPerView: 1,
		autoplay: {
			delay: 33000,
		},
		navigation: {
			nextEl: '.swiper-completed-work-next',
			prevEl: '.swiper-completed-work-prev',
		},
	});

	const swiperCompletedWorkImg = new Swiper('.swiper-completed-work-img', {
		modules: [Autoplay, Navigation],
		loop: true,
		slidesPerView: 1
	});

	swiperCompletedWork.controller.control = swiperCompletedWorkImg;
	swiperCompletedWorkImg.controller.control = swiperCompletedWork;

	const swipePhotoList = new Swiper('.swiper-photo-list', {
		modules: [Autoplay, Pagination, Navigation, Grid],
		loop: true,
		slidesPerView: 2,
		spaceBetween: 10,
		allowTouchMove: false,
		effect: 'coverflow',
		watchSlidesProgress: true,
	});
	const swiperTest = new Swiper('.swiper-full-info', {
		modules: [Autoplay, Pagination, Navigation, Controller],
		loop: true,
		slidesPerView: 1,
		spaceBetween: 10,
		watchSlidesProgress: true,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-benefits-next',
			prevEl: '.swiper-benefits-prev',
		},
		autoplay: {
			delay: 3000,
		},
		thumbs: {
			swiper: swipePhotoList,
		},
	});
	swipePhotoList.controller.control = swiperTest;
	swiperTest.controller.control = swipePhotoList;
};
