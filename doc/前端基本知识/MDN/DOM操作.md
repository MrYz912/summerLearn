# DOM操作

### getAttribute()方法

通过元素节点的属性名称获取属性的值

**语法：**

`elementNode.getAttribute(name)`

**具体解释：**

1.`elementNode`为使用getElementById()、getElementsByTagName()等方法，获取到的元素节点。

2.`name`为要想查询的元素节点的名字

**例子：**

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

**例子：**

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

**例子：**

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

**例子：**

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

**例子：**

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

**例子：**

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

**例子：**

<img src="/Users/yz/Library/Application Support/typora-user-images/image-20200130155842541.png" alt="image-20200130155842541" style="zoom:50%;" />



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

<img src="/Users/yz/Library/Application Support/typora-user-images/image-20200130172406062.png" alt="image-20200130172406062" style="zoom:50%;" />



注意：这里应该使用反向遍历，因为removeChild()方法是动态删除的，使用反向遍历能确保每次删除的都是最后一个，而使用正向遍历则因为每次删除，元素对应的下标都在变化，所以不能成功删除。



