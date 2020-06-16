/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {

        pass1 = document.getElementById("pass-one").value;
        pass2 = document.getElementById("pass-two").value;


        if (pass1 !== pass2) {
            let error = document.getElementById("pass-one");
            let error2 = document.getElementById("pass-two");
            error.classList.add("error");
            error2.classList.add("error");
            console.log("Your passwords don't match");
        }

        else {
            console.log("Succesful login");

        }

    });

})();
