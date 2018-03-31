$("#projects").on("click", function (event) {
    event.preventDefault();
    $(".second-row").hide();
    $(".third-row").show();
    $(".fourth-row").show();
});

$("#home").on("click", function (event) {
    event.preventDefault();
    $(".second-row").show();
    $(".third-row").hide();
    $(".fourth-row").hide();
});