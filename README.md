# jquery.face
这是一款基于jquery开发的表情选择插件，使得在开发网站评论模块时，添加表情的功能变得非常方便。
插件一共提供了42组表情插件，相当丰富，可以满足大数多的应用场景。在线示例：http://kyo4311.github.io/jquery.face/

# 插件使用
```html
<div class="jquery-face-wrap">
    <input  class="jquery-face-input" />
    <input class="jquery-face-handle" type="button" value="表情">
    <input class="parse" type="button" value="解析">
</div>
```

```js
$.face({
    path : 'face/' //需要设置一下表情图片地址
});
```


# 所有参数
```js
$.face({

    path : 'face/', //表情图片地址

    wrap: '.jquery-face-wrap', //一组表情选择器的外框
    input: '.jquery-face-input', //一组表情选择器的input框或是textara框
    handle: '.jquery-face-handle', //一组表情选择器的点击触发按钮

    autoParse : false, //当autoParse为true的时候有效,after的回调方法的第四个参数有效
    autoClose: false, //选择表情之后，正否自动关闭

    //在插入表情之前执行
    before:function(input, handle, code){
        //input 表情输入框的jquery对象
        //handle 触发按钮的jquery对象
        //code 当点选中的表情代码
        console.log(input, handle, code);
    },

    //在插入表情之后执行
    after:function(input, handle, code, parseHtml){
        //input 表情输入框的jquery对象
        //handle 触发按钮的jquery对象
        //code 当点选中的表情代码
        //parseHtml 表情输入框所有内容转换后的html，当autoParse为true的时候有效
        console.log(input, handle, code, parseHtml);
    }
});
```

# 返回对象 getParseHtml
.getParseHtml(str); 可以将字符串解析为Html
```js
var face = $.face({
    path : 'face/' //需要设置一下表情图片地址
});
$(document).on('click', '.parse', function(){
    var str = $(this).parents('.jquery-face-wrap').find('.jquery-face-input').val();
    var html = face.getParseHtml(str); //取获解析后的html字符串
    parseBox.html(html);
});
```