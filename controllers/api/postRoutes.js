const router = require('express').Router();
const {Post, User, Comment} = require('../../models')
const withAuth = require('../../utils/auth')

// to get all posts
router.get('/', async (req,res) => {
    try {
        const dbPostData = await Post.findAll({
            attributes: ['id', 'title', 'content', 'user_id', 'created_at'],
            order:[['created_at', 'DESC']],
            include: [
                {
                    model: Comment, 
                    attributes: [
                        'id',
                        'content',
                        'post_id',
                        'user_id',
                        'created_at'
                    ],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User, 
                    attributes: ['username']
                }
            ]
        })
        res.status(200).json(dbPostData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})


// to get one post
router.get('/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findOne(req.params.id, {
            attributes: ['id', 'title', 'content', 'created_at'],
            include: [
               {
                   model: User,
                   attributes: ['username']
               },
               {
                   model: Comment,
                   attributes: ['id', 'content', 'post_id', 'user_id', 'created_at'],
                   include: {
                       model: User,
                       attributes: ['username']
                   }
               }
            ]
        })
        if(!dbPostData) {
            res.status(404).json({ message: 'No post found with this id!' })
            return;
        }
        res.status(200).json(dbPostData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})


// to add a new post
router.post('/', withAuth, async (req, res) => {
    try {
    const dbPostData = await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
    })
    res.status(200).json(dbPostData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})


// to update a post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const dbPostData = await Post.update(req.params.id, {
            title: req.body.title,
            content: req.body.content
        })
        if(!dbPostData) {
            res.status(404).json({ message: 'No post found with this id!' })
            return;
        }
        res.status(200).json(dbPostData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})


// to delete a post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const dbPostData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        })

        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id!'})
        }
        res.status(200).json(dbPostData);
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})