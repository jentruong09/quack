<<<<<<< HEAD
var likeFormHandler = async function (event) {
    event.preventDefault();

    console.log(event.target.class)

    const oldLikes = event.target.textContent;
    let likes = oldLikes + 1;

    await fetch(`api/post/${id}`, {
=======



var likeFormHandler = async function (event) {
    if (event.target.dataset.button === true) {
        event.preventDefault();
    }
    
    

    var post_id = event.target.id;
    console.log(post_id)
// event.target = button.click 
// check if event.target(button) is a like button or disike button
// if like fetch put like
// if dislike fetch put dislike

    
    console.log(event.target.dataset.button)
    if (event.target.dataset.button === 'dislikes') {
        let oldDislikes = parseInt(event.target.textContent);
        let dislikes = oldDislikes + 1;

        await fetch(`api/post/${post_id}`, {
>>>>>>> bf210d4cc8de496bc9ae86106fdcabb727913b64
        method: 'PUT',
        body: JSON.stringify({
            dislikes
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    document.location.reload();
    }
    else if (event.target.dataset.button === 'likes') {

        let oldLikes = parseInt(event.target.textContent);
        let likes = oldLikes + 1;

        await fetch(`api/post/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                likes
            }),
            headers: {
                'Content-Type': 'application/json'
            }
    });
        document.location.reload();
    }
};

if (document.querySelector('.post-button')) {
    document.querySelector('.post-button').addEventListener('click', likeFormHandler);
}


<<<<<<< HEAD
document.querySelector('post').addEventListener('click', likeFormHandler);
=======
>>>>>>> bf210d4cc8de496bc9ae86106fdcabb727913b64
