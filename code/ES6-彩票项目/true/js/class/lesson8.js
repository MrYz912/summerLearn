//对象扩展
{//简洁表示法
    let o = 1;
    let k = 2;
    let es5 = {
        o:o,
        k:k
    };
    let es6 = {
        o,
        k
    };
    console.log(es5,es6);

    let es5_method = {
        hello:function() {
            console.log('hello');
        }
    }
    let es6_method = {
        hello(){
            console.log('hello');
        }
    }
    console.log(es5_method.hello(),es6_method.hello());
}

{//属性表达式
    let a = 'b';
    let es5_obj = {
        a:'c',
        b:'c'
    };

    let es6_obj = {
        [a]:'c'//相当于取了变量a的值作为变量名
    };
    console.log(es5_obj,es6_obj);
}

{//新增API
    console.log("字符串",Object.is('abc','abc'),'abc'==='abc');//相当于===
    console.log("数组",Object.is([],[]),[]===[]);//数组为引用型，地址不一样
    
}