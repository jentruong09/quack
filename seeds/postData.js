const { Post } = require('../models')

const postdata = [
    {
        content: 'This is a random post 1.',
        likes: 1,
        dislikes: 2,
        user_id: 1
    },
    {
        content: 'This is a random post 2.',
        likes: 7,
        dislikes: 2,
        user_id: 2
    },
    {
        content: 'This is a random post 3.',
        likes: 1,
        dislikes: 5,
        user_id: 3
    },
    {
        content: 'This is a random post 4.',
        likes: 4,
        dislikes: 2,
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;