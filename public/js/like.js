var likeFormHandler = async function (event) {
    if (event.target.dataset.button === true) { event.preventDefault(); }

    var post_id = event.target.id;

    if (event.target.dataset.button === 'dislikes') {
        let oldDislikes = parseInt(event.target.textContent);
        let dislikes = oldDislikes + 1;

        await fetch(`${window.location.origin}/api/post/${post_id}`, {
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

        await fetch(`${window.location.origin}/api/post/${post_id}`, {
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

if (document.querySelector('.post-button')) { document.querySelector('.post-button').addEventListener('click', likeFormHandler) }