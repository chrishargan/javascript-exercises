/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	let fontSizes = ["12px", "18px", "24px", "27px", "33px"];
	let target = document.getElementById('target');
	let string = target.innerHTML;
	let stringArray = [];
	for (let i = 0; i < string.length; i++) {
		let thisLetter = target.innerHTML.charAt(i);
		stringArray.push(thisLetter);
	}
	let size = 0;

	function wave() {
		function sizeChange() {
			if (size < 4 && up == true) {
				size++;
			}
			if (size > 0 && up == false) {
				size--;
			}
			if (size == 4) {
				up = false;
			}
			if (size == 0) {
				up = true;
			}
		}
		let up = true;
		target.innerHTML = "";
		for (let i = 0; i < stringArray.length; i++) {
			target.innerHTML += '<span style="font-size: ' + fontSizes[size] + ';">' + stringArray[i] + '</span>';
			if (size < 4 && up == true) {
				size++;
			}
			if (size > 0 && up == false) {
				size--;
			}
			if (size == 4) {
				up = false;
			}
			if (size == 0) {
				up = true;
			}
		}
		setTimeout(wave, 1000);
	}

	wave();


})();

/*(function () {
document.querySelector("#target").innerHTML = "test";
let word = document.querySelector("#target").innerHTML;

let sizes = (10, 12, 14, 16,18);
let counter = 0
for (let i = 0; i < word.length; i++) {
	if (sizes.length === counter) {
		sizes = sizes.reverse();
		counter = 0;
	}

	let span = document.createElement("span");
	span.innerHTML = word[i];
    span.style.fontSize = sizes[counter++] "px";
	
	document.querySelector("#target").appendChild(span);


}


};

