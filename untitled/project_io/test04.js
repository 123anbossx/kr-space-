var fs=require('fs');
fs.readFile('./fangwen.text','utf8',function (err,data) {
    if(err){
        console.error(err);
    }else {
        console.log(data);
    }

});
