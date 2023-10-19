$(document).ready(function() {
    $(".catalog__view").click(function() {
        $(this).find("svg").toggleClass("active");
        $(this).parents(".catalog__products").find(".catalog__products-grid").toggleClass("catalog__products-column");
    })
    $(".catalog__filter-btn_mobile").click(function() {
        $(this).toggleClass("open");
        $(".filter").slideToggle();
    })
    $(".catalog__filter-btn_mobile svg").click(function(e) {
        e.stopPropagation();
        $(".catalog__filter-btn_mobile").toggleClass("open");
        $(".filter").slideToggle();
    })
})