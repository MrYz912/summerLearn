//Decorators 修饰器，是一个用来修改类的行为的函数
{
    let readonly = function(target, name, descriptor){//设置只读属性
        descriptor.writable = false;
        return descriptor;
    }

    class Test {
//        @readonly//需要插件支持，现在是实验性功能
        time(){
            return '2020-3-3';
        }
    }

    let test = new Test();

    // test.time = function() {
    //     console.log('reset time');//无法修改
    // }

    console.log(test.time());
}

{
    let typename = function(target, name, descriptor){//另一种写法
        target.myname = "hello";
    }

//    @typename
    class Test {}

    console.log("类修饰符",Test.myname());
    // 第三方库修饰器的js库：core-decorator；npm install core-decorator
}