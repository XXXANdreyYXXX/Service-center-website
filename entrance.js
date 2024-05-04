// Получение ссылки на поле ввода пароля
var passwordField = document.getElementById("password");

// Объект для хранения данных пользователя
var userData = {};

// Ссылки на метки для отображения ошибок
var labelErrName = document.getElementById("errName");
var labelErrPassword = document.getElementById("errPassword");

// Функция для валидации имени
function validateName(name) {
    let namePattern = /[0-9]/;
    if (namePattern.test(name) || name.length < 3) {
        return "Поле 'Имя' не должно содержать цифры и длиной больше 2 символов!";
    }
    return null; // Если имя прошло проверку
}

// Функция для валидации пароля
function validatePassword(password) {
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password) || password.length < 8 || password.includes(' ')) {
        return "Пароль должен быть длиной не менее 8 символов и включать хотя бы одну букву, цифру и специальный символ!";
    }
    return null; // Если пароль прошел проверку
}

// Функция для регистрации пользователя
function Registration() {
    // Очистка меток ошибок перед каждой новой проверкой
    labelErrName.innerHTML = "";
    labelErrPassword.innerHTML = "";

    // Получение значений из полей формы и удаление лишних пробелов
    let nameReg = document.getElementById("name").value.trim();
    let passwordReg = document.getElementById("password").value.trim();

    // Преобразование имени, если есть пробелы
    var newNameReg = '';
    for (var i = 0; i < nameReg.length; i++) {
        if (nameReg.charAt(i) === " " && i + 1 < nameReg.length) {
            newNameReg += nameReg.charAt(i) + nameReg.charAt(i + 1).toUpperCase();
            i++;
        } else {
            newNameReg += nameReg.charAt(i);
        }
    }
    nameReg = newNameReg;

    let errors = 0;

    // Валидация имени
    let nameError = validateName(nameReg);
    if (nameError) {
        labelErrName.innerHTML = nameError;
        errors++;
    }

    // Валидация пароля
    let passwordError = validatePassword(passwordReg);
    if (passwordError) {
        labelErrPassword.innerHTML = passwordError;
        errors++;
    }

    // Если нет ошибок, сохраняем данные пользователя и очищаем поля формы
    if (errors == 0) {
        userData = {
            name: nameReg.charAt(0).toUpperCase() + nameReg.slice(1),
            password: passwordReg
        };

        document.getElementById("name").value = "";
        document.getElementById("password").value = "";

        // Разблокировка кнопки
        document.getElementById("conclusion").disabled = false;
    }
}

// Функция для вывода данных пользователя
function Conclusion() {
    // Вывод данных пользователя на страницу
    userDataElement = document.getElementById("userData");
    userDataElement.innerHTML += `<p><strong>Имя:</strong> ${userData.name}</p>
                                <p><strong>Пароль:</strong> ${userData.password}</p>`;

    // Блокировка кнопки после вывода данных
    var button = document.getElementById("conclusion");
    button.disabled = true;
}
