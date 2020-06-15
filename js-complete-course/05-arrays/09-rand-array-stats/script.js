/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function (){
        
      let numbers = [];
      for (let index = 0; index < 10; index++) {
      numbers[index] = Math.round(Math.random()*99 + 1);
      document.getElementById(`n-${index+1}`).innerHTML=numbers[index]
          
      }
          
       
       let sorted =numbers.sort(function(a, b){return a-b});

        
           document.getElementById("min").innerHTML=sorted[0];
           document.getElementById("max").innerHTML=sorted[9];


           document.getElementById("sum").innerHTML = numbers.reduce(myFunc);

           function myFunc(total, num) {
             return total + num;
           }

           document.getElementById("average").innerHTML = numbers.reduce(myFunc)/10;
           
    });

})();
