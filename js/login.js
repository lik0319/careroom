
window.onload = function () {
    // 登录两种方式切换
    var ways = document.getElementsByClassName('way');
    var contents = document.getElementsByClassName('content1');
    var index_ = 0;
    var tel;
    var tel_s;
    if (index_ == 0) {
        tel = document.getElementsByClassName('tel')[0];
        tel_s = document.getElementsByClassName('tel_s')[0];
    } if (index_ == 1) {
        tel = document.getElementsByClassName('tel')[1];
        tel_s = document.getElementsByClassName('tel_s')[1];
    }
    for (var i = 0; i < ways.length; i++) {
        ways[i].setAttribute('index', i);
        ways[i].onclick = function () {
            index_ = this.getAttribute('index');
            for (var j = 0; j < contents.length; j++) {
                contents[j].style.display = 'none';
                contents[index_].style.display = 'block';
            }
            for (var k = 0; k < ways.length; k++) {
                ways[k].className = 'way';
                ways[index_].className = 'way b_red';
            }
            if (index_ == 0) {
                tel = document.getElementsByClassName('tel')[0];
                tel_s = document.getElementsByClassName('tel_s')[0];
            } if (index_ == 1) {
                tel = document.getElementsByClassName('tel')[1];
                tel_s = document.getElementsByClassName('tel_s')[1];
            }

            telReg();

        }
    }
    // 验证手机号
    var psw = document.getElementsByClassName('psw')[0];
    tel.onfocus = function () {
        psw.value = '';
    }


    var reg_tel;
    function telReg() {
        reg_tel = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        tel.onblur = function () {
            tel_s.innerHTML = '';
            tel_s.className = 'tel_s';
            if (reg_tel.test(tel.value)) {
                tel_s.innerHTML = '';
                tel_s.className = 'tel_s';
            } else if (tel.value == '') {
                tel_s.innerHTML = '';
                tel_s.className = 'tel_s';
            } else {
                tel_s.innerHTML = '手机号格式不正确';
                tel_s.className = 'tel_s red';
            }
        }
    }
    telReg();
    // 发送验证码
    var yzm = document.getElementsByClassName('yzm')[0];
    var yzm_text = document.getElementsByClassName('yzm_text')[0];
    var yzm_text_s = document.getElementsByClassName('yzm_text_s')[0];
    num_time_zyz = 60;
    var timer_zym;
    var num_yzm;
    yzm.onclick = function () {
        clearInterval(timer_zym);
        if (reg_tel.test(tel.value)) {
            if (localStorage.getItem('user') == null) {
                alert('请先注册');
            } else {
                yzm.innerHTML = `(${num_time_zyz}秒)重发`;
                timer_zym = setInterval(function () {
                    if (num_time_zyz >= 58) {
                        num_time_zyz--;
                        yzm.innerHTML = `(${num_time_zyz}秒)重发`;
                    } else {
                        num_yzm = Math.ceil(Math.random() * 10000);
                        if (num_yzm < 1000) {
                            num_yzm = '0' + num_yzm;
                        }
                        alert('【找房无忧】欢迎注册找房无忧！验证码为为' + num_yzm + '，为保障账户安全，请勿泄露给他人')
                        clearInterval(timer_zym);
                        yzm.innerHTML = `重发验证码`;
                    }

                }, 1000)
            }

        } else {
            tel_s.innerHTML = '手机号格式不正确';
            tel_s.className = 'red';
        }
    }

    // 验证验证码
    function yzmReg() {
        yzm_text.onblur = function () {
            yzm_text_s.innerHTML = '';
            yzm_text_s.className = 'yzm_text_s';
            if (yzm_text.value == num_yzm) {
                yzm_text_s.innerHTML = '正确';
                yzm_text_s.className = 'yzm_text_s green'
            } else if (yzm_text.value == '') {
                yzm_text_s.innerHTML = '';
                yzm_text_s.className = 'yzm_text_s';
            } else {
                yzm_text_s.innerHTML = '验证码不正确';
                yzm_text_s.className = 'yzm_text_s red'
            }
            tel.onfocus = function () {
                yzm_text.value = '';
                yzm_text_s.innerHTML = '';
            }


        }
    }
    yzmReg();
    // 点击登录
    var content1_login = document.getElementsByClassName('content1_login')[0];

    content1_login.onclick = function () {
        telReg();
        if (tel.value != '' && psw.value != '') {
            if (localStorage.getItem('user') == tel.value && localStorage.getItem('password') == psw.value) {
                location.href = './mylogin.html'
            }
            else if (Boolean(tel_s.innerHTML != '')) {
                alert('手机号格式不正确')
            }
            else if (localStorage.getItem('user') == null) {
                alert('请先注册');
            } else {
                alert('账号或者密码不正确')
            }
        } else {
            alert('请将信息填写完整！')
        }
    }
    // 验证并登录

    var yz_login = document.getElementsByClassName('yz_login')[0];
    var yzm_text = document.getElementsByClassName('yzm_text')[0];
    yz_login.onclick = function () {
        telReg();
        yzmReg();
        if (tel.value != '' && yzm_text.value != '') {
            if (localStorage.getItem('user') == tel.value && Boolean(yzm_text_s.innerHTML == '正确')) {
                location.href = './mylogin.html'
            } else if (Boolean(tel_s.innerHTML != '')) {
                alert('手机号格式不正确')
            }
            else if (localStorage.getItem('user') == null) {
                alert('请先注册');
            } else {
                alert('账号不正确')
            }
        } else {
            alert('请将信息填写完整！')
        }
    }












}