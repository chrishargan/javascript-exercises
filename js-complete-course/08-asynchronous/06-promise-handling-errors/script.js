/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.querySelector("#run").addEventListener("click", function () {
    let promise = window.lib.getPersons();
    promise
      .then((people) => {
        people.forEach((person) => {
          console.log(people);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });
})();
