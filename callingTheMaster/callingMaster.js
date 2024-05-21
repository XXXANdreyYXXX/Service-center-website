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
    labelErrPhone.innerHTML = "";
    labelErrTechnic.innerHTML = "";
    labelErrProblem.innerHTML = "";

    // Получение значений из полей формы и удаление лишних пробелов
    let name = document.getElementById("name").value.trim();
    let phome = document.getElementById("phone").value.trim();
    let agreement = document.getElementById("agreementLink").checked;
    let technic = document.getElementById("technic").value;
    let problem = document.getElementById("problem").value.trim();

    alert(name);

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
    let nameError = validateName(name);
    if (nameError) {
        labelErrName.innerHTML = nameError;
        errors++;
    }

    // Валидация телефона
    let phoneError = validatePhone(phome);
    if (phoneError) {
        labelErrPhone.innerHTML = phoneError;
        errors++;
    }

    // Валидация выбора техники
    if (!technic) {
        labelErrTechnic.innerHTML = "Выберите технику";
        errors++;
    }

    // Валидация описания проблемы
    if (!problem) {
        labelErrProblem.innerHTML = "Введите описание проблемы";
        errors++;
    }

    // Валидация соглашения
    let agreementError = validateAgreement(agreement);
    if (agreementError) {
        labelErrAgreement.innerHTML = agreementError;
        errors++;
    }

    // Если нет ошибок, сохраняем данные пользователя и очищаем поля формы
    if (errors == 0) {
        Application = {
            name: name.charAt(0).toUpperCase() + name.slice(1),
            phone: phome,
            technic: technic.options[technic].text,
            problem: problem
        };

        document.getElementById("name").value = "";
        document.getElementById("phone").value = "+7";
        document.getElementById("technic").value = 0;
        document.getElementById("problem").value = "";
        document.getElementById("agreement").checked = false;

        // Разблокировка кнопки
        document.getElementById("conclusion").disabled = false;
    }
}

// Функция для вывода данных пользователя
function Conclusion() {
    // Вывод данных пользователя на страницу
    ApplicationElement = document.getElementById("dataApplication");
    ApplicationElement.innerHTML += `<p><strong>Имя:</strong> ${Application.name}</p>
                                <p><strong>Телефон:</strong> ${Application.phone}</p>
                                <p><strong>Техника:</strong> ${Application.technic}</p>
                                <p><strong>Проблема:</strong> ${Application.problem}</p>`;

    // Блокировка кнопки после вывода данных
    var button = document.getElementById("conclusion");
    button.disabled = true;
}
