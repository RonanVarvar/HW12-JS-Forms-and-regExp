document.forms[0].onsubmit = function ( event ) {
    event.preventDefault();
    verifyUser();
};

function getLogin() {
    this.username = document.getElementsByClassName('с-form__username')[0].value;
    this.password = document.getElementsByClassName('с-form__password')[0].value;
<<<<<<< HEAD
    var user = {
        username: username,
        password: password
    };
=======
    var user = { username: username, password: password };
>>>>>>> f44e716248868fa627e4b99a7ec1730b67ca7653
    this.obj = JSON.stringify(user);
}

function verifyUser() {
    getLogin();

    var regExp1 = /^[a-z0-9]{2,15}$/i,
        regExp2 = /^(?=.*[#])(?=.*[$])[a-z0-9#$]{6,15}$/i,
        valid1 = regExp1.test(this.username),
        valid2 = regExp2.test(this.password);

    if (valid1 === true && valid2 === true) {
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
