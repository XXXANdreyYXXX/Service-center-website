$(document).ready(function(){
    // При наведении на элемент SVG с классом "area"
    $(".area").on("mousemove", function(event){
        // Получаем значение атрибута "description-data" текущего элемента
        var descriptionData = $(this).attr("description-data");
        
        // Создаем всплывающую подсказку
        var tooltip = $("<div>").addClass("tooltip").html(descriptionData);
        
        // Позиционируем подсказку рядом с курсором
        var tooltipX = event.pageX + 10; // Смещение вправо от курсора
        var tooltipY = event.pageY + 10; // Смещение вниз от курсора
        
        tooltip.css({
            top: tooltipY,
            left: tooltipX
        });
        
        // Добавляем подсказку на страницу
        $("body").append(tooltip);
        
        // При перемещении курсора, перемещаем и подсказку
        $(this).on("mousemove", function(event){
            var tooltipX = event.pageX + 10;
            var tooltipY = event.pageY + 10;
            
            tooltip.css({
                top: tooltipY,
                left: tooltipX
            });
        });
    });
    
    // При уходе курсора с элемента SVG с классом "area"
    $(".area").on("mouseleave", function(){
        // Удаляем всплывающую подсказку
        $(".tooltip").remove();
    });
});
