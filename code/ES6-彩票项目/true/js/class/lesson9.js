//symbol用法
{//声明
    let a1 = Symbol();//symbol声明的变量是两个独一无二的变量
    let a2 = Symbol();
    console.log(a1===a2);
    let a3 = Symbol.for("a3");//a3作为key值，在声明新变量的时候，假如key值已经声明过了，则可以将原来声明的取回
    let a4 = Symbol.for ("a3");
    console.log(a3===a4);
}

{
    let a1 = Symbol.for('abc');//独一无二的
    let obj = {
        [a1]:123,
        'abc':345,
        'c':456
    }
    console.log('obj',obj);
    
    for (let [key, value] of Object.entries(obj)){//用常规的let of方法取不到symbol的变量
        console.log('let of',key,value);
    }

    Object.getOwnPropertySymbols(obj).forEach(function(item){//用这个方法只能取到symbol的变量
        console.log(obj[item]);
    })

    Reflect.ownKeys(obj).forEach(function(item){//所有变量都能取到
        console.log('ownKeys',item,obj[item]);
    })
}