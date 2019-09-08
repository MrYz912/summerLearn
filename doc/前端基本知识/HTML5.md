# 一、新增的主体结构元素

## 1.article元素

**解释：**

![](assets/1563438172477.png)

**用法：**

```html
<article>
	...
</article>
```

- 可以嵌套使用
- 可以用来表示插件

## 2.section元素

**解释：**

![](assets/1563439873588.png)

**用法：**

```html
<section>
	...
</section>
```

- 将页面上的内容进行分块
  - 需要有标题和内容
- 不要作为设置样式的页面容器、
- 和article可以互相嵌套

## 3.nav元素

**解释：**

![](assets/1563444926915.png)

**用法：**

```html
<nav>
	...
</nav>
```

- 应用场景
  - 传统导航栏
  - 侧边栏导航
  - 页内导航
  - 翻页操作

## 4.aside元素

**解释：**

![1563629022343](assets/1563629022343.png)

用法：

```html
<aside>
	...
</aside>
```

## 5.time元素和pubdate属性

**time元素解释：**

![1563631345382](assets/1563631345382.png)

**pubdate属性解释：**

![1563631445176](assets/1563631445176.png)

# 二、新增的非主体结构元素

## 1.header元素

**解释：**

![1563699646045](assets/1563699646045.png)

**用法：**

```html
<header>
	<h1>...</h1>
    <a href="#">...</a>
    <nav>
    	<ul>
            <li><a href="#">...</a></li>
            <li><a href="#">...</a></li>
            <li><a href="#">...</a></li>
        </ul>
    </nav>
</header>
```

## 2.footer元素和hgroup元素

**footer元素解释：**

![1563700350972](assets/1563700350972.png)

**hgroup元素解释：**

![1563700415021](assets/1563700415021.png)

将标题和多个子标题放在hgroup元素中

```html
<hgroup>
	<h1>...</h1>
    <h2>...</h2>
</hgroup>
```

## 3.address元素

**解释：** 

![1563705087945](assets/1563705087945.png)

# 三、表单新增元素与属性

## 1.form属性和formaction属性

**form属性解释：**

![1563717830360](assets/1563717830360.png)

**formaction属性解释：**

![1563717894086](assets/1563717894086.png)

## 2.formmethod和formenctype属性

**formmethod属性解释：**

![1563718715303](assets/1563718715303.png)

**formenctype属性解释：**

![1563718785933](assets/1563718785933.png)

## 3.formtarget和autofoces属性

**formtarget属性解释：**

![1563967851266](assets/1563967851266.png)

![1563968337521](assets/1563968337521.png)

**autoforces属性解释：**

![1563968262776](assets/1563968262776.png)

## 4.required和lables属性

**required属性解释：**

![1563983810667](assets/1563983810667.png)

**lables属性解释：**

![1563983853146](assets/1563983853146.png)

## 5.control和placeholder属性

**control属性解释：**

![1564042727456](assets/1564042727456.png)

**placeholder属性：**

![1564042776540](assets/1564042776540.png)

## 6.list和AutoComplete属性

**list属性解释：**

![1564043631741](assets/1564043631741.png)

**AutoComplete属性解释：**

![1564043983932](assets/1564043983932.png)

![1564044014107](assets/1564044014107.png)

## 7.pattern和SelectionDirection属性

**pattern属性解释：**

![1564049916824](assets/1564049916824.png)

**SelectionDirection属性解释：**

![1564050338718](assets/1564050338718.png)

## 8.indeterminate属性

**indeterminate属性解释：**

![1564050800855](assets/1564050800855.png)

# 四、改良的input元素的种类

![1564066471838](assets/1564066471838.png)

![1564386071205](assets/1564386071205.png)

![1564386140804](assets/1564386140804.png)

![1564388049467](assets/1564388049467.png)

![1564388147676](assets/1564388147676.png)

**表单验证**

![1564388226547](assets/1564388226547.png)

# 五、增强的页面元素

## 1.figure、figcaption、details、summary 和 mark 元素

**figure元素解释：**

![1564390465408](assets/1564390465408.png)

**figcaption元素解释：**

![1564390606055](assets/1564390606055.png)

**details元素解释：**

![1564390672662](assets/1564390672662.png)

效果：

![1564390819728](assets/1564390819728.png)

**summary元素解释：**

![1564390994566](assets/1564390994566.png)

**mark元素解释：**

<mark>元素用于在文字中高亮。

## 2.progress 和 meter 元素

**progress元素解释：**

![1564397111346](assets/1564397111346.png)

![1564397126121](assets/1564397126121.png)

**meter元素解释：**

![1564403776074](assets/1564403776074.png)

## 3.ol、dl、cite和small元素

**ol元素解释：**

![1564404940046](assets/1564404940046.png)

![1564404963776](assets/1564404963776.png)

**dl元素解释：**

![1564405005944](assets/1564405005944.png)

**cite元素解释：**

![1564405067521](assets/1564405067521.png)

**small元素解释：**

![1564405132131](assets/1564405132131.png)

# 六、音频视频

## 1.音频播放

![1564578776288](assets/1564578776288.png)

如果不想用浏览器的音频播放器，可以用自己的javascript代码代替control

## 2.视频播放

![1564579873787](assets/1564579873787.png)

# 七、拖放

## 1.拖放

![1564649718586](assets/1564649718586.png)

## 2.拖放本地资源

见代码

# 八、canvas标签的使用

## 1.创建canvas标签

- 通过HTML创建
- 通过javascript创建
  - document.body.innerHTML

## 2.绘制图

通过API中提供的方法来绘制

```javascript
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
```

## 3.绘制圆

- 开始创建路径

```javascript
context.beginPath();
```

- 创建图形的路径

```javascript
context.arc(...);
```

- 关闭路径

```javascript
context.closePath();
context.fill();
```

- 设定绘制的样式，调用绘制的方法

## 4.绘制渐变图形

- 创建一个沿参数坐标指定的直线的渐变

```javascript
var gradient = context.createLinearGradient(x0, y0, x1, y1);
```

- 添加一个由偏移值和颜色值指定的断点到渐变

```javascript
gradient.addColorStop(offset,color);
```

## 5.绘制变形图形

- 平移

```javascript
context.translate(x,y)//x为原点移动的大小
```

- 缩放

```javascript
context.scale(x,y)//x为x的缩放倍数
```

- 旋转

```javascript
context.rotate(deg)//deg为旋转的角度
```

## 6.图形组合

![1565429902074](assets/1565429902074.png)

## 7.绘制图形阴影

![1565433835959](assets/1565433835959.png)

## 8.使用图像

![1565449962970](assets/1565449962970.png)

## 9.canvas应用

见代码

# 九、SVG

**SVG介绍：**

![1565602020252](assets/1565602020252.png)



引入外部SVG文件，使用`iframe`标签

# 十、响应式布局

## 1.响应式布局介绍

![1565618820326](assets/1565618820326.png)

## 2.响应式布局实例

利用css3中的Media Query

![1565618963315](assets/1565618963315.png)

# 十一、==Bootstrap使用==

`getbootstrap.com`

![1565711366935](assets/1565711366935.png)




















