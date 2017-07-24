document.forms[0].onsubmit = function(e) {
    e.preventDefault();

    checkUser();
};

function getLogin() {
    this.username = document.getElementsByClassName('с-form__username')[0].value;
    this.password = document.getElementsByClassName('с-form__password')[0].value;
    var user = {username, password};
    this.obj = JSON.stringify(user);
}

function checkUser() {
    getLogin();

    var regExp1 = /^[a-z0-9]{2,15}$/i;
    var regExp2 = /^(?=.*[#])(?=.*[$])[a-z0-9#$]{6,15}$/i;
    var valid1 = regExp1.test(this.username);
    var valid2 = regExp2.test(this.password);

    if (valid1 === true && valid2 === true) {
        checkStorage();
    } else {
        console.log('The username or password you entered is incorrect');
    }
}

function checkStorage() {
    getLogin();

    if (typeof(localStorage) !== 'undefined') {
        localStorage.setItem('user', this.obj);
    } else {
        setCookie('user', this.obj);
    }
}

function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}