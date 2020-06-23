/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{
    fetch("../../_shared/api.json")
        .then(response =>response.json())
        .then( ()=>{
           let id = document.getElementById("hero-id").value;
            data=> {
                let heroesArray = data.heroes;
                heroesArray.forEach(hero => {
                    document.getElementById("target").innerHTML += `
                        <li class="hero">
                         <h4 class="title">
                         <strong class="name">${hero.name}</strong>
                         <em class="alter-ego">${hero.alterEgo}</em>
                         </h4>
                         <p class="powers">${hero.abilities}</p>
                         </li>
                    `;
                })

            }
        });


})();
