//set-map数据结构
{
    let list = new Set();//set相当于数组，添加时用add方法
    list.add(3);
    list.add(4);
    console.log('size',list.size);
}

{
    let arr = [1,2,3,4,5];//长度用size
    let list = new Set(arr);
    console.log('size',list.size);
}

{
    let list = new Set();//set中的每个元素都要不一样，没有重复元素
    list.add(1);
    list.add(2);
    list.add(1);
    console.log('list',list);

    let arr = [1,2,3,1,'2'];//将数组转换成set时不会进行类型转换
    let list2 = new Set(arr);
    console.log('unique',list2);
}

{
    let arr = ['add','delete','clear','has'];//四个方法
    let list = new Set(arr);
    console.log('has',list.has('add'));
    console.log('delete',list.delete('add'),list);
    list.clear();
    console.log('list',list);
}

{
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);

    for(let [key, value] of list.entries()){//set的key和value值都一样，为set里的元素
        console.log('entries',key, value);
    }

    list.forEach(function(item){console.log(item);});
}

{
    let weakList = new WeakSet();//WeakSet只能放对象，没有clear方法，没有size属性，不能遍历
    let arg = {};
    weakList.add(arg);

    //weakList.add(2);

    console.log('weakList',weakList);
}