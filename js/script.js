'use strict';

window.addEventListener('DOMContentLoaded', () => {
	const tabs = require('./modules/tabs'),
		modal = require('./modules/modal'),
		timer = require('./modules/timer'),
		calc = require('./modules/calc'),
		cards = require('./modules/cards'),
		slider = require('./modules/slider'),
		form = require('./modules/form');

	tabs();
	modal();
	timer();
	calc();
	cards();
	slider();
	form();
});
