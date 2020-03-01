//proxy和reflect
{
    let obj ={//相当于供应商
        time:'2019-02-29',
        name:'net',
        _r:123
    };

    let monitor = new Proxy(obj,{//相当于代理商
        //拦截对象属性的读取
        get(target,key){
            return target[key].replace('2019','2020');
        },
        //拦截对象属性的设置
        set(target,key,value){//target就是obj,key就是属性，value就是属性值
            if(key === 'name'){//除了name以外的属性无法修改
                return target[key] = value;
            }else {
                return target[key];
            }
        },
        //拦截key in object
        has(target,key){
            if(key === 'name'){
                return target[key];
            }else {
                return false;
            }
        },
        //拦截delete
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){//以_开头的属性
                delete target[key];
            }else {
                return target[key];
            }
        },
        // 拦截Object.keys,Object.getOwnPropertySymbols, Object.getOwnPropertyNames
        ownKeys(target){//遍历
            return Object.keys(target).filter(item=>item !== 'time');
        }
    });

    console.log('get',monitor.time);//相当于客户，通过proxy对象才能获取obj

    monitor.time = '2019';
    monitor.name = 'web';
    console.log("set", monitor.time,monitor);

    console.log("has",'name' in monitor,'time' in monitor);

    // delete monitor.name;
    // delete monitor._r;
    // console.log("delete",monitor);
    console.log("ownKeys",Object.keys(monitor));
}

{//reflect
    let obj ={
        time:'2019-02-29',
        name:'net',
        _r:123
    };

    console.log('Reflect-get',Reflect.get(obj,'name'));//方法与proxy基本相同
    Reflect.set(obj,'name','web');
    console.log('Reflect-set',obj);
    console.log('Reflect-has',Reflect.has(obj,'name'));
}

{//实际运用，数据校验
    function validator(target,validator){
        return new Proxy(target,{
            _validator:validator,
            set(target, key, value){
                if(target.hasOwnProperty(key)){//判断是否有key值
                    let va = this._validator[key];
                    if(va(value)){//判断value值是否符合条件
                        return Reflect.set(target, key, value);
                    }else {
                        throw Error(`不能设置${key}到${value}`);
                    }
                }else {
                    throw Error(`${key} 不存在`);
                }
            }
        })
    }

    const personValidators = {//对传入的对象加一个判断
        name(val){
            return typeof val === 'string';
        },
        age(val){
            return typeof val === 'number';
        }
    }

    class Person {
        constructor(name,age){
            this.name = name;
            this.age = age;
            return validator(this,personValidators);//返回的是实例对象通过proxy代理的对象
        }
    }

    let person = new Person('Han mei mei',30);
    console.log('person',person);

    // person.name = 18;
    person.name = 'Han';//不通过在原始对象中加判断来实现,通过实例对象的代理对象实现
    console.log(person);
}