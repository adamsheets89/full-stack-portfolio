$("#projects").on("click", function (event) {
    event.preventDefault();
    $(".second-row").hide();
    $(".third-row").show();
});

$("#home").on("click", function (event) {
    event.preventDefault();
    $(".second-row").show();
    $(".third-row").hide();
});