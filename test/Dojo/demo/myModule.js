define([
    // 在这个依赖项列表中,dojo/dom模块是这个模块所需要的
    'dojo/dom'
], function (dom) {
    //一旦依赖项列表中的所有模块都已加载，则执行此操作=>调用函数来定义demo/myModule模块。
    //dojo/dom模块作为第一个参数传递给这个函数;依赖项列表中的其他模块将作为后续参数传入。
    let oldText = {};
    //这个返回的对象成为这个模块的定义值。
    return {
        //设置text
        setText: function (id, text) {
            let node = dom.byId(id);
            oldText[id] = node.innerHTML;
            node.innerHTML = text;
        },
        //还原text
        restoreText: function (id) {
            let node = dom.byId(id);
            node.innerHTML = oldText[id];
            delete oldText[id];
        }
    }

});