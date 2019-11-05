# 一、对象原型

## 1.理解原型对象

每个对象拥有一个**原型对象**，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为**原型链 (prototype chain)**，它解释了为何一个对象会拥有定义在其他对象中的属性和方法。



原型链中的方法和属性**没有**被复制到其他对象——它们被访问需要通过前面所说的“原型链”的方式。

## 2.prototype属性

继承的属性和方法是定义在 `prototype` 属性之上的（你可以称之为子命名空间 (sub namespace) ）——那些以 `Object.prototype.` 开头的属性，而非仅仅以 `Object.` 开头的属性。`prototype` 属性的值是一个对象，我们希望被原型链下游的对象继承的属性和方法，都被储存在其中。



原型对象是一个内部对象，应当使用` __proto__` 访问。`prototype` 属性包含（指向）一个对象，你在这个对象中定义需要被继承的成员。

## 3.constructor属性

每个实例对象都从原型中继承了一个constructor属性，该属性指向了用于构造此实例对象的构造函数。只需在前面添加 `new` 关键字，便能将此函数作为构造器使用。

```js
var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
```

## 4.修改原型

为构造器的 `prototype` 属性添加一个新的方法：

```js
Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
}
```

整条继承链动态地更新了，任何由此构造器创建的对象实例都自动获得了这个方法。



这种继承模型下，上游对象的方法不会复制到下游的对象实例中；下游对象本身虽然没有定义这些方法，但浏览器会通过上溯原型链、从上游对象中找到它们。



一种极其常见的对象定义模式是，在构造器（函数体）中定义属性、在 `prototype` 属性上定义方法。

