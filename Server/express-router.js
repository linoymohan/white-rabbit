const router = require('express').Router();
const userRouter = require('./router/user.router');

router.get('/test-api', (req, res) => {
    res.json({
        status: 'API Its Working  ',
        message: 'success',
    });
})

router.use('/user', userRouter);

module.exports = router;