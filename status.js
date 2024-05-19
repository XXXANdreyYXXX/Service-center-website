function showRepairStatus() {
    // Получаем имя и код клиента из формы
    var name = document.getElementById("nameInput").value.trim();
    var code = document.getElementById("codeInput").value;
    var namePattern = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/;

    //Проверка данных
    if(name == "" || code == "" || !namePattern.test(name) || !/^\d{6}$/.test(code)){
        $('#statusText').text("Пожалуйста, заполните все поля корректными данными.");
        $('#repairStatusModal').modal('show');
        return;
    }

    // Преобразуем имя к верхнему регистру
    name = name.toUpperCase();

    var filePath = "data.txt";

    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            var lines = data.split('\n');
            var found = false;
            lines.forEach(line => {
                var parts = line.split('@');
                // Сравниваем имя и код клиента
                if (parts[0].toUpperCase() === name && parts[1] === code) {
                    var status = parts[2];
                    var comment = parts.slice(3).join('@');

                    // Выводим данные в модальном окне
                    $('#statusText').text("Статус ремонта: " + status);
                    if(comment != ""){
                        $('#commentText').text("Комментарий: " + comment);
                    }
                    $('#repairStatusModal').modal('show');

                    found = true;
                }
            });
            if (!found) {
                $('#statusText').text("Запись не найдена!");
                $('#commentText').text('');
                $('#repairStatusModal').modal('show');
            }
        })
        .catch(error => {
            console.error('Ошибка при загрузке файла:', error);
        });
}
