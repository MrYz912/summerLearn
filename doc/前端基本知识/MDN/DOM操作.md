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



### 节点属性：

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

