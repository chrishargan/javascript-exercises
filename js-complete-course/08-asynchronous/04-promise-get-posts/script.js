/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.querySelector("#run").addEventListener("click", () => {
    let promise = window.lib.getPosts();
    promise
      .then((posts) => {
        posts.forEach((post) => {
          window.lib.getComments(post.id).then((comments) => {
            console.table(comments);
          });
        });
      })
      .catch((error) => console.log("error"));
  });
})();
