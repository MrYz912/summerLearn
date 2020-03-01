//类
{//类的定义和实例
    class Parent{
        constructor(name = 'muke') {
            this.name = name;
        }
    }

    let parent = new Parent();
    console.log('实例',parent);
}

{//类的继承
    class Parent{
        constructor(name = 'muke') {
            this.name = name;
        }
    }

    class Child extends Parent{//通过extends继承
    }

    let child = new Child();
    console.log('继承',child);
}

{//继承传递参数
    class Parent{
        constructor(name = 'muke') {
            this.name = name;
        }
    }

    class Child extends Parent{
        constructor(name = "child") {
            super(name);//super进行参数的传递，super要写在构造函数的开头
            this.type = 'string';
        }
    }

    let child = new Child();
    console.log('继承传递参数',child);
}

{//getter,setter
    class Parent{
        constructor(name = 'muke') {
            this.name = name;
        }

        get longname() {//getter属性，不是方法
            return 'mk'+this.name;
        }

        set longname(value){//setter属性，不是方法
            this.name = value;
        }
    }

    let v = new Parent();
    console.log('getter',v.longname);
    v.name = 'hello';
    console.log('setter',v.longname);
}

{//静态方法
    class Parent{
        constructor(name = 'muke') {
            this.name = name;
        }

        static tell() {
            console.log('tell');
        }
    }

    Parent.tell();//要通过原始对象调用，实例不能调用
    // let parent = new Parent();
    // parent.tell();
}

{//静态属性
    class Parent{
        constructor(name = 'muke') {
            this.name = name;
        }

        static tell() {
            console.log('tell');
        }
    }

    Parent.type = 'test';//静态属性没有关键字，通过直接在类外定义属性实现
    console.log('静态属性',Parent.type);
}