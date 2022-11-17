// 获取退出登录按钮
var btn = document.getElementsByClassName("btn")[0];
var user = document.getElementsByClassName("user")[0];

// 判断用户是否登录成功
if (window.localStorage.getItem("true")) {
    user.innerHTML = "欢迎你，" + window.localStorage.getItem("true");
    // 退出登录功能
    btn.onclick = function () {
        window.localStorage.removeItem("true");
        setTimeout(function () {
            window.location.href = "./mylogin.html";
        }, 1000);
    };
}

