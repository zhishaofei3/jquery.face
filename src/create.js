module.exports = {
    creatTab: function(face) {
        var html = '';
        $.each(face, function(index, item) {
            item.index = index;
            var tpl = '<a href="javascript:;" data-index="#{index}" data-cn="#{cn}" data-en="#{en}">#{cn}</a>';
            html += template(tpl, item);
        });
        return $(html);
    },
    creatDiv: function() {
        return $(require('./layout.html'));
    },
    creatBody: function(res, opt) {
        return $.map(res.data, function(item) {
            var text = item.split(',');
            var data = {
                name: res.en,
                src: opt.path + res.en + '/' + text[0],
                cn: text[1],
                en: text[0]
            };
            var tpl = '<a href="javascript:;" title="#{cn}" data-code="[#{name}:#{cn}]"><img src="#{src}_thumb.gif" width="22" height="22" alt="#{cn}"/></a>';
            return template(tpl, data);
        }).join('');
    }
};


function template(template, data) {
    return template.replace(/#\{([\s\S]+?)\}/g, function(a, b) {
        return data[b];
    });
}