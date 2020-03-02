//iterator接口和for of方法
{//数组已经内置了iterator接口
    let arr = ['hello','world'];
    let map = arr[Symbol.iterator]();
    console.log(map.next());//{value: "hello", done: false}
    console.log(map.next());//{value: "world", done: false}
    console.log(map.next());//{value: undefined, done: true} done属性是表示是否遍历完了
}

{//对象没有内置iterator接口，但可以自己定义
    let obj = {
        start:[1,2,3],
        end: [6,7,8],
        [Symbol.iterator](){
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let len = arr.length;
            return{
                next(){//返回一个next方法
                    if(index < len){
                        return{//返回iterator具有的两个值，value和done
                            value: arr[index++],
                            done: false
                        }
                    }else {
                        return{
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    }
    for(let key of obj){
        console.log(key);
    }
}

{//for of用法
    let arr = ['hello','world'];
    for (let key of arr) {
        console.log(key);
    }
}