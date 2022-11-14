function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    client_w = client_w > 800 ? 800 : client_w;
    client_w = client_w < 350 ? 350 : client_w;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
}
setRem();
var flg = true;
window.onresize = function () {
    if (flg) {
        setRem();
        flg = false;
    }
    setTimeout(function () {
        flg = true;
    }, 200)

}