// Получение контекста рисования для элемента canvas с идентификатором "repairChart"
var repairCanvas = document.getElementById("repairChart").getContext("2d");

// Данные для графика
var repairData = {
    // Метки для оси X
    labels: ["Ноутбуки", "Компьютеры", "Моноблоки", "Телефоны", "Планшеты", "Телевизоры", "Мониторы", "Принтеры", "Сканеры", "Остальная техника"],
    datasets: [{
        label: "Принесли техники",
        backgroundColor: "rgba(0, 99, 132, 0.6)",
        borderColor: "rgba(0, 99, 132, 1)",
        data: [1001, 12560, 1011, 20000, 10000, 1994, 999, 504, 152, 1502] // Данные по принесенной технике
    }, {
        label: "Отремонтировали техники",
        backgroundColor: "rgba(99, 132, 0, 0.6)",
        borderColor: "rgba(99, 132, 0, 1)",
        data: [956, 12101, 999, 19742, 9910, 1902, 920, 495, 150, 1500] // Данные по отремонтированной технике
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
                        size: 18, // Размер шрифта
                        family: "Roboto" // Семейство шрифта
                    }
                }
            },
            y: {
                // Настройки оси Y
                ticks: {
                    color: 'black', // Цвет меток
                    font: {
                        size: 18, // Размер шрифта
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
                    size: 18, // Размер текста
                    family: 'Rubik' // Семейство шрифта
                },
                titleFont: {
                    size: 18, // Размер заголовка
                    family: 'Rubik' // Семейство шрифта
                },
                displayColors: false, // Отображение цветных квадратиков
            },
            legend: {
                // Настройки легенды
                labels: {
                    font: {
                        size: 18, // Размер текста
                        family: 'Rubik' // Семейство шрифта
                    },
                    color: 'black' // Цвет текста
                }
            }
        },
        indexAxis: 'y', // Ось индексов (по оси Y)
        barPercentage: 1.0, // Процент ширины столбцов
        // animations: {
        //     borderWidth: {
        //         // Анимация ширины границы
        //         duration: 1000, // Длительность анимации
        //         easing: 'lianer', // Тип анимации
        //         to: 0, // Конечное значение
        //         from: 5, // Начальное значение
        //         loop: true, // Повторение анимации
        //     }
        // }
    }
});
