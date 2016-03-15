/**
 * jquery表情组件
 * 
 * author kyo4311
 * date: 2016-03-11
 * site: https://github.com/kyo4311/jquery.face
 */

(function() {

    var face = require('./config.js');
    var css = require('./css.css'); //创建css
    var create = require('./create.js'); //创建组件的方法
    var insertText = require('./insertText.js'); //负责向textarea插入字符串
    var position = require('./position.js'); //根据按钮显示div的位置

    $.extend({
        face: function(opt) {
            var index = 0;
            var div = create.creatDiv();
            var tab = create.creatTab(face);
            var handle;
            var inputArea;

            var defaults = {
                path: '', //设置图片路径
                wrap: '.jquery-face-wrap',
                input: '.jquery-face-input',
                handle: '.jquery-face-handle',
                autoParse: true,
                autoClose: true,
                before: function() {},
                after: function() {}
            };


            opt = $.extend({}, defaults, opt);

            div.find('.jquery-face-head').append(tab)

            //触发按钮
            $(document)
                .on('click', opt.handle, function(e) {
                    handle = $(this);
                    inputArea = $(this).parents(opt.wrap).find(opt.input);

                    show(index);
                    e.stopPropagation();
                })
                //Tab切换
                .on('click', '.jquery-face-head a', function(e) {
                    index = $(this).data('index');
                    $(this).addClass('current').siblings('a').removeClass();
                    show(index);
                    e.stopPropagation();
                })
                //点击图标插入
                .on('click', '.jquery-face-body a', function(e) {
                    var code = $(this).data('code');

                    opt.before.call(null, inputArea, handle, code);
                    insertText(inputArea[0], code);
                    var parseHtml = opt.autoParse ? parse(inputArea.val()) : '';
                    opt.after.call(null, inputArea, handle, code, parseHtml);

                    if (opt.autoClose) {
                        div.hide();
                    }

                })
                //阻止关闭
                .on('click', '.jquery-face', function(e) {
                    e.stopPropagation();
                })
                //空白处点击，关闭表情层
                .on('click', function() {
                    div.hide();
                });


            function parse(str) {
                return str.replace(/\[([^\[\]]+):([^\[\]]+):([^\[\]]+)\]/g, '<img src="' + opt.path + '$1/$2.gif" alt="$3">');
            }

            function show() {
                var i = Math.max(index - 3, 0);
                var body = create.creatBody(face[index], opt);
                tab.eq(index).addClass('current').siblings('a').removeClass();
                div.find('.jquery-face-body').html(body);
                div.show().appendTo('body');
                position(handle, div);
                tab.show().eq(i).prevAll('a').hide();
            }

            return {
                getParseHtml: parse
            };
        }
    });

}());