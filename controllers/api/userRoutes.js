const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// to grab all the users without password
router.get('/', (req, res) => {
  User.findAll({
      attributes: {exclude: ['password']}
  }) .then(dbUserData => {
    //res.json(dbUserData)

    const users = dbUserData.map((user) => user.get({ plain: true }));
    //console.log(users)
    res.render('users', {users, loggedIn: req.session.loggedIn});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// to grab one user and their post information
router.get('/:id', (req,res) => {
  User.findOne({
      attributes: {exclude: ['password']},
      where: {
          id: req.params.id
      },
      include: [
          {
              model: Post,
              attributes: ['id', 'post', 'created_at']
          },
          {
              model: Comment,
              attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
              include: {
                  model: Post,
                  attributes: ['post']
              }
          }
      ]
  }) .then (dbUserData => {
      if(!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' })
          return;
      }
      //res.json(dbUserData)
      const user = dbUserData.get({plain: true});

      res.render('single-user', {user, loggedIn: req.session.loggedIn})

  }) .catch(err => {
      console.log(err);
      res.status(500).json(err);
  })
});


//create user
router.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = dbUserData.id
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

//login
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }) .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with this email address!' })
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password. Please try again!' });
          return;
        }
        req.session.save(() => {
            req.session.user_id = dbUserData.id
            req.session.loggedIn = true

            res
            .status(200)
            .json({ user: dbUserData, message: 'You are now logged in!' });
        })
    }) .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});


module.exports = router;