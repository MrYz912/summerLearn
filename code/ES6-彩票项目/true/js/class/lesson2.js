{
    let a,b,rest;
    [a,b] = [1,2];
    console.log(a,b);
}

{
    let a, b, rest;
    [a,b,...rest] = [1,2,3,4,5,6];
    console.log(a, b,rest);
}

{
    let a,b;
    ({a,b}={a:1,b:2});
    console.log(a, b);
}

{
    let a,b,c,rest;
    [a,b,c=3] = [1,2];
    console.log(a,b,c);
}

{
    let a=1;
    let b=2;
    [a,b] = [b,a];
    console.log(a,b);
}

{
    function f(){
        return[1,2];
    }
    let a,b;
    [a,b] = f();
    console.log(a,b);    
}

{
    function f(){
        return[1,2,3,4,5];
    }
    let a,b;
    [a,,,b] = f();
    console.log(a,b);
}

{
    function f(){
        return[1,2,3,4,5];
    }
    let a, b;
    [a,,...b] = f();
    console.log(a,b);
    
}

{
    let o={a:2,b:true};
    let {a,b} =o;
    console.log(a,b);
    
}

{
    let {a=10,b=5} = {a:3};
    console.log(a,b);
    
}

{
    let metadata = {
        title:"cba",
        test:[{
            title: "nba",
            data:"333"
        }]
    }
    let{title:estitle,test:[{title:cntitle}]} = metadata;
    console.log(estitle,cntitle);
    
}