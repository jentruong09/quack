const { Comment } = require('../models')

const commentdata = [
    {
        comment: 'nice!',
        likes: 0,
        dislikes: 0,
        post_id: 1,
        user_id: 1
    },
    {
        comment: 'thank you!',
        likes: 0,
        dislikes: 0,
        post_id: 2,
        user_id: 2
    },
    {
        comment: 'get the newest one.',
        likes: 0,
        dislikes: 0,
        post_id: 3,
        user_id: 3
    },
    {
        comment: 'great post!',
        likes: 0,
        dislikes: 0,
        post_id: 4,
        user_id: 4
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;