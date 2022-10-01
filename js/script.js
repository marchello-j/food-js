import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import calc from './modules/calc';
import cards from './modules/cards';
import slider from './modules/slider';
import form from './modules/form';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
	const modalTimerId = setTimeout(
		() => openModal('.modal', modalTimerId),
		180000
	);
	tabs(
		'.tabheader__item',
		'.tabcontent',
		'.tabheader__items',
		'tabheader__item_active'
	);
	modal('[data-modal]', '.modal', modalTimerId);
	timer('.timer', '2022-10-02');
	calc();
	cards();
	slider({
		container: '.offer__slider',
		slide: '.offer__slide',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		totalCounter: '#total',
		carrentCounter: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner',
	});
	form('form', modalTimerId);
});
