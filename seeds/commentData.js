const { Comment } = require('../models')

const commentdata = [
    {
        content: 'I completely agree with your take on this issue',
        likes: 1,
        dislikes: 1
    },
    {
        content: 'thank you!',
        likes: 2,
        dislikes: 2
    },
    {
        content: 'get the newest one.',
        likes: 3,
        dislikes: 3
    },
    {
        content: 'great post!',
        likes: 4,
        dislikes: 4
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;