document.forms[0].onsubmit = function(e) {
    e.preventDefault();

    verifyUser();
};

function getLogin() {
    this.username = document.getElementsByClassName('с-form__username')[0].value;
    this.password = document.getElementsByClassName('с-form__password')[0].value;
    this.user = { username: username, password: password};
   // this.obj = JSON.stringify(user);
}

function verifyUser() {
    getLogin();

    var regExp1 = /^[a-z0-9]{2,15}$/i;
    var regExp2 = /^(?=.*[#])(?=.*[$])[a-z0-9#$]{6,15}$/i;
    var valid1 = regExp1.test(this.username);
    var valid2 = regExp2.test(this.password);

    if (valid1 === true && valid2 === true) {
        entryinStorage();
    } else {
        console.log('The username or password you entered is incorrect');
    }

}

function entryinStorage() {
    getLogin();

    if (typeof(localStorage) !== 'undefined') {
        localStorage.setItem('user', this.user);
    } else {
        setCookie('user', this.user);
    }

}

function setCookie(name, value, options) {
    var expires = options.expires;
    var updatedCookie = name + "=" + value;
    var propValue;
    var propName;
    var d;

    options = options || {};
    value = encodeURIComponent(value);

    if (typeof expires == "number" && expires) {
        d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }

    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    for (propName in options) {
        updatedCookie += "; " + propName;
        propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}