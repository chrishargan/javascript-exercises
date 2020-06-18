/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let target = document.getElementById("target");
    let i = 0;
    let text = target.innerHTML;
    target.innerHTML = "";
    function typeWriter() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, Math.floor(Math.random() * 7 + 1) * 100);
        }
    }

    typeWriter();
})();
