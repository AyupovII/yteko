import { modals } from './modules/modals';
import { accordion } from './modules/accordion';
import { menu } from './modules/menu';
import { takeControlTabs } from './modules/tabs';
import { swiper } from './modules/swiper';
import { phoneMask } from './modules/phone-mask';
import { validateForms } from './modules/validate/validateForms';
import { yandexMap } from './modules/yandex-map'; 
import { videoController } from './modules/videoController';
import {inputFile} from './modules/input-file'; 
import { cookie } from "./modules/cookie";



// все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
// в load следует добавить скрипты, не участвующие в работе первого экрана

window.addEventListener('DOMContentLoaded', () => {
	// Utils
	// ---------------------------------

	// Modules
	// ---------------------------------

	window.addEventListener('load', () => {
		modals();
		accordion();
		menu();
		takeControlTabs();
		phoneMask();
		inputFile();
		validateForms();
		swiper();
		videoController();
		yandexMap();
		cookie();
	});
});

// ---------------------------------
// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// для адаптивного JS используется matchMedia
