// Check();


var theme = Cookies.get("theme"); // Предполагается, что у вас есть объект Cookies
var link = document.createElement('link');

function ChangeTheme() {
    if(theme == "light") {
        Cookies.set("theme", "dark");
    } else if(theme == "dark") {
        Cookies.set("theme", "light");
    }
    theme = Cookies.get("theme"); // Обновляем значение theme
    Check();
}

function Check() {
    if(theme === "light") {
        InstallTheme("style");
    } else if(theme === "dark") {
        InstallTheme("style2");
    } else {
        var themeCookies = detectBrowserTheme();
        InstallTheme(themeCookies);
        Cookies.set("theme", themeCookies);
    }
}

function InstallTheme(cssFille){

    var stylesheet = document.getElementById('stylesheet');

    if (cssFille == "style") {
        stylesheet.href = 'styleDark.css';
    } else {
        stylesheet.href = 'style.css';
    }
}

// Определение текущей темы браузера
function detectBrowserTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {
        return 'light';
    }
}
