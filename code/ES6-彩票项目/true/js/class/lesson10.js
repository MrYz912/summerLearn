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

{
    let map = new Map();//key可以为任何数据类型的Object
    let arr = ['123'];

    map.set(arr,456);//key,value key可以为任何数据类型
    console.log('map',map,map.get(arr));
}

{
    let map = new Map([['a',123],['b',456]]);//遍历和Set一样
    console.log('map_args',map);
    console.log('size',map.size);
    console.log('delete',map.delete('a'));
    console.log('clear',map.clear());
}

{
    let weakmap = new WeakMap();//WeakMap和Map的关系与WeakSet与Set关系一样
    let o = {};
    weakmap.set(o,123);
    console.log(weakmap.get(o));
}

{//数据结构横向对比，增删查改
    let map = new Map();
    let arr = [];
    //增
    map.set('t',1);
    arr.push({t:1});

    console.info('map-arr',map, arr);
    //查
    let map_exist = map.has('t');
    let arr_exist = arr.find(item => item.t);
    
    console.info('map-arr',map_exist,arr_exist);
    //改
    map.set('t',2);
    arr.forEach(item=>item.t ? item.t=2 : '');
    
    console.info('map-arr',map, arr);
    //删
    map.delete("t");
    let index = arr.findIndex(item=>item.t);
    arr.splice(index,1);
    
    console.info('map-array-empty',map,arr);
}

{//set和array的对比
    let set = new Set();
    let array = [];

    set.add({t:1});
    array.push({t:1});
    console.info('set-array',set,array);
}