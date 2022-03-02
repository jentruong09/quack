const { User } = require('../models')

const userdata = [
    {
        username: 'Jack Dan',
        email: 'jack@email.com',
        password: '1234Password'
    },
    {
        username: 'Ben Benjamin',
        email: 'ben@email.com',
        password: '5678Password'
    },
    {
        username: 'Micky Simmons',
        email: 'mi@email.com',
        password: '2288Password'
    },
    {
        username: 'Jan Crew',
        email: 'jan@email.com',
        password: '7891Password'
    }
]

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;