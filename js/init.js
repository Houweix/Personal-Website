/*
	Directive by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			global:		{ range: '*', href: 'css/style.css', containers: '51em', grid: { gutters: 30 } },
			wide:		{ range: '-1680', href: 'css/style-wide.css' },
			normal:		{ range: '-1280', href: 'css/style-normal.css', containers: '48em' },
			mobile:		{ range: '-736', href: 'css/style-mobile.css', containers: '90%', grid: { gutters: 15 }, viewport: { scalable: false } },
			mobilep:	{ range: '-480', href: 'css/style-mobilep.css', containers: '100%', grid: { collapse: 2, gutters: 15 } }
		}
	});

})(jQuery);