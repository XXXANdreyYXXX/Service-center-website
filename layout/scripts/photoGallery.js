$(document).ready(function() {
    // Sample array of image URLs
    var images = [
        "img/certificate1.jpg",
        "img/certificate2_result.webp",
        "img/certificate3.jpg",
        "img/certificate4.jpg",
        "img/certificate5_result.webp",        
        "img/certificate7_result.webp",        
        "img/certificate6_result.webp",        
        "img/certificate8_result.webp",        
        "img/certificate9_result.webp"  
    ];

    // Populate gallery with images
    var gallery = $("#gallery");
    $.each(images, function(index, value) {
        gallery.append(`<div class="col-md-4 mb-3"><img src="${value}" class="img-fluid" data-index="${index}"></div>`);
    });

    // Lightbox functionality using Bootstrap modal
    gallery.on("mouseenter", "img", function() {
        $(this).css("cursor", "zoom-in");
    }).on("mouseleave", "img", function() {
        $(this).css("cursor", "default");
    }).on("click", "img", function() {
        var imgSrc = $(this).attr("src");
        var index = $(this).data("index");
        var modalHtml = `<div class="modal fade" id="photoModal" tabindex="-1" role="dialog" aria-labelledby="photoModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <img src="${imgSrc}" class="img-fluid" data-index="${index}" style="cursor: zoom-out;">
                                    </div>
                                </div>
                            </div>
                        </div>`;
        $("body").append(modalHtml);
        $("#photoModal").modal("show");
        $("#photoModal").on("hidden.bs.modal", function() {
            $(this).remove();
        });
    });

    $("body").on("click", "#photoModal img", function() {
        var index = $(this).data("index");
        $(`#gallery img[data-index="${index}"]`).css("cursor", "zoom-in");
        $("#photoModal").modal("hide");
    });
});
