## 指令

| 名字    | 功能                                    | 简写 |
| ------- | --------------------------------------- | ---- |
| v-on    | 监听事件                                | @    |
| v-bind  | 向子组件传值                            | :    |
| v-for   | 循环                                    |      |
| v-model | 表单输入绑定                            |      |
| v-text  | 将innerText设为对应的值                 |      |
| v-html  | 将innerHTML设为对应的值                 |      |
| v-if    | 返回值决定标签是否展示                  |      |
| v-else  | 和v-if结合使用，紧贴在v-if后面          |      |
| v-show  | 和v-if功能一样，但值为false时，隐藏标签 |      |



## 数组的变异方法

| 名字        | 功能                                                         |
| ----------- | ------------------------------------------------------------ |
| `push()`    | 在数组的末尾添加一个数                                       |
| `pop()`     | 在数组的末尾删除一个数                                       |
| `shift()`   | 删除数组开头第一个数                                         |
| `unshift()` | 将一个或多个元素添加到数组的开头，并返回该数组的新长度       |
| `splice()`  | 根据条件切割数组                                             |
| `sort()`    | 通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。 |
| `reverse()` | 将数组倒序                                                   |



## Vue中的set()方法

改变数组或对象的值

### 数组

- `Vue.set(array, key, value)` 全局的方法
- `vm.set(array, key, value)` 实例的方法

### 对象

- `Vue.set(object, key, value)` 全局的方法
- `vm.set(object, key, value)` 实例的方法



在子组件中监听事件使用`.native`可以绑定原生事件

```html
<div id="app">
  <div @click.native="handleClick"></div>
</div>
<script>
	var vm = new Vue({
    el:"app",
    methods:{
      handleClick: function() {
        alert("hello world");
      }
    }
  });
</script>
```



## Vue中动画特效

### 过渡

- 显示

```html
<transition name="fade">
  <div v-if="show">hello world</div>
</transition>
```

在显示第一帧动画前，会在transition标签里的标签添加 `fade-enter` 和`fade-enter-active` 两个class，在加载第一帧后，`fade-enter` 会被销毁，一直到动画完成，`fade-enter-active` 才被销毁。可以在css中设置效果

```css
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s;
}
```



- 消失

在消失第一帧动画前，会在transition标签里的标签添加 `fade-leave-to` 和 `fade-leave-active` 两个class，在

消失第一帧动画后，`fade-leave-to` 会被销毁，一直到动画完成，`fade-leave-active` 才会被销毁

```css
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
	transition: opacity 2s;
}
```

