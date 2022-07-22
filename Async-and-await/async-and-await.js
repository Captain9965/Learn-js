/*
    are a syntactic sugar on top of Promises and are used to maintain asynchronous operations more synchronously
    commonly used in a REST api request where you want the data to fully load before pushing it to the view.
    It provides good readability for programmers

*/


const showPosts = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    console.log(posts);
}
showPosts();

/*

    To notify js that we are working with promises, we wrap await inside an async function
*/