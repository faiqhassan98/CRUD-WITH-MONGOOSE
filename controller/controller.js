const crudOp = require('../model/model');

async function CreatePost(req, res) {
    let data = new crudOp(req.body);
    let result = await data.save();
    console.log(result);
    res.status(200).send(result);
}

async function ReadPost(req, res) {
    let data = await crudOp.find();
    res.send(data);
}

async function UpdPost(req, res) {
    // let data = await crudOp.findByIdAndUpdate(req.params.id, req.body);
    let data = await crudOp.findByIdAndUpdate(
        req.params._id,
        {
            $set: req.body
        },
        { 
            new: true, 
            runValidators: true 
        }
    );
    console.log(data);
    res.send(data);
}

async function DelPost(req, res) {
    let data = await crudOp.findByIdAndDelete(req.params.id);
    res.send(data);
    console.log(data);
}

module.exports = {
    CreatePost,
    ReadPost,
    UpdPost,
    DelPost
}