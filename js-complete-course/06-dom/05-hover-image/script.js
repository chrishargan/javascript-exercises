/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    

    let image = document.getElementsByTagName("img")[0]


    image.addEventListener("mouseover", mouseOver);
    image.addEventListener("mouseout", mouseOut);
    
    function mouseOver() {
    image.src = image.getAttribute('data-hover');
    }
    
    function mouseOut() {
    image.src = "../../_shared/img/kiss.svg";
    }

})();
