// 获取退出登录按钮
var login = document.getElementsByClassName("login")[0];

// 判断用户是否登录成功
if (window.localStorage.getItem("isLogin")) {
    user.innerHTML = "欢迎你，" + window.localStorage.getItem("tel");
    // 退出登录功能
    login.onclick = function () {
        window.localStorage.removeItem("isLogin");
        setTimeout(function () {
            window.location.href = "./mylogin.html";
        }, 1000);
    };
}

