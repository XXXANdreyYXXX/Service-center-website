// Получение контекста рисования для элемента canvas с идентификатором "repairChart"
var repairCanvas = document.getElementById("repairChart").getContext("2d");

var size =  window.innerWidth < 316 ? 5 : window.innerWidth < 355 ? 10 : window.innerWidth < 530 ? 12 : 16;

alert(size);

alert(window.innerWidth);

// Данные для графика
var repairData = {
    // Метки для оси X
    labels: ["Компьютеры", "Компьютерная техника", "Телефоны", "Планшеты", "Телевизоры", "Остальная техника"],
    datasets: [{
        label: "Принесли техники",
        backgroundColor: "rgba(0, 99, 132, 0.6)",
        borderColor: "rgba(0, 99, 132, 1)",
        data: [95, 96, 99, 97, 95, 98] // Данные по принесенной технике
    }]
};

// Создание графика
var repairChart = new Chart(repairCanvas, {
    type: 'bar', // Тип графика
    data: repairData, // Данные для отображения
    options: {
        scales: {
            x: {
                // Настройки оси X
                ticks: {
                    color: 'black', // Цвет меток
                    font: {
                        size: size, // Размер шрифта
                        family: "Rubik" // Семейство шрифта
                    }
                }
            },
            y: {
                // Настройки оси Y
                ticks: {
                    color: 'black', // Цвет меток
                    font: {
                        size: size, // Размер шрифта
                        family: 'Rubik' // Семейство шрифта
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                // Настройки всплывающей подсказки
                titleColor: 'white', // Цвет заголовка
                bodyColor: 'white', // Цвет текста
                bodyFont: {
                    size: size, // Размер текста
                    family: 'Rubik' // Семейство шрифта
                },
                titleFont: {
                    size: size, // Размер заголовка
                    family: 'Rubik' // Семейство шрифта
                },
                displayColors: false, // Отображение цветных квадратиков
            },
            legend: {
                // Настройки легенды
                labels: {
                    font: {
                        size: size, // Размер текста
                        family: 'Rubik' // Семейство шрифта
                    },
                    color: 'black' // Цвет текста
                }
            }
        },
        indexAxis: 'y', // Ось индексов (по оси Y)
        barPercentage: 1.0, // Процент ширины столбцов
    }
});
