$(document).ready(function() {
    // Sample array of image URLs
    var images = [
        "https://falconteh.ru/image/catalog/site/certhp.jpg",
        "https://loip.ru/upload/iblock/7ad/7ad55ed75d3b47eb9b2805813811689b.jpg",
        "https://falconteh.ru/image/catalog/site/sertifikatSamsung2.jpg",
        "https://a-lider.net/wp-content/uploads/2020/12/full_v2gI7Fca.jpg",
        "https://th.bing.com/th/id/R.f391809d9c22434dd6e03f8043c69cdb?rik=wbZIC0%2fNhkfywA&riu=http%3a%2f%2fwww.sar-service.com%2fwp-content%2fuploads%2f2018%2f06%2fsertifikat_ROLSEN.jpg&ehk=dLgrFACKWaEaRdG%2fH3H38oyuaU6zUhsh9GmQjxRZRyU%3d&risl=&pid=ImgRaw&r=0",
        "https://revanshsc.ru/upload/medialibrary/59c/xbkzw3vvrft3f7h6vhk0cv6j2i0x9y79.jpg",
        "https://th.bing.com/th/id/R.daee109426a4452b515c6054fd3e17a0?rik=bDFjOEWoZOt4cQ&riu=http%3a%2f%2fraimet.ru%2fassets%2fimages%2fimage_12.jpg&ehk=8slqzD8TXxb%2frX8w8njDBkDfCdx9rJwi5r%2fNiiKcvRw%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.95993198879dccc4153967f4a6547087?rik=OqfkqqYitQW83w&riu=http%3a%2f%2fcsm.omsk.ru%2fwp-content%2fuploads%2fpdf%2ftka.jpg&ehk=Eoh30MWKW62jEGH3NtQSSxpXQXSzu%2faXqurUQKruOW8%3d&risl=&pid=ImgRaw&r=0",
        "https://www.istok.biz/static/uploaded/images/companyhistory/image/9366981_Sertifikat_SP_Istok-BS_Krasnoyarsk_SSP.jpg"
        // Add more image URLs as needed
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
