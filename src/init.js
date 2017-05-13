

DictionaryView.init(window);
DictionaryView.loadPage();



// 启动插件监听
// $("body").on("click", checkSelection);
$(document).on("click", function(){
    Dictionary.checkSelection(window);
});

// frame 要分别注册事件，因为　getSelection() 取不到frame中选中的内容　(spring javadoc 页面)
for (var i = 0; i < window.frames.length; i++){
    var thisFrame = window.frames[i];
    $(window.frames[i].document).on("click", function(){
        Dictionary.checkSelection(thisFrame);
    })
}