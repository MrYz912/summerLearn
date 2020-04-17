## 插槽内容

> 插槽，也就是slot，在Vue中的作用相当于一个模板，通过父组件里的这个模板，就能决定子组件里使用这个模板的时候，显不显示，显示什么，怎么显示。

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

