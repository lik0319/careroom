//二手房列表
var list = document.getElementsByClassName('list')[0];
var hidden = document.getElementsByClassName('hidden')[0];
var li_ = document.getElementsByClassName('li');
var item_ = document.getElementsByClassName('item');
var item_a_ = document.getElementsByClassName('item_a');
var item_s_ = document.getElementsByClassName('item_s');
// 点击导航栏变颜色 箭头变颜色 变上箭头
var index_;
for (var i = 0; i < li_.length; i++) {
    li_[i].setAttribute('index', i);
    li_[i].onclick = function () {
        window.event ? window.event.cancelBubble = true : event.stopPropagation();
        index_ = this.getAttribute('index');
        list.className = 'list ul';
        hidden.style.display = 'block';
        for (var j = 0; j < item_.length; j++) {
            item_[j].style.display = 'none';
            item_[index_].style.display = 'block';
        }
        for (var k = 0; k < item_a_.length; k++) {
            item_a_[k].className = 'item_a';
            item_a_[index_].className = 'item_a red';
        }
        for (var s = 0; s < item_s_.length; s++) {
            item_s_[s].style.borderTop = ' 5px solid #ccc'
            item_s_[s].style.borderBottom = ' 5px solid transparent'
            item_s_[s].style.top = '2rem';
            item_s_[index_].style.borderTop = ' 5px solid transparent'
            item_s_[index_].style.borderBottom = ' 5px solid #ff8a00'
            item_s_[index_].style.top = '1.2rem';
        }
    }
}
// 点击页面导航内容恢复
document.onclick = function () {
    list.className = 'list';
    hidden.style.display = 'none';
    for (var j = 0; j < item_.length; j++) {
        item_[j].style.display = 'none';
    }
    for (var k = 0; k < item_a_.length; k++) {
        item_a_[k].className = 'item_a';

    }
    for (var s = 0; s < item_s_.length; s++) {
        item_s_[s].style.borderTop = ' 5px solid #ccc'
        item_s_[s].style.borderBottom = ' 5px solid transparent'
        item_s_[s].style.top = '2rem';
    }
}

for (var j = 0; j < item_.length; j++) {
    item_[j].onclick = function () {
        this.style.display = 'block';
        window.event ? window.event.cancelBubble = true : event.stopPropagation();
    }
}




