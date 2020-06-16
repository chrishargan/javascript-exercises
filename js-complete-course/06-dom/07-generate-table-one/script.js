/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {



    document.getElementById("target").innerHTML = `<table>  </table>`;
    let mytable = document.getElementsByTagName("table")[0];

    for (let index = 0; index < 10; index++) {
        let row = mytable.insertRow();
        let cell = row.insertCell();
        cell.innerHTML = index;

    }


})();
