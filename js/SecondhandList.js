//二手房列表
var list = document.getElementsByClassName('list')[0];

var li_ = document.getElementsByClassName('li');
var item_ = document.getElementsByClassName('item');
var item_a_ = document.getElementsByClassName('item_a');
var item_s_ = document.getElementsByClassName('item_s');
console.log(item_s_);
console.log(item_);
for (var i = 0; i < li_.length; i++) {
    li_[i].setAttribute('index', i);
    li_[i].onclick = function () {
        var index_ = this.getAttribute('index');
        console.log(index_);
        list.className = 'list ul';
        for (var j = 0; j < item_.length; j++) {
            item_[j].style.display = 'none';
            item_[index_].style.display = 'block';
        }
        for (var a = 0; a < item_s_.length; j++) {
            item_s_[a].style.display = '5px solid #ccc';
            item_s_[index_].style.display = '5px solid #ff8a00';
        }
        for (var k = 0; k < item_a_.length; k++) {
            item_a_[k].className = 'item_a';
            item_a_[index_].className = 'item_a red';
        }
        // for (var d = 0; d < item_s_.length; d++) {
        //     //  border-top: 5px solid #ccc;
        //     item_s_[d].style.borderTop = '5px solid #ccc'
        //     item_s_[index_].style.borderTop = '5px solid #ff8a00;'
        //     console.log(item_s_[index_]);
        // }
    }
}



