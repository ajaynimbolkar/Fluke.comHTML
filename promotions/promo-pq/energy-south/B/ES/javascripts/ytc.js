/**
 * Copyright (c) 2014 Jelle Spekken, https://github.com/jspekken
 */

function yepToCrap() {

	'use strict';

	Array.prototype.contains = function(obj) {
		var i = this.length;
		while (i--) {
			if (this[i] === obj) {
				return true;
			}
		}
		return false;
	}

	var elements = document.getElementsByTagName('*'),
		element,
		classes = [];

	for (var i = 0; i < elements.length; i++) {
		element = elements[i];

		if (element.hasAttribute('data-ytc')) {
			var nodes = [];
			var e = element;

			while (e) {
				if (e.className) {
					nodes.unshift(e);
				}

				e = e.parentNode;
			}

			var name = '';
			for (var j = 0; j < nodes.length; j++) {
				name += '.' + nodes[j].className.split(' ').join('.') + ' ';
			}

			if (!classes.contains(name)) {
				classes.push(name);
			}
		}
	}

	var width = 0,
		lines = [];
	for (var i = 0; i < classes.length; i++) {
		width = document.querySelector(classes[i]).offsetWidth;
		lines.push(classes[i] + '{ width: ' + width + 'px; }');
	}

	return lines.join("\n");
}