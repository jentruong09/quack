var likeFormHandler = async function (event) {
    event.preventDefault();

    console.log(event.target.class)

    const oldLikes = event.target.textContent;
    let likes = oldLikes + 1;

    await fetch(`api/post/${id}`, {
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


document.querySelector('post').addEventListener('click', likeFormHandler);