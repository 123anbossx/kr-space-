/**
 * Created by a1234 on 17/9/12.
 */
var assert=require('assert');
var obj1={
    a:{
        b:1
    }
};
var obj2={
    a:{
        b:2
    }
};
var obj3={
    a:{
        b:1
    }
};
assert.deepEqual(obj1, obj2,'这是一个错误');