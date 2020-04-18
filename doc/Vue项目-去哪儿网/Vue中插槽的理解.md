## 插槽内容

> 插槽，也就是slot，在Vue中的作用相当于一个模板，通过父组件里的这个模板，就能决定子组件里使用这个模板的时候，显不显示，显示什么，怎么显示。

<br/>

首先来个简单的例子：

合成组件：

```html
<child>
  <p>yang</p>
</child>
```

`child` 里的模板：

```html
<div>
  <P>Hello</P>
  <slot></slot>
</div>
```

显示的效果：

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gdx7g6415qj306w05gmx1.jpg" style="zoom:50%;" />

在上面这个例子里，子组件里的插槽被父组件使用了，所以父组件里的效果就相当于：

```html
<div>
  <P>Hello</P>
  <p>yang</p>
</div>
```

插槽里可以包含任何模板代码，包括HTML，其他组件。

<br/>

## 后备内容

在插槽中，我们可以提供后备内容，也就是默认值。它只会在没有提供内容时被渲染，如果提供内容，就会取代后备内容。

```html
<div>
  <P>Hello</P>
  <slot>World</slot>
</div>
```

假如我们在父组件里的模板没有提供内容：

```html
<child></child>
```

那么显示效果就为：

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gdy2jowexlj304q04k745.jpg" style="zoom:50%;" />

<br/>

## 具名插槽

在我们需要多个插槽时，我们就不能使用上面的匿名插槽了，这时，我们可以给插槽起名字，用于区分不同的插槽，在Vue2.6.0之后，使用了新的语法。

我们可以在一个 `<template>` 元素上使用 `v-slot` ，并以 `v-slot` 的参数形式提供其名称：

```html
<body-content>
  <template v-slot:header>
    <div class="header">header</div>
  </template>
  <template v-slot:footer>
    <div class="footer">footer</div>
  </template>
</body-content>
```

在子组件中，我们可以通过 `name` 这个属性，定义 `<slot>` 的名字：

```html
<div>
  <slot name="header"></slot>
  <div class='content'>content</div>
  <slot name="footer"></slot>
</div>
```

显示的效果就是：

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gdy92ab2r0j305y05awef.jpg" style="zoom:50%;" />

> 注意 **`v-slot` 只能添加在 `<template>` 上** (只有[一种例外情况](https://cn.vuejs.org/v2/guide/components-slots.html#独占默认插槽的缩写语法))，这一点和已经废弃的 [`slot` attribute](https://cn.vuejs.org/v2/guide/components-slots.html#废弃了的语法) 不同。

<br/>

v-bind也有缩写，缩写就是把参数之前的所有内容(`v-slot:`)换成字符 `#` 。例如 `v-slot:header` 就可以写成 `#header` ：

```html
<body-content>
  <template #header>
    <div class="header">header</div>
  </template>
  <template #footer>
    <div class="footer">footer</div>
  </template>
</body-content>
```

<br/>

## 作用域插槽

> 因为父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的，所以我们如果有时要让插槽内容访问到子组件中才有的数据的话，就要用到作用域插槽。

<br/>

我们可以在子组件中，把你想要传递的数据作为 `<slot>` 元素的一个属性绑定上去。`<current-user>`  里的模板：

```html
<span>
  <slot :user="user">
    {{ user.lastName }}
  </slot>
</span>
```

被绑定在 `<slot>` 元素上的属性被称为**插槽prop**。在父组件中，我们就可以通过带值的 `v-slot` 来定义我们提供的插槽 prop 的名字：

```html
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
```

这样我们就能在父组件中访问到子组件才有的数据了。



