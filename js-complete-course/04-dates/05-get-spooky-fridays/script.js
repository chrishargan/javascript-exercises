/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


         document.getElementById("run").addEventListener("click",function(){
            let yearinput=parseInt(document.getElementById("year").value);
            for (let month = 0; month < 12; month++) {
                    let unlucky = new Date(yearinput,month,13);
                     if(unlucky.getDay() === 5) {
                        let spookyday = unlucky.toLocaleString("default", {month: "long"});
                         console.log(spookyday);
                     }
                 }
               
             

         });
})();


