// Объект для хранения данных пользователя
var userData = {};

// Ссылки на метки для отображения ошибок
var labelErrName = document.getElementById("errName");
var labelErrPhone = document.getElementById("errPhone");

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

// Функция для регистрации пользователя
function Call() {
    // Очистка меток ошибок перед каждой новой проверкой
    document.getElementById('errName').style.opacity = "0";
    document.getElementById('errPhone').style.opacity = "0";

    // Получение значений из полей формы и удаление лишних пробелов
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();

    // Преобразование имени, если есть пробелы
    var newName = '';
    for (var i = 0; i < name.length; i++) {
        if (name.charAt(i) === " " && i + 1 < name.length) {
            newName += name.charAt(i) + name.charAt(i + 1).toUpperCase();
            i++;
        } else {
            newName += name.charAt(i);
        }
    }
    name = newName;

    let errors = 0;

    // Валидация имени
    if (validateName(name)) {
        document.getElementById('errName').style.opacity = "1";
        errors++;
    }

    // Валидация телефона
    if (validatePhone(phone)) {
        document.getElementById('errPhone').style.opacity = "1";
        errors++;
    }

    // Если нет ошибок, сохраняем данные пользователя и очищаем поля формы
    if (errors == 0) {
        userData = {
            name: name.charAt(0).toUpperCase() + name.slice(1),
            phone: phone
        };

        // Изменяем содержимое модального окна
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = '<p>Мы перезвоним вам в течение 10-15 минут.</p>';

        // Скрываем кнопку "Заказать звонок"
        const callButton = document.getElementById('order');
        callButton.style.display = 'none';
    }
}