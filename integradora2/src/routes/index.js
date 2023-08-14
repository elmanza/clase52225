const userApi = require('../components/user');

module.exports = app => {
    userApi(app);
    app.get("/", (req,res,next)=>{
        console.log(req.socketIO)
        res.send("Todo ok!");
    })
}