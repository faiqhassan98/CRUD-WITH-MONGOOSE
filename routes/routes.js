const express = require("express");
const router = express.Router();

const controllerPost = require('../controller/controller');

router.get('/read', controllerPost.ReadPost);
router.post('/create', controllerPost.CreatePost);
router.put('/update/:_id', controllerPost.UpdPost);
router.delete('/delete/:_id', controllerPost.DelPost);

module.exports = router