//字符串扩展
{
    console.log('a',`\u0061`);
    console.log('s',`\u20bb7`);

    console.log('s',`\u{20bb7}`);//用{}包起来的超过0xffff的Unicode码可以识别
}

{
    let s ='𠮷';
    console.log('length',s.length);
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));
    console.log('at0',s.charCodeAt(0));
    console.log('at1',s.charCodeAt(1));

    let s1 ='𠮷a';
    console.log('length',s1.length);
    console.log('0',s1.codePointAt(0).toString(16));
    console.log('1',s1.codePointAt(1));
    console.log('2',s1.codePointAt(2));
    
}

{
    console.log(String.fromCharCode('0x20bb7'));
    console.log(String.fromCodePoint('0x20bb7'));//通过码点转化为字符，在ES6中用fromCodePoint方法
    
}

{
    let str = '\u{20bb7}abc';
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i]);
        
    }

    for(let code of str){
        console.log('es6',code);
        
    }
    
}

{
    let str = 'string';
    console.log('include:',str.includes('r'));
    console.log('start:',str.startsWith('str'));
    console.log('end:',str.endsWith('ng'));
    
    console.log(str.repeat(2));
    
}

{
    let name = "list";
    let info = "hello world";
    let m = `i am ${name},${info}`;
    console.log(m);
    
}

{
    console.log('1'.padStart(2,'0'));//字符串补全
    console.log('1'.padEnd(2,'0'));

}

{
    console.log(String.raw`H\n${1+2}`);
    console.log(`H\n${1+2}`);

}

{//标签模板
    let user={
        name : 'list',
        info : 'hello world'
    };
    //abc`i am ${user.name} ${user.info}`;
    console.log(abc`i am ${user.name} ${user.info}`);
    
    function abc(s,v1,v2){
        console.log(s,v1,v2);
        return s + v1 + v2;
        
    }
}