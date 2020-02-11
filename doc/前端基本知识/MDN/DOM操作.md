# DOM操作

### DOM是什么

文档对象模型(DOM)定义访问和处理HTML文档的标准方法。DOM将HTML文档呈现为带有元素、属性、文本的数结构(结构树)。简单来说，我们可以通过DOM来对HTML文档进行操作。



### 获取元素的方法

**getElementById()方法**

返回带有指定id的节点对象的集合

**语法：** 

`document.getElememtById("id")`

**例子：** 获取id为con的p标签

<img src="/Volumes/WindowsD/summerLearn/program/summerLearn/doc/前端基本知识/MDN/DOM操作.assets/image-20200207174233713.png" alt="image-20200207174233713" style="zoom:50%;" />



**getElementsByName()方法**

返回带有指定名称的节点对象的集合

**语法：** 

`document.getElementsByName(name)`

**例子：** 获取name为myt的元素，同时输出获取的元素节点的长度

<img src="/Volumes/WindowsD/summerLearn/program/summerLearn/doc/前端基本知识/MDN/DOM操作.assets/image-20200207175308416.png" alt="image-20200207175308416" style="zoom:50%;" />



**getElementsByTagName()方法**

返回带有指定标签名的节点对象的集合。返回元素的顺序是它们在文档中的顺序

**语法：** 

`document.getElementsByTagName(Tagname)`

**例子：** 获取li标签并输出内容，长度

<img src="/Volumes/WindowsD/summerLearn/program/summerLearn/doc/前端基本知识/MDN/DOM操作.assets/image-20200207180021563.png" alt="image-20200207180021563" style="zoom:50%;" />



### innerHTML属性

用于获取或替换HTML元素的内容

**例子：** 修改h2标签内容并输出

<img src="/Volumes/WindowsD/summerLearn/program/summerLearn/doc/前端基本知识/MDN/DOM操作.assets/image-20200211162838885.png" alt="image-20200211162838885" style="zoom:50%;" />



### 改变HTML样式

**语法：** 

`Object.style.property = new style` Object 是获取的元素对象

**基本属性表(prorperty)**

<img src="/Volumes/WindowsD/summerLearn/program/summerLearn/doc/前端基本知识/MDN/DOM操作.assets/image-20200211170331633.png" alt="image-20200211170331633" style="zoom:50%;" />



### 显示与隐藏（display属性）

**语法：** 

`Object.style.display = value`

**value取值：** 

<img src="/Volumes/WindowsD/summerLearn/program/summerLearn/doc/前端基本知识/MDN/DOM操作.assets/image-20200211170803780.png" alt="image-20200211170803780" style="zoom:50%;" />



### getAttribute()方法

通过元素节点的属性名称获取属性的值

**语法：**

`elementNode.getAttribute(name)`

**具体解释：**

1.`elementNode`为使用getElementById()、getElementsByTagName()等方法，获取到的元素节点。

2.`name`为要想查询的元素节点的名字

**例子：**使用`getAttribute()`获取LI标签的title值。

```html
<ul>  
    <li title="第1个li">HTML</li>  
    <li>CSS</li>  
    <li title="第3个li">JavaScript</li>  
    <li title="第4个li">Jquery</li>  
    <li>Html5</li>  
</ul>  
<script type="text/javascript">
    var con=document.getElementsByTagName("li");
    for (var i=0; i< con.length;i++){
      var text=con[i].getAttribute("title");
      if(text!=null){
        document.write(text+"<br>");
      }
    }
 </script> 
```


### setAttribute()方法

增加一个指定名称和值的新属性，或者把一个现有的属性设定为指定的值。

**语法：**

`elementNode.setAttribute(name,value)`

**具体解释：**

1.`name`：要设置的属性名

2.`value`：要设置的属性值

**例子：**使用`getAttribute()`方法获取元素属性值，保存在变量`text`。

​			使用`setAttribute()`方法设置title属性值。

```html
  <ul>  
    <li title="JS">JavaScript</li>  
    <li title="JQ">JQuery</li>  
    <li title="">HTML/CSS</li>  
    <li title="JAVA">JAVA</li>  
    <li title="">PHP</li>  
  </ul>  
  <h1>以下为li列表title的值,当title为空时，新设置值为"WEB前端技术":</h1>
<script type="text/javascript">
  var Lists=document.getElementsByTagName("li");
  for (var i=0; i<Lists.length;i++){
    var text=Lists[i].getAttribute("title");
    document.write(text +"<br>");
    if(text==""){
      Lists[i].setAttribute("title","WEB前端技术");
      document.write(Lists[i].getAttribute("title")+"<br>");
    }
  }
</script>
```



### 节点属性

DOM 节点有三个重要的属性 ：

1. nodeName : 节点的名称

2. nodeValue ：节点的值

3. nodeType ：节点的类型

**例子：**获取所有LI标签，并输出相应节点的名称，节点的值，节点的类型。

```html
  <ul>
     <li>javascript</li>
     <li>HTML/CSS</li>
     <li>jQuery</li>     
  </ul>
  <script type="text/javascript">
    var text=document.getElementsByTagName("li");
    for(let i=0;i<text.length;i++){
        document.write(text[i].nodeName+"<br>");
        document.write(text[i].nodeValue+"<br>");
        document.write(text[i].nodeType+"<br>");
    }
  </script>
```



### 访问子节点

访问选定元素节点下的所有子节点的列表，返回的值可以看作是一个数组

**语法：**

`elementNode.childNodes`

**例子：**获取子节点并输出相应属性

```html
<div>
  javascript  
  <p>javascript</p>
  <div>jQuery</div>
  <h5>PHP</h5>
</div>
<script type="text/javascript">
  var x=document.getElementsByTagName("div")[0].childNodes;
  for(let i=0;i<x.length;i++){
      document.write("节点属性："+x[i].nodeType+"<br />");
  }
</script>
```



**子节点第一和最后一项**

**语法：**

`node.firstChild`

`node.lastChild`

**例子：**找到指定元素(div)的第一个和最后一个子节点

```html
<div id="con">
  <p>javascript</p>
  <div>jQuery</div>
  <h5>PHP</h5>
</div>
<script type="text/javascript">
  //输出的是p标签前面的换行符
  var x=document.getElementById("con");
  document.write("第一个子节点："+x.firstChild+"<br />");//第一个子节点：[object Text]
  document.write("最后一个子节点："+x.lastChild+"<br />");//最后一个子节点：[object Text]
</script>
```

```html
<div id="con">
  <p>javascript</p>
  <div>jQuery</div>
  <h5>PHP</h5>
</div>
<script type="text/javascript">
  //输出的是真正想要的结果
  var x=document.getElementById("con");
  document.write("第一个子节点："+x.firstElementChild+"<br />");//第一个子节点：[object HTMLParagraphElement]
  document.write("最后一个子节点："+x.lastElementChild+"<br />");//第一个子节点：[object HTMLParagraphElement]
</script>
```



### 访问父节点

获取指定节点的父节点

**语法：**

`elementNode.parentNode`

**例子：**使用parentNode，将“HTML/CSS”课程内容输出

```html
<ul id="con">
<li id="lesson1">javascript
  <ul> 
      <li id="tcon"> 基础语法</li>
      <li>流程控制语句</li>
      <li>函数</li>
      <li>事件</li>
      <li>DOM</li>
  </ul>
</li>
<li id="lesson2">das</li>
<li id="lesson3">dadf</li>
<li id="lesson4">HTML/CSS 
  <ul>
    <li>文字</li>
    <li>段落</li>
    <li>表单</li>
    <li>表格</li>  
  </ul> 
</li></ul>  
<script  type="text/javascript">    
   var mylist = document.getElementById("tcon"); 
   var x = mylist.parentNode.parentNode.parentNode.lastChild.firstChild;
   document.write(x.nodeValue);
</script> 
```



**兄弟节点**

后面的节点：

`nodeObject.nextSibling`

前面的节点：

`nodeObject.previousSibling`



### 插入节点

在指定节点的最后一个子节点列表之后添加一个新的子节点

**语法：**

`appendChild(newnode)`

**例子：**为UL标签添加一个新项PHP

<img src="/Volumes/WindowsD/summerLearn/program/summerLearn/doc/前端基本知识/MDN/DOM操作.assets/image-20200130155842541-0983427.png" alt="image-20200130155842541" style="zoom:50%;" />



**插入节点insertBefore()**

在已有的子节点前插入一个新的子节点

**语法：**

`insertBefore(newnode,node)`

**参数:**

newnode: 要插入的新节点。

node: 指定此节点前插入节点。



### 删除节点

removeChild() 方法从子节点列表中删除某个节点。如删除成功，此方法可返回被删除的节点，如失败，则返回 NULL。

**语法：**

`nodeObject.removeChild(node)`

**例子：**通过清除按钮把节点清除

<img src="/Volumes/WindowsD/summerLearn/program/summerLearn/doc/前端基本知识/MDN/DOM操作.assets/image-20200130172406062.png" alt="image-20200130172406062" style="zoom:50%;" />



注意：这里应该使用反向遍历，因为removeChild()方法是动态删除的，使用反向遍历能确保每次删除的都是最后一个，而使用正向遍历则因为每次删除，元素对应的下标都在变化，所以不能成功删除。



### 替换节点

通过`repalceChild()`方法替换子节点,返回被替换对象的引用。

**语法：**

`node.replaceChild(newnode,oldnode)`

**例子：**通过replaceChild()实现将b标签换成i标签

<img src="/Volumes/WindowsD/summerLearn/program/summerLearn/doc/前端基本知识/MDN/DOM操作.assets/image-20200131174434271.png" alt="image-20200131174434271" style="zoom:50%;" />



### 创建节点

**创建元素节点**

使用createElement()能创建元素节点。此方法返回一个Element对象。

**语法：**

`document.createElement(tagName)；`  `tagName`用来指明创建元素的类型

**例子：**在HTML文档中创建一个慕课网的链接，并设置属性

<img src="/Volumes/WindowsD/summerLearn/program/summerLearn/doc/前端基本知识/MDN/DOM操作.assets/image-20200131215758809.png" alt="image-20200131215758809" style="zoom:50%;" />



**创建文本节点**

使用createTextNode()能创建新的文本节点，返回新创建的Text节点

**语法：**

`document.createTextNode(data);` `data`可规定此节点的文本

**例子：**创建一个p标签，设置calssName属性为JavaScript，创建一个文本节点"I love JavaScript"

<img src="/Volumes/WindowsD/summerLearn/program/summerLearn/doc/前端基本知识/MDN/DOM操作.assets/image-20200131220956026.png" alt="image-20200131220956026" style="zoom:50%;" />



### 浏览器可视区域

在不同浏览器都适用的方案

```javascript
var w= document.documentElement.clientWidth
      || document.body.clientWidth;
var h= document.documentElement.clientHeight
      || document.body.clientHeight;
```



**网页尺寸**

scrollHeight和scrollWidth，获取网页内容高度和宽度(不包括边线)。

在不同浏览器都适用的方案

```javascript
var w=document.documentElement.scrollWidth
   || document.body.scrollWidth;
var h=document.documentElement.scrollHeight
   || document.body.scrollHeight;
```



**网页尺寸**

获取网页内容高度和宽度(包括滚动条等边线，会随窗口的显示大小改变)。

在不同浏览器都适用的方案

```javascript
var w= document.documentElement.offsetWidth
    || document.body.offsetWidth;
var h= document.documentElement.offsetHeight
    || document.body.offsetHeight;
```



**网页卷去的距离和偏移量**

<img src="/Volumes/WindowsD/summerLearn/program/summerLearn/doc/前端基本知识/MDN/DOM操作.assets/image-20200206180014604.png" alt="image-20200206180014604" style="zoom:45%;" />



offsetLeft 和 offsetTop 用来得到对象的位置，到距离自身最近的（带有定位的）父元素的左侧/顶部 的距离，如果所有父级都没有定位则以body为准。

scrollTop和scrollLeft被卷去部分的顶部/左侧到可视区域顶部/左侧 的距离。

