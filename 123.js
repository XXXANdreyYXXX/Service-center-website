function showRepairStatus() {
    var name = document.getElementById("nameInput").value;
    var code = document.getElementById("codeInput").value;

    var filePath = "data.txt";

    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            var lines = data.split('\n');
            var found = false;
            lines.forEach(line => {
                var parts = line.split('@');
                if (parts[0] === name && parts[1] === code) {
                    var status = parts[2];
                    var comment = parts.slice(3).join('@');

                    // Выводим данные в модальном окне
                    $('#statusText').text("Статус ремонта: " + status);
                    $('#commentText').text("Комментарий: " + comment);
                    $('#repairStatusModal').modal('show');

                    found = true;
                }
            });
            if (!found) {
                $('#statusText').text("Запись не найдена!");
                $('#commentText').text();
                $('#repairStatusModal').modal('show');
            }
        })
        .catch(error => {
            console.error('Ошибка при загрузке файла:', error);
        });
}
