(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, ".jquery-face{\n" +
"    z-index: 300;\n" +
"    width: 455px;\n" +
"    font-size: 12px;\n" +
"    background: #fff;\n" +
"    overflow: hidden;\n" +
"    position: absolute;\n" +
"    display: none;\n" +
"    border: 1px solid #E8E8E8;\n" +
"    user-select: none;\n" +
"    -o-user-select: none;\n" +
"    -moz-user-select: none;\n" +
"    -khtml-user-select: none;\n" +
"    -webkit-user-select: none;\n" +
"}\n" +
"\n" +
".jquery-face img{\n" +
"    border:0;\n" +
"}\n" +
"\n" +
".jquery-face a{\n" +
"    text-decoration: none;\n" +
"    color: #333;\n" +
"}\n" +
"\n" +
".jquery-face-head{\n" +
"    padding: 10px 10px 0 10px;\n" +
"    height: 20px;\n" +
"    overflow: hidden;\n" +
"\n" +
"}\n" +
".jquery-face-head a{\n" +
"    margin: 0 8px 0 0;\n" +
"    height: 30px;\n" +
"    line-height: 30px;\n" +
"    border-radius: 5px;\n" +
"    height: 20px;\n" +
"    line-height: 20px;\n" +
"    display: inline-block;\n" +
"    float: left;\n" +
"    padding: 0 5px;\n" +
"}\n" +
".jquery-face-head a.current{\n" +
"    background: #ccc;\n" +
"}\n" +
".jquery-face-body{\n" +
"    zoom:1;\n" +
"    padding: 1px;\n" +
"    margin: 9px 0 9px 9px;\n" +
"    overflow: hidden;\n" +
"}\n" +
"\n" +
".jquery-face-body a{\n" +
"    width: 22px;\n" +
"    width: 22px;\n" +
"    padding: 3px;\n" +
"    display: block;\n" +
"    float: left;\n" +
"    border:1px solid #e8e8e8;\n" +
"    margin: -1px 0 0 -1px;\n" +
"}\n" +
".jquery-face-body a:hover{\n" +
"    border:1px solid #0095cd;\n" +
"    position: relative;\n" +
"    z-index: 1;\n" +
"}"));
