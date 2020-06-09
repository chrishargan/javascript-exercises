/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function questions() {

let age= prompt("What is your age?");
let gender=prompt("what is your gender?");
let town=prompt("What town do you live in?");

if (confirm(" So you are " +age+ " years old, "+gender+ " and live in "+town+"?")){ 
    alert("Thank you for confirming")

} 
 else {
     questions()
 }
   
    


  


})();
