// "use strict";
var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	}, BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	}, iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	}, Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	}, Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	}, any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
// var x, i, j, l, ll, selElmnt, a, b, c;
// x = document.getElementsByClassName("form__select");
// l = x.length;
// for (i = 0; i < l; i++) {
// 	selElmnt = x[i].getElementsByTagName("select")[0];
// 	ll = selElmnt.length;
// 	a = document.createElement("DIV");
// 	a.setAttribute("class", "select-selected");
// 	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
// 	x[i].appendChild(a);
// 	b = document.createElement("DIV");
// 	b.setAttribute("class", "select-items select-hide");
// 	for (j = 1; j < ll; j++) {
// 		c = document.createElement("DIV");
// 		c.setAttribute("class", "select-item");
// 		c.innerHTML = selElmnt.options[j].innerHTML;
// 		c.addEventListener("click", function (e) {
// 			var y, i, k, s, h, sl, yl;
// 			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
// 			sl = s.length;
// 			h = this.parentNode.previousSibling;
// 			for (i = 0; i < sl; i++) {
// 				if (s.options[i].innerHTML === this.innerHTML) {
// 					s.selectedIndex = i;
// 					h.innerHTML = this.innerHTML;
// 					y = this.parentNode.getElementsByClassName("same-as-selected");
// 					yl = y.length;
// 					for (k = 0; k < yl; k++) {
// 						y[k].removeAttribute("class");
// 					}
// 					this.setAttribute("class", "same-as-selected");
// 					break;
// 				}
// 			}
// 			h.click();
// 		});
// 		b.appendChild(c);
// 	}
// 	x[i].appendChild(b);
// 	a.addEventListener("click", function (e) {
// 		e.stopPropagation();
// 		closeAllSelect(this);
// 		this.nextSibling.classList.toggle("select-hide");
// 		this.classList.toggle("_active");
// 	});
// }
// for (var jp = 0; jp < document.getElementsByClassName("select-selected").length; jp++) {
// 	document.getElementsByClassName("select-selected")
// 		[jp].addEventListener("click", function () {
// 		this.parentNode.classList.toggle("_active");
// 	});
// }
//
// function closeAllSelect(elmnt) {
// 	var x,
// 		y,
// 		i,
// 		xl,
// 		yl,
// 		arrNo = [];
// 	x = document.getElementsByClassName("select-items");
// 	y = document.getElementsByClassName("select-selected");
// 	xl = x.length;
// 	yl = y.length;
// 	for (i = 0; i < yl; i++) {
// 		if (elmnt === y[i]) {
// 			arrNo.push(i);
// 		} else {
// 			y[i].classList.remove("_active");
// 		}
// 	}
// 	for (i = 0; i < xl; i++) {
// 		if (arrNo.indexOf(i)) {
// 			x[i].classList.add("select-hide");
// 		}
// 	}
// }
//
// document.addEventListener("click", closeAllSelect);
//
// document.onclick = document_click;
//
// function document_click(e) {
// 	let it = document.querySelectorAll('.form__select');
// 	it.forEach((item) => {
// 		item.classList.remove('_active');
// 	})
// }


// let total = document.getElementById('total');
// let diameter = document.getElementById('diameter');
// let diameterTwo = document.getElementById('diameterTwo');
// let length = document.getElementById('length');
//
// let sale = 10;
// let type = diameter.value;
// let argumentOne = diameterTwo.value;
// let argumentTwo = length.value;
//
// let num = 1750;
// let num2 = 1650;
//
// console.log(type);
// diameter.addEventListener('change', function () {
// 	if (type === 1) {
// 		console.log('1');
// 	} else if (type === 2) {
// 		console.log('2');
// 	}
// });
//
//
// let proc = sale * num / 100
// let sum = num - proc;
// total.value = sum + ' ₽';
//
// let saleNum = document.querySelector('.form__sale');
// saleNum.innerHTML = num + ' ₽';



const data = {
	73: {
		200: {1500: 1450, 2000: 1650, 2500: 2000, 3000: 2150, 3500: 2350, 4000: 2600},
		250: {1500: 1550, 2000: 1750, 2500: 2100, 3000: 2250, 3500: 2450, 4000: 2700},
		300: {1500: 1650, 2000: 1850, 2500: 2200, 3000: 2350, 3500: 2550, 4000: 2800},
		350: {1500: 1750, 2000: 1950, 2500: 2300, 3000: 2450, 3500: 2650, 4000: 2900}
	},
	89: {
		200: {1500: 1550, 2000: 1900, 2500: 2250, 3000: 2600, 3500: 2900, 4000: 3350},
		250: {1500: 1650, 2000: 2000, 2500: 2350, 3000: 2650, 3500: 2950, 4000: 3400},
		300: {1500: 1750, 2000: 2100, 2500: 2450, 3000: 2800, 3500: 3100, 4000: 3500},
		350: {1500: 1850, 2000: 2200, 2500: 2550, 3000: 2850, 3500: 3150, 4000: 3600}
	}
};

let sale = 10;

let diameter = document.getElementById("diameter");
let diameterTwo = document.getElementById("diameterTwo");
let length = document.getElementById("length");
let total = document.getElementById("total");
let saleNum = document.querySelector(".form__sale");
let show = document.getElementById("show");

let pipeDiameter = document.getElementById('pipe-diameter')
let bladeDiameter = document.getElementById('blade-diameter')
let pipeLength = document.getElementById('pipe-length')

function calc() {
	show.innerHTML = diameter.value;
	let sum = data[diameter.value][diameterTwo.value][length.value];
	saleNum.innerHTML = sum + " ₽";
	total.value = sum - (sum / 100 * sale) + " ₽";

	pipeDiameter.value = diameter.value + ' мм'
	bladeDiameter.value = diameterTwo.value + ' мм'
	pipeLength.value = length.value + ' мм'
}

document.querySelector('form').addEventListener("change", calc);
calc();

const bodyLockScroll = document.querySelector('body');
const modal = document.querySelector('.modal');
const modalBody = document.querySelector('.modal__content');

window.onload = () => {
	document.onclick = documentClick;

	function documentClick(e) {
		const targetElement = e.target;
		if (targetElement.classList.contains('open-modal')) {
			modal.classList.add('_show');
			bodyLockScroll.classList.add('_lock');
		}
		if (targetElement.classList.contains('modal__close')) {
			modal.classList.remove('_show');
			bodyLockScroll.classList.remove('_lock');
		}
		if (window.innerWidth < 768 && isMobile) {
			if (targetElement.classList.contains('whatsapp__icon')) {
				targetElement.closest('.whatsapp').classList.toggle('_show');
			}
			if (!targetElement.closest('.whatsapp') && document.querySelectorAll('.whatsapp._show').length > 0) {
				_removeClasses(document.querySelectorAll('.whatsapp._show'), '_show');
			}
		}
	}
}

function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}

let modalView = document.querySelector('.modal');
const paddingTop = modalView.clientHeight;
var root = document.querySelector('.modal__content');
var rootStyles = getComputedStyle(root);
root.style.setProperty('--pageHeight', (paddingTop + 443) + 'px');
