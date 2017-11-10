var cookie=require('cookie');
// var parser=require('cookie-parser');
exports.register = function (req, res, next) {
    res.cookie("name",'lisi');
    // var hdr=cookie.serialize('zangsan','wangwu');
    // var data=cookie.parse(hdr);
    // console.log(req.cookies);
     res.render('register');
};
exports.login=function (req,res,next) {
    var name=req.body.uname;
    var pwd=req.body.pwd;
    var url=req.baseURI;
   res.send('用户名：'+name+'密码:'+pwd+'路径：'+url)
};
