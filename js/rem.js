function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    client_w = client_w > 700 ? 800 : client_w;
    client_w = client_w < 350 ? 350 : client_w;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
}

setRem();

// 防抖
var timer = null;
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(setRem, 200);
}

var my = document.getElementsByClassName('my')[0];
my.onclick = function () {
    if (localStorage.getItem('true')) {
        location.href = './my.html'
    } else {
        location.href = './mylogin.html'
    }
}