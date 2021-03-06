document.forms[0].onsubmit = function (event) {
    event.preventDefault();

    verifyUser();
};

function getLogin() {
    this.username = document.getElementsByClassName('с-form__username')[0].value;
    this.password = document.getElementsByClassName('с-form__password')[0].value;

    var user = {
        username: username,
        password: password
    };

    this.obj = JSON.stringify(user);
}

function checkUsername() {
    getLogin();

    var regExp = /^[a-z0-9]{2,15}$/i,
        valid = regExp.test(this.username);

    return valid;
}

function checkPassword() {
    getLogin();

    var regExp = /^(?=.*[#])(?=.*[$])[a-z0-9#$]{6,15}$/i,
        valid = regExp.test(this.password);

    return valid;
}

function verifyUser() {
    if (checkUsername() && checkPassword()) {
        entryInStorage();
    } else {
        console.log('The username or password you entered is incorrect');
    }
}

function entryInStorage() {
    getLogin();

    if (typeof (localStorage) !== 'undefined') {
        localStorage.setItem('user', this.obj);
    } else {
        setCookie( 'user', this.obj );
    }
}

function setCookie( name, value, options ) {
    var expires = options.expires,
        updatedCookie = name + "=" + value,
        propValue,
        propName,
        date;

    options = options || {};
    value = encodeURIComponent(value);

    if (typeof expires == "number" && expires) {
        date = new Date();
        date.setTime(date.getTime() + expires * 1000);
        expires = options.expires = date;
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