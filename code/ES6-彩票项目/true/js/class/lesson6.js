//数组扩展
{
    let arr = Array.of(3,4,5,6,7);
    console.log("arr=",arr);
    
    let empty = Array.of();
    console.log("empty=",empty);
    
}

{
    let p = document.getElementsByTagName("p");
    let pArr = Array.from(p);//from方法
    pArr.forEach(function(item){
        console.log(item.textContent);        
    });
    
    console.log(Array.from([1,3,5],function(item){return item*2}));
}

{
    console.log("fill-7",[1,"a",undefined].fill(7));//全部替换成参数
    console.log("fill",['a','b','c'].fill(7,1,3));//从位置一到位置三替换成7    
}

{
    for(let index of ['1','c','kk'].keys()){//遍历输出数组下标
        console.log("keys",index);
    }
    for(let value of ["a", "b", "c"].values()){//遍历输出数组值
        console.log("values",value);        
    }
    for(let [index, value] of ["a", "b", "c"].entries()){//遍历输出数组下标和值
        console.log("values",index,value);        
    }
}

{
    console.log([1,2,3,4,5].copyWithin(0,3,4));//将从0号下标的开始数替换成从3号下标到4号下标之前的数
}

{
    console.log([1,2,3,4,5,6].find(function(item){return item>3}));//找出第一个符合条件的元素
    console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));//找出下标
}

{
    console.log([1,2,NaN].includes(1));//判断数组里是否有完全相等的数
    console.log([1,2,NaN].includes(NaN));
}