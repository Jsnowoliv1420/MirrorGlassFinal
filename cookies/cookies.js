function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Función para obtener una cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Función para borrar una cookie
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Función para verificar el consentimiento de cookies
function checkCookieConsent() {
    var consent = getCookie("cookieConsent");
    if (consent) {
        document.getElementById('cookie-banner').style.display = 'none';
    }
}

// Manejo de eventos para botones de cookies
document.getElementById('accept-cookies').addEventListener('click', function() {
    setCookie("cookieConsent", "accepted", 365);
    document.getElementById('cookie-banner').style.display = 'none';
    console.log('Cookies aceptadas');
});

document.getElementById('decline-cookies').addEventListener('click', function() {
    setCookie("cookieConsent", "declined", 365);
    document.getElementById('cookie-banner').style.display = 'none';
    console.log('Cookies rechazadas');
});

// Verificar consentimiento de cookies al cargar la página
checkCookieConsent();