const { Comment } = require('../models')

const commentdata = [
    {
        content: 'I completely agree with your take on this issue',
        likes: 1,
        dislikes: 1,
        post_id: 1,
        user_id: 1
    },
    {
        content: 'thank you!',
        likes: 2,
        dislikes: 2,
        post_id: 2,
        user_id: 2
    },
    {
        content: 'get the newest one.',
        likes: 3,
        dislikes: 3,
        post_id: 3,
        user_id: 3
    },
    {
        content: 'great post!',
        likes: 4,
        dislikes: 4,
        post_id: 4,
        user_id: 4
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;