(function() {

    var face = require('./config.js');
    var css = require('./css.css'); //创建css
    var create = require('./create.js'); //创建组件的方法
    var insertText = require('./insertText.js'); //负责向textarea插入字符串
    var position = require('./position.js'); //根据按钮显示div的位置

    $.extend({
        sinaface: function(opt) {
            var index = 0;
            var div = create.creatDiv();
            var tab = create.creatTab(face);
            var handle
            var inputArea;

            div.find('.sina-face-head').append(tab);

            //触发按钮
            $(document)
                .on('click', '.sina-face-handle', function(e) {
                    handle = $(this);
                    inputArea = $(this).parents('.sina-face-wrap').find('.sina-face-area');

                    show(index);
                    e.stopPropagation();
                })
                //Tab切换
                .on('click', '.sina-face-head a', function(e) {
                    index = $(this).data('index');
                    $(this).addClass('current').siblings('a').removeClass();
                    show(index);
                    e.stopPropagation();
                })
                //点击图标插入
                .on('click', '.sina-face-body a', function(e) {
                    var code = $(this).data('code');
                    insertText(inputArea[0], code);
                    div.hide();
                })
                //阻止关闭
                .on('click', '.sina-face', function(e) {
                    e.stopPropagation();
                })
                //空白处点击，关闭表情层
                .on('click', function() {
                    div.hide();
                });



            function show() {
                var i = Math.max(index - 3, 0);
                var body = create.creatBody(face[index], opt);
                tab.eq(index).addClass('current').siblings('a').removeClass();
                div.find('.sina-face-body').html(body);
                div.show().appendTo('body');
                position(handle, div);
                tab.show().eq(i).prevAll('a').hide();
            }



        }
    });

}());