// Объект для хранения данных пользователя
var userData = {};

// Ссылки на метки для отображения ошибок
var labelErrName = document.getElementById("errName");
var labelErrPhone = document.getElementById("errPhone");
var labelErrPassword = document.getElementById("errPassword");
var labelErrAgreement = document.getElementById("errAgreement");

// Функция для валидации имени
function validateName(name) {
    let namePattern = /[0-9]/;
    if (namePattern.test(name) || name.length < 3) {
        return "Поле 'Имя' не должно содержать цифры и длиной больше 2 символов!";
    }
    return null; // Если имя прошло проверку
}

// Функция для валидации номера телефона
function validatePhone(phone) {
    let phonePattern = /\+7[0-9]{10}/;
    if (!phonePattern.test(phone) || phone.length < 12 || phone.includes(' ')) {
        return "Поле 'Телефон' должно соответствовать шаблону: +7XXXXXXXXXX";
    }
    return null; // Если телефон прошел проверку
}

// Функция для валидации пароля
function validatePassword(password) {
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password) || password.length < 8 || password.includes(' ')) {
        return "Пароль должен быть длиной не менее 8 символов и включать хотя бы одну букву, цифру и специальный символ!";
    }
    return null; // Если пароль прошел проверку
}

// Функция для валидации соглашения
function validateAgreement(agreementChecked) {
    if (!agreementChecked) {
        return "Согласитесь с хранением и обработкой данных";
    }
    return null; // Если соглашение прошло проверку
}

// Функция для регистрации пользователя
function Registration() {
    // Очистка меток ошибок перед каждой новой проверкой
    labelErrAgreement.innerHTML = "";
    labelErrName.innerHTML = "";
    labelErrPassword.innerHTML = "";
    labelErrPhone.innerHTML = "";

    // Получение значений из полей формы и удаление лишних пробелов
    let nameReg = document.getElementById("name").value.trim();
    let phoneReg = document.getElementById("phone").value.trim();
    let passwordReg = document.getElementById("password").value.trim();
    let agreementReg = document.getElementById("agreement").checked;

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

    // Валидация телефона
    let phoneError = validatePhone(phoneReg);
    if (phoneError) {
        labelErrPhone.innerHTML = phoneError;
        errors++;
    }

    // Валидация пароля
    let passwordError = validatePassword(passwordReg);
    if (passwordError) {
        labelErrPassword.innerHTML = passwordError;
        errors++;
    }

    // Валидация соглашения
    let agreementError = validateAgreement(agreementReg);
    if (agreementError) {
        labelErrAgreement.innerHTML = agreementError;
        errors++;
    }

    // Если нет ошибок, сохраняем данные пользователя и очищаем поля формы
    if (errors == 0) {
        userData = {
            name: nameReg.charAt(0).toUpperCase() + nameReg.slice(1),
            phone: phoneReg,
            password: passwordReg
        };

        document.getElementById("name").value = "";
        document.getElementById("phone").value = "+7";
        document.getElementById("password").value = "";
        document.getElementById("agreement").checked = false;

        // Разблокировка кнопки
        document.getElementById("conclusion").disabled = false;
    }
}

// Функция для вывода данных пользователя
function Conclusion() {
    // Вывод данных пользователя на страницу
    userDataElement = document.getElementById("userData");
    userDataElement.innerHTML += `<p><strong>Имя:</strong> ${userData.name}</p>
                                <p><strong>Телефон:</strong> ${userData.phone}</p>
                                <p><strong>Пароль:</strong> ${userData.password}</p>`;

    // Блокировка кнопки после вывода данных
    var button = document.getElementById("conclusion");
    button.disabled = true;
}
