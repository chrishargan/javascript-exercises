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
        let posts = window.lib.getPosts();    //declaring the function as posts

        posts.then(function(result){        //"promising" the variable(function) with "posts.then" which is a function
                                            // with a suitably named parameter
            console.log(result);
        })

        .catch((error) => console.log(error));    //not so necessary in this case but if the promise fails then it's
                                                    //wise to have an error message logged
    });
})();
