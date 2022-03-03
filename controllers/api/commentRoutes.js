const router = require('express').Router();
const {User, Comment} = require('../../models')
const withAuth = require('../../utils/auth')


// to find all comments
router.get('/', async (req, res) => {
    try {
        const dbCommentData = await Comment.findAll();
        res.status(200).json(dbCommentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// to get a single comment
router.get('/:id', async (req, res) => {
    try {
        const dbCommentData = await Comment.findOne(req.params.id, {
            attributes: [
                'id',
                'content',
                'post_id',
                'user_id',
                'created_at'
            ],
            order: [['created_at', 'DESC']],
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        }) 
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }

        res.status(200).json(dbCommentData);
    } catch (err) {
        res.status(500).json(err);
    }
})


// to create a comment
router.post('/', withAuth, async (req, res) => {
    try {
        if(req.session) {
            const dbCommentData = await Comment.create({
                content: req.body.content,
                post_id: req.body.post_id,
                user_id: req.session.user_id
            })
        }
        res.status(200).json(dbCommentData);
    } catch (err) {
        res.status(500).json(err);
    }
})


// to update a comment 
router.put('/:id', withAuth, async (req, res) => {
    try {
        const dbCommentData = await Comment.update(
            {
                content: req.body.content
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }

        res.status(200).json(dbCommentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// to delete a comment
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const dbCommentData = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }

        res.status(200).json(dbCommentData);
    } catch (err) {
        res.status(500).json(err);
    }
})