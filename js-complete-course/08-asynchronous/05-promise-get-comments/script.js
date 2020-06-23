/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.querySelector("#run").addEventListener("click", () => {
    let promise = window.lib.getPosts();         // declaring the function as variable called promise
    promise.then((posts) => {                    // "promising" that variable(function) with .then after it where we create a function
                                                 // called "posts" which in this case is an array, and a "for each" loop goes through
                                                 // each iem in array (in this case they are objects, needing to have the "comments" category added to them.
        posts.forEach((item) => {
          window.lib.getComments(item.id, (error,comments)=>{
              item.comments = comments;
              console.log(comments);
          });
            console.log(posts);

        });
      })
      .catch((error) => console.log("error"));
  });
})();


/*
posts.forEach((item) => {
        window.lib.getComments(item.id, (error, comments) => {
          item.comments = comments;          //the same as if item[comments] to add a property to the object within he array
          console.log(comments);
 */