//正则扩展

{
    let regex = new RegExp("xyz","i");
    let regex1 = new RegExp(/xyz/i);

    console.log(regex.test("xyz123"),regex1.test("xyz123"));
    
    let regex2 = new RegExp(/xyz/ig,"i");
    console.log(regex2.flags);
    
}