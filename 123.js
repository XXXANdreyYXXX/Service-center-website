function showRepairStatus() {
    // Получаем имя и код клиента из формы
    var name = document.getElementById("nameInput").value;
    var code = document.getElementById("codeInput").value;

    // Путь к текстовому файлу
    var filePath = "data.txt";

    // Запрос данных из текстового файла
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            // Разбиваем текст на строки
            var lines = data.split('\n');
            var found = false;
            // Перебираем каждую строку
            lines.forEach(line => {
                // Разбиваем строку на части по разделителю '@'
                var parts = line.split('@');
                // Проверяем соответствие имени и кода клиента
                if (parts[0] === name && parts[1] === code) {
                    // Если данные найдены, выводим статус ремонта и комментарий
                    var status = parts[2];
                    var comment = parts.slice(3).join('@');
                    if(comment == ""){
                        alert("Статус ремонта: " + status);
                    }else{
                        alert("Статус ремонта: " + status + "\nКомментарий: " + comment);
                    }
                    found = true;
                }
            });
            // Если данные не найдены, выводим предупреждение
            if (!found) {
                alert("Данные не найдены");
            }
        })
        // В случае ошибки при загрузке файла выводим сообщение об ошибке
        .catch(error => {
            console.error('Ошибка при загрузке файла:', error);
        });
}