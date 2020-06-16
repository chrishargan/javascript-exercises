/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let el = document.getElementById("pass-one");
    el.addEventListener('keyup', countCharacters, false);

    function countCharacters(e) {

        let textEntered = document.getElementById("pass-one").value;

        let counter = (10 - (textEntered.length));

        let countRemaining = document.getElementById("counter");

        countRemaining.textContent = counter;
    }

    document.getElementById("pass-one").setAttribute("maxLength", "10");




})();
