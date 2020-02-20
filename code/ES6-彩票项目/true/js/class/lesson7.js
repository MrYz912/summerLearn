//函数扩展
{
    function test(x,y = 'world') {//参数默认值，有默认值的参数只能写在最后
        console.log('默认值',x,y);
    }
    test('hello');    
    test('hello','hi');
}

{
    let x = 'hi';
    function test2(x,y=x){//局部变量起作用
        console.log(x,y);
    }
    test2('hello');
}

{
    function test3(...arg){//能把传进来的未知个数的参数转化成数组
        for(let v of arg){
            console.log('rest',v);
        }
    }
    test3(1,2,3,4,'a');
}

{
    console.log('a',...[1,2,3]);//能将数组转成离散的数
}

{//箭头函数
    let arrow = v => v*2;//依次为函数名，参数，返回值
    let arrow2 = () => 5;
    console.log(arrow(3));
    console.log(arrow2());
}

{//伪调用
    function tail(x){
        console.log('tail',x);
    }
    function fx(x){
        return tail(x);//在函数的最后一句调用另外一个函数的话称为伪调用，能提升性能
    }
    fx(23);
}