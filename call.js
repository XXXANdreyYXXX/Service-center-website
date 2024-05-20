// Объект для хранения данных пользователя
var userData = {};

// Ссылки на метки для отображения ошибок
var labelErrName = document.getElementById("errName");
var labelErrPhone = document.getElementById("errPhone");

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

// Функция для регистрации пользователя
function Call() {
    // Очистка меток ошибок перед каждой новой проверкой
    labelErrName.innerHTML = "";
    labelErrPhone.innerHTML = "";

    // Получение значений из полей формы и удаление лишних пробелов
    let nameReg = document.getElementById("name").value.trim();
    let phoneReg = document.getElementById("phone").value.trim();

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

    // Если нет ошибок, сохраняем данные пользователя и очищаем поля формы
    if (errors == 0) {
        userData = {
            name: nameReg.charAt(0).toUpperCase() + nameReg.slice(1),
            phone: phoneReg
        };

        // Изменяем содержимое модального окна
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = '<p>Мы перезвоним вам в течение 10-15 минут.</p>';

        // Скрываем кнопку "Заказать звонок"
        const callButton = document.getElementById('order');
        callButton.style.display = 'none';
    }
}