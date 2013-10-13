/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-html5' : '&#xe000;',
			'icon-css3' : '&#xe001;',
			'icon-chrome' : '&#xe002;',
			'icon-firefox' : '&#xe003;',
			'icon-IE' : '&#xe004;',
			'icon-opera' : '&#xe005;',
			'icon-safari' : '&#xe006;',
			'icon-twitter' : '&#xe007;',
			'icon-tux' : '&#xe008;',
			'icon-linkedin' : '&#xe009;',
			'icon-skype' : '&#xe00a;',
			'icon-github' : '&#xe00b;',
			'icon-feed' : '&#xe00c;',
			'icon-spam' : '&#xe00d;',
			'icon-warning' : '&#xe00e;',
			'icon-info' : '&#xe00f;',
			'icon-new-tab' : '&#xe010;',
			'icon-menu' : '&#xe011;',
			'icon-screen' : '&#xe012;',
			'icon-mobile' : '&#xe013;',
			'icon-tablet' : '&#xe014;',
			'icon-mail' : '&#xe015;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};