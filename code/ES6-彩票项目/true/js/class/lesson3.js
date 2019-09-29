//正则扩展

{
    let regex = new RegExp("xyz","i");
    let regex1 = new RegExp(/xyz/i);

    console.log(regex.test("xyz123"),regex1.test("xyz123"));
    
    let regex2 = new RegExp(/xyz/ig,"i");
    console.log(regex2.flags);
    
    // var tagName = /<([^>]+)>[^<]*<\/\1>/;
    // console.log(tagName.exec("<b>bold</b>"));
    
}

{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;

    console.log("one",a1.exec(s),a2.exec(s));
    console.log("two",a1.exec(s),a2.exec(s));
 
    console.log(a1.sticky,a2.sticky);
    
}

{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));

    console.log('u-3',/\u{61}/.test('a'));
    console.log('u-4',/\u{61}/u.test('a'));

    
    
}