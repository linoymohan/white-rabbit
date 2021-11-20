const router = require('express').Router();
const userService = require('../service/user.service');

router.route('/').get(userService.getList);
router.route('/').post(userService.create);
router.route('/:email').get(userService.getByEmail);

module.exports = router;