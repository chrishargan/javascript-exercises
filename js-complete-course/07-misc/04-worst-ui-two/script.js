/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            let min = parseInt(buttons[i].getAttribute("data-min"));
            let max = parseInt(buttons[i].getAttribute("data-max"));
            let value = parseInt(buttons[i].innerHTML);
            if (value < max) {
                value++;
                buttons[i].innerHTML = (value < 10) ? `0${value}` : value;

            }
            // This increases the number in each button when clicked and stops when reaches max value

            //gets the numbers from the four buttons

            let num = '';
            for (let j = 0; j < buttons.length; j++) {
                num += buttons[j].innerHTML;

            }
            //Displays the full number in the id = target

            document.getElementById("target").innerHTML = `0${num}`;

        })
    }

})();