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
