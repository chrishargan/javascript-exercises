/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", () => {
    fetch("../../_shared/api.json")
        .then(response => {                       // once json is received
          response.json()      // the "response" refers to what we are doing to the now fetched
            // file, in this case .json converts it into a actual json file format as an array in this case.
        })

        .then(data => console.log(data))                                               // then we are performing a function console logging that result.
        .catch(error => {
          console.log(error)
        })
  })
})();




