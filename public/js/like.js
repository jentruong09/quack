const post_id = document.querySelector('.like-button').id;


const likeFormHandler = async function (event) {
    event.preventDefault();

    const oldLikes = parseInt(document.querySelector('.likes').textContent);
    let likes = oldLikes + 1;

    await fetch(`api/post/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            likes
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    document.location.reload();
};


document.querySelector('.like-button').addEventListener('click', likeFormHandler);