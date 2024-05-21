// Получение ссылки на поле ввода пароля
var passwordField = document.getElementById("password");

// Объект для хранения данных пользователя
var Application = {};

// Ссылки на метки для отображения ошибок
var labelErrName = document.getElementById("errName");
var labelErrPhone = document.getElementById("errPhone");
var labelErrTechnic = document.getElementById("errTechnic");
var labelErrProblem = document.getElementById("errProblem");
var labelErrAgreement = document.getElementById("errAgreement");

// Функция для валидации имени
function validateName(name) {
    let namePattern = /[0-9]/;
    if (namePattern.test(name) || name.length < 3) {
        return true;
    }
    return null; // Если имя прошло проверку
}

// Функция для валидации номера телефона
function validatePhone(phone) {
    let phonePattern = /\+7[0-9]{10}/;
    if (!phonePattern.test(phone) || phone.length < 12 || phone.includes(' ')) {
        return true;
    }
    return null; // Если телефон прошел проверку
}



// Функция для валидации соглашения
function validateAgreement(agreementChecked) {
    if (!agreementChecked) {
        return true;
    }
    return null; // Если соглашение прошло проверку
}

// Функция для заявкии пользователя
function Request() {

    // Очистка меток ошибок перед каждой новой проверкой
    labelErrAgreement.style.opacity = "0";
    labelErrName.style.opacity = "0";
    labelErrPhone.style.opacity = "0";
    labelErrProblem.style.opacity = "0";
    labelErrTechnic.style.opacity = "0";

    // Получение значений из полей формы и удаление лишних пробелов
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let agreement = document.getElementById("agreement").checked;
    let technic = document.getElementById("technic").value;
    let problem = document.getElementById("problem").value.trim();

    // Преобразование имени, если есть пробелы
    var newname = '';
    for (var i = 0; i < name.length; i++) {
        if (name.charAt(i) === " " && i + 1 < name.length) {
            newname += name.charAt(i) + name.charAt(i + 1).toUpperCase();
            i++;
        } else {
            newname += name.charAt(i);
        }
    }
    name = newname;

    let errors = 0;

    // Валидация имени
    if (validateName(name)) {
        labelErrName.style.opacity = "1";
        errors++;
    }

    // Валидация телефона
    if (validatePhone(phone)) {
        labelErrPhone.style.opacity = "1";
        errors++;
    }

    // Валидация выбора техники
    if (technic == 0) {
        labelErrTechnic.style.opacity = "1";
        errors++;
    }

    // Валидация описания проблемы
    if (!problem) {
        labelErrProblem.style.opacity = "1";
        errors++;
    }

    // Валидация соглашения
    if (validateAgreement(agreement)) {
        labelErrAgreement.style.opacity = "1";
        errors++;
    }

    // Если нет ошибок, сохраняем данные пользователя и очищаем поля формы
    if (errors == 0) {

        labelErrAgreement.style.opacity = "0";
        labelErrName.style.opacity = "0";
        labelErrPhone.style.opacity = "0";
        labelErrProblem.style.opacity = "0";
        labelErrTechnic.style.opacity = "0";


        $('#exampleModal').modal('show');

    }
}

function Сleansing(){
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "+7";
    document.getElementById("problem").value = "";
    document.getElementById("agreement").checked = true;
    document.getElementById("technic").selectedIndex = 0;
}