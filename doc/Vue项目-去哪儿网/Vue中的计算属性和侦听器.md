## 计算属性


> 对于任何复杂逻辑都应该使用**计算属性**，而不是在模板内写表达式。直接在模板内写太多了逻辑会让模板太重且难以维护。

<br/>

### 基础例子

```html
<div id="app">
  <div>姓：{{lastName}}，名：{{firstName}}</div>
  <div>姓名：{{fullName}}</div>
</div>
```

```javascript
var vm = new Vue({
  el: "#app",
  data: {
    firstName: "zhen",
    lastName: "yang"
  },
  computed: {
    fullName () {
      return this.firstName + " " + this.lastName
    }
  }
})
```

输出的结果：

<img src="https://user-gold-cdn.xitu.io/2020/4/13/17173f71677c2c01?w=366&h=140&f=jpeg&s=8457" style="zoom: 50%;" />

从上述例子可以看出，我们可以利用计算属性来写一些逻辑代码。同时，计算属性**基于响应式依赖来进行缓存**，也就是说，当你依赖的值发生变化时，计算属性才会重新求值。这点不同于方法，调用方法每次都会重新执行函数，而使用计算属性可以节省开销。

<br/>

### 计算属性vs侦听属性

跟计算属性很像的有一个监听属性 `watch` ，`watch` 也可以在它监听的属性发生变化时去进行一些操作。但监听属性某些时候比较笨拙，像上面的例子，如果用监听器的话就只能写成这样：

```javascript
var vm = new Vue({
  el:"#app",
  data:{
    firstName: "zhen",
    lastName: "yang",
    fullName: "zhen yang"
  },
  watch: {
    firstName () {
      this.fullName = this.firstName + " " + this.lastName
    },
    lastName () {
      this.fullName = this.firstName + " " + this.lastName
    }
  } 
})
```

<br/>

## 侦听器


侦听器也非常强大，与计算属性的不同之处在于：

- `watch` ：监听的是属性值，属性值发生变化时能触发回调函数执行任何操作，可以执行异步操作
- `computed` ：监听的是依赖值，只要依赖值不发生变化，都会直接读取缓存复用，**不能执行异步操作**

<br/>

### 异步操作例子

延迟500ms输出

```html
<div id="app">
  {{fullName}}
  <div>firstName：<input v-model="firstName"/></div>
  <div>lastName：<input v-model="lastName"/></div>
</div>
```

```javascript
var vm = new Vue({
  el:"#app",
  data:{
    firstName: "zhen",
    lastName: "yang",
    fullName: "zhen yang"
  },
  watch: {
    firstName (val) {
      clearTimeout (this.first)
      this.first = setTimeout (() => {
       	this.fullName = val + " " + this.lastName
      }, 500)
    },
    lastName (val) {
      clearTimeout (this.last)
      this.last = setTimeout (() => {
       	this.fullName = this.firstName + " " + val
      }, 500)
    }
  } 
})
```

![](https://user-gold-cdn.xitu.io/2020/4/13/17173f7169be0398?w=227&h=90&f=gif&s=20587)



### handler方法和immediate属性

> 运用immediate属性结合handler方法，可以在watch刚绑定的时候，就执行监听属性中的函数。

<br/>

还是使用上面的数据，在刚进行watch绑定的时候，我们就输出一个“计算了一次”

```javascript
watch: {
  firstName: {
    handler (val) {
      console.log('计算了一次')
      this.fullName = val + " " + this.lastName
    },
    immediate: true
  }
}
```

<img src="https://user-gold-cdn.xitu.io/2020/4/13/17173f716acc763b?w=782&h=178&f=jpeg&s=20749" style="zoom:50%;" />



### deep属性

> deep属性设置为true能够监听对象值内部的变化，监听器会一层层地往下遍历，给对象的所有属性都加上这个监听器。

<br/>

#### 基础例子

```html
<div id="app">
  {{fullName}}
  <div>firstName：<input v-model="firstName"/></div>
  <div>lastName：<input v-model="lastName"/></div>
  <div>brotherFirstName：<input v-model="brother.firstName"/></div>
  {{brother.firstName}}
</div>
```

```javascript
var vm = new Vue({
  el: "#app",
  data: {
    firstName: "zhen",
    lastName: "yang",
    fullName: "zhen yang",
    brother: {
      firstName: "san"
    }
  },
  watch: {
    brother: {
      handler () {
        console.log('brother的firstName被更新')
      },
      deep: true
    }
  }
})
```

![](https://user-gold-cdn.xitu.io/2020/4/13/17173f716af18263?w=499&h=163&f=gif&s=22192)

brother是数据里的一个对象，我们直接修改brother里的属性firstName，deep设为true时，可以执行brother监听属性里绑定的函数，而不设deep值时，deep的默认值为false，不会触发函数。

<br/>

### 总结

计算属性适用的场景是，在模板中，有某个值依赖于其他的响应式对象或者通过计算属性计算得出。

而侦听器适用于根据某个值的变化来完成相对复杂的逻辑。