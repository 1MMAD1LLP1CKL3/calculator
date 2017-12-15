// JavaScript Document

// Change Display
function d(val) {
	"use strict";
	document.getElementById("d").value = val;
}

// Type nmbers and operators
function v(val) {
	"use strict";
	document.getElementById("d").value += val;
}

// Evaluate the equation
function e() {
	"use strict";
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("Error");
	}
}