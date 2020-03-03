// generator异步
{//generator的基本定义
    let tell = function* (){//function后面带个*，就是generator的写法
        yield "a";
        yield "b";
        return "c";
    };

    let k = tell();
    console.log(k.next());//调用一次next方法，函数运行到相对应的yield语句
    console.log(k.next());//返回的值和iterator返回的值一样
    console.log(k.next());
    console.log(k.next());
}

{//将generator用到iterator上
    let obj = {};
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    }
    
    for (let k of obj) {
        console.log('value',k);
    }
}

{//适用于状态机
    let state = function* () {
        while(1){
            yield "A";
            yield "B";
            yield "C";
        }
    }

    let status = state();
    console.log(status.next());//在ABC三种状态中循环
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

// {//generator的语法糖，用法一样
//     let state = async function () {
//         while(1){
//             await "A";
//             await "B";
//             await "C";
//         }
//     }

//     let status = state();
//     console.log(status.next());//在ABC三种状态中循环
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
// }

{//具体例子，抽奖剩余次数
    let draw = function(count){
        //具体抽奖逻辑
        console.info(`剩余${count}次`);
    }

    let residue = function* (count) {
        while(count>0){
            count--;
            yield draw(count);
        }
    }

    let start = residue(5);//具体初始化的次数
    let btn = document.createElement("button");
    btn.id = "star";
    btn.textContent = "抽奖";
    document.body.appendChild(btn);
    document.getElementById("star").addEventListener("click",function(){
        start.next();
    },false);
}

{//长轮询
    let ajax = function* (){
        yield new Promise(function(resolve, reject){
            setTimeout(function(){
                //向服务端请求数据
                resolve({code:0});//服务端返回的数据
            },200);
        });
    };

    let pull = function () {
        let gen = ajax();
        let step = gen.next();
        step.value.then(function(d){
            if(d.code!=0){
                setTimeout(function(){
                    console.info("wait");
                    pull();//当服务端返回的数据不符合要求时，隔一段时间再取数据
                },1000)
            }else {
                console.info(d);
            }
        })
    }   

    pull();
}