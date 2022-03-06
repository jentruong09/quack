// const emoji = require('node-emoji');
const likes = document.querySelectorAll(`#likes`);
const dislike = document.querySelectorAll(`#dislikes`);

Array.prototype.forEach.call(likes, dislike, (like, dislike) =>{
    like.textContent("why isn't this working");
    dislike.textContent("why isn't this working");
})