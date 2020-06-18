/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let slot = document.querySelectorAll(".field input");
    let buttons = document.querySelectorAll(".field button")

});




// another experiment

/*document.getElementsByTagName("button").addEventListener("click", function () {

    const casino = document.getElementsByTagName("input");
    let random = min + (Math.random) * (max - min)
    let result = casino.innerHTML(random)



    console.log(result)







for (let i = 0; i < casino.length; i++) {
    buttons[i].addEventListener("click", () => {
        let min = parseInt(buttons[i].getAttribute("data-min"));
        let max = parseInt(buttons[i].getAttribute("data-max"));
        let value = parseInt(buttons[i].innerHTML);
        if (value < max) {
            value++;
            buttons[i].innerHTML = (value < 99) ? `0${value}` : value;

        }
    });

    let num = '';
    for (let j = 0; j < buttons.length; j++) {
        num += buttons[j].innerHTML;

    }


    document.getElementById("target").innerHTML = `0${num}`;

})
}

}) ();







