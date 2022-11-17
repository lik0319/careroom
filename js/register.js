window.onload = function () {
    // 验证手机号
    var tel = document.getElementsByClassName('tel')[0];
    var tel_s = document.getElementsByClassName('tel_s')[0];
    var reg_tel = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    tel.onblur = function () {
        tel_s.innerHTML = '';
        tel_s.className = '';
        if (reg_tel.test(tel.value)) {
            tel_s.innerHTML = '正确';
            tel_s.className = 'green';
        } else if (tel.value == '') {
            tel_s.innerHTML = '';
            tel_s.className = '';
        } else {
            tel_s.innerHTML = '手机号格式不正确';
            tel_s.className = 'red';
        }
    }
    // 发送验证码
    var yzm = document.getElementsByClassName('yzm')[0];
    num_time_zyz = 60;
    var timer_zym;
    var num_yzm;
    yzm.onclick = function () {
        clearInterval(timer_zym);
        if (reg_tel.test(tel.value)) {
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


        } else {
            tel_s.innerHTML = '手机号格式不正确';
            tel_s.className = 'red';
        }
    }
    // 验证验证码
    var yzm_text = document.getElementsByClassName('yzm_text')[0];
    var yzm_text_s = document.getElementsByClassName('yzm_text_s')[0];
    yzm_text.onblur = function () {
        yzm_text_s.innerHTML = '';
        yzm_text_s.className = '';
        if (yzm_text.value == num_yzm) {
            yzm_text_s.innerHTML = '正确';
            yzm_text_s.className = 'green'
        } else if (yzm_text.value == '') {
            yzm_text_s.innerHTML = '';
            yzm_text_s.className = '';
        } else {
            yzm_text_s.innerHTML = '验证码不正确';
            yzm_text_s.className = 'red'
        }

    }
    // 密码验证
    var psw = document.getElementsByClassName('psw')[0];
    var psw_s = document.getElementsByClassName('psw_s')[0];
    var reg_psw = /^\d{6,8}$/;
    psw.onblur = function () {
        psw_s.innerHTML = '密码为6-8位数字';
        psw_s.className = '';
        if (reg_psw.test(psw.value)) {
            psw_s.innerHTML = '正确';
            psw_s.className = 'green';
        } else if (psw.value == '') {
            psw_s.innerHTML = '密码为6-8位数字';
            psw_s.className = '';
        } else {
            psw_s.innerHTML = '密码格式不正确';
            psw_s.className = 'red';
        }
    }

    // 立即注册
    var btn = document.getElementsByClassName('btn')[0];
    btn.onclick = function () {

        if (tel_s.innerHTML == '正确' && yzm_text_s.innerHTML == '正确' && psw_s.innerHTML == '正确') {
            window.location.href = './login.html';
            localStorage.setItem('user', tel.value);
            localStorage.setItem('password', psw.value);
        }


    }


    tel.onclick = function () {
        yzm_text.value = '';
        psw.value = ''
    }
}