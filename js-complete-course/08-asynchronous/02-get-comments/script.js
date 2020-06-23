/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.querySelector("#run").addEventListener("click", () => {
    window.lib.getPosts((error, posts) => {
      if (error){
        console.log(error)
      }
      else {
        console.log(posts);
      }


      posts.forEach((item) => {
        window.lib.getComments(item.id, (error, comments) => {
          item.comments = comments;          //the same as if item[comments] to add a property to the object within he array
          console.log(comments);
        });
      });
    });
  });
})();


