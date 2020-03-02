// promise
{//基本定义
    let ajax =  function(callback){
        console.log('执行');
        setTimeout(function(){
            callback&&callback.call();
        },1000);
    };

    ajax(function(){
        console.log('timeout1');
    })
}

{//使用promise异步执行
    let ajax = function(){
        console.log('执行2');
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve();
            },1000);
        });
    };

    ajax().then(function(){
        console.log('timeout2');
    })
}

{//多步异步按顺序执行
    let ajax = function(){
        console.log('执行2');
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve();
            },1000);
        });
    };

    ajax()//第一步
    .then(function(){//第二步
        console.log('promise-timeout2');
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve();
            },1000);
        });
    })
    .then(function(){//第三步
        console.log('promise-timeout3');
    })
}

{//捕获错误
    let ajax = function(num) {
        console.log('执行3');
        return new Promise(function(resolve, reject){
            if (num > 5){
                resolve();
            }else {
                throw new Error('出错了');
            }
        });
    };

    ajax(6).then(function(){
        console.log('log',6);
    }).catch(function(err){
        console.log('catch',err);
    });

    ajax(3).then(function(){
        console.log('log',3);
    }).catch(function(err) {
        console.log('catch',err);
    });
}

{//所有图片加载完再添加到页面
    function loadImg(src){
        return new Promise(function(resolve, reject){
            let img = document.createElement('img');
            img.src = src;
            img.onload = function() {
                resolve(img);
            }
            img.onerror = function() {
                reject(err);
            }
        })
    }

    function showImgs(imgs){
        imgs.forEach(function(img){
            document.body.appendChild(img);
        })
    }

    Promise.all([//将每一个loadImg的promise对象生成一个新的Promise对象，当这三个对象状态都发生变化的时候才会生成新的Promise对象
        loadImg('https://camo.githubusercontent.com/8ef68d45d17da94b660686085806d9eda00214bc/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f303038327a7962706779316762746f7874626368626a33307077303665676e302e6a7067'),
        loadImg('https://camo.githubusercontent.com/8b689d1e89f2f0ae7b027f8c5437037e8825757b/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f303038327a7962706779316762746f7874343738366a33307475306a326a76612e6a7067'),
        loadImg('https://camo.githubusercontent.com/6e8e68f617a7080d7a52d265534b0b3d8bdcd249/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f303038327a7962706779316762746f7873786c6a756a33306e67306634616c302e6a7067')
    ]).then(showImgs);
}

{//有一个图片加载完就添加到页面
    function loadImg(src){
        return new Promise(function(resolve, reject){
            let img = document.createElement('img');
            img.src = src;
            img.onload = function() {
                resolve(img);
            }
            img.onerror = function() {
                reject(err);
            }
        })
    }

    function showImgs(img){
        let p = document.createElement("p");
        p.appendChild(img);
        document.body.appendChild(p);
    }

    Promise.race([//哪个加载得快就显示哪个
        loadImg('https://camo.githubusercontent.com/8ef68d45d17da94b660686085806d9eda00214bc/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f303038327a7962706779316762746f7874626368626a33307077303665676e302e6a7067'),
        loadImg('https://camo.githubusercontent.com/8b689d1e89f2f0ae7b027f8c5437037e8825757b/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f303038327a7962706779316762746f7874343738366a33307475306a326a76612e6a7067'),
        loadImg('https://camo.githubusercontent.com/6e8e68f617a7080d7a52d265534b0b3d8bdcd249/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f303038327a7962706779316762746f7873786c6a756a33306e67306634616c302e6a7067')
    ]).then(showImgs);
}