/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById("target").innerText = "460000000";
  let button = document.querySelectorAll("button");

  button.forEach((button) => {
    button.addEventListener("click", () => {
      let input = button.previousSibling.previousSibling;
      let max = Number(input.getAttribute("data-max"));
      let min = Number(input.getAttribute("data-min"));
      let math = Math.floor(Math.random() * (max - min + 1)) + min;

      input.value = math;
      if (math < 10) {
        input.value = "0" + math;
      }

      let one = document.getElementById("part-one").value;
      let two = document.getElementById("part-two").value;
      let three = document.getElementById("part-three").value;
      let four = document.getElementById("part-four").value;
      let phoneNumber = one + two + three + four;

      document.getElementById("target").innerHTML = `0${phoneNumber}`;
    });
  });
})();
