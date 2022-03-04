const { Post } = require('../models')

const postdata = [
    {
        post: 'This is a random post 1.',
        user_id: 1
    },
    {
        post: 'This is a random post 2.',
        user_id: 2
    },
    {
        post: 'This is a random post 3.',
        user_id: 3
    },
    {
        post: 'This is a random post 4.',
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;