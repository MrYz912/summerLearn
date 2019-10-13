//数值扩展
{
    console.log('B',0b11010110);
    console.log(0o245);
}

{
    console.log('5',Number.isFinite(5));//判断是不是有限数
    console.log('NaN',Number.isFinite(NaN));
    console.log('1/0',Number.isFinite(1/0));
    console.log('NaN',Number.isNaN(NaN));//判断是不是一个数
    console.log('10',Number.isNaN(10));
}

{
    console.log('25',Number.isInteger(25));
    console.log('25.0',Number.isInteger(25.0));
    console.log('25.1',Number.isInteger(25.1));
    console.log('25.0',Number.isInteger('25.0'));
}

{
    console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);//从-(2^53)到2^53
    console.log('10',Number.isSafeInteger(10));
    console.log('a',Number.isSafeInteger('a'));
}

{
    console.log(4.1,Math.trunc(4.1));//取数字的整数部分
    console.log(4.9,Math.trunc(4.9));
}

{
    console.log('-5',Math.sign(-5));//检测为正数负数还是0，“如果为字符串会转换为number对象，转换不了的输出NaN”
    console.log('0',Math.sign(0));
    console.log('5',Math.sign(5));
    console.log('50字符串',Math.sign('50'));
    console.log('foo',Math.sign('foo'));
}

{
    console.log('-1',Math.cbrt(-1));//立方根
    console.log('8',Math.cbrt(8));
}