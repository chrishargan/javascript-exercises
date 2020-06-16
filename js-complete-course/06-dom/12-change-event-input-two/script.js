/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    const input = document.getElementById('pass-one');
    const validity = document.getElementById('validity');

    input.addEventListener('change', () => {

        let string = input.value;
        let stringAsArray = string.split('');
        if (stringAsArray.length < 8) {
            validity.innerHTML = 'Not OK';
        } else {
            //change elements in stringAsArray to number format, string element will be come NaN => not a number
            let parseArray = stringAsArray.map(item => parseInt(item));
            console.log(parseArray);
            //filter the number elements out of parseArray (create a new array with only numbers)
            let numbers = parseArray.filter(item => Number.isInteger(item));
            //check if there are two numbers or not
            if (numbers.length >= 2) {
                validity.innerHTML = 'Ok';
            } else {
                validity.innerHTML = 'Not OK'
            }
        }
    });



})();
