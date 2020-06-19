/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var attempts = 0;
  var myNumbers = Math.floor(Math.random() * 100);
  var inputNumbers = prompt("Enter a number between 1 and 100");

  while (true) {
    attempts++;
    if (inputNumbers < myNumbers) inputNumbers = prompt("Higher");
    else if (inputNumbers > myNumbers) inputNumbers = prompt("Lower");
    else {
      alert(
        "Well done! You needed " + attempts + " Attempts to find the number"
      );

      break;
    }
  }
})();
