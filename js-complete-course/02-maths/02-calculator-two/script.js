/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function test(id) {
    let first = parseFloat(document.getElementById("op-one").value);
    let second = parseFloat(document.getElementById("op-two").value);
     switch(id){

        
         case "addition":
        
        return (first + second);
        
        case "substraction":
        
        return (first - second);

        case "multiplication":
        
        return (first * second);
        
        case "division":
        
        return (first / second);
    }
}

(function() {
    document.getElementsByClassName("actions")[0].addEventListener("click",function(events){
    let id=events.target.id;
    alert(test(id));
    })
})();
