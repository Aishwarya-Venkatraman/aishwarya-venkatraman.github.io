$(document).ready(function(){
    $( ".category .all" ).css("text-decoration", "underline");
    $( ".category-projects .all" ).css("display", "block");
    $( ".category span" ).click(function() {
        $( ".category span" ).css("text-decoration", "none");
        $( ".category-projects .all" ).css("display", "none");
        var selected = $(this).attr("class");
        $( ".category ." + selected).css("text-decoration", "underline");
        $( ".category-projects ." + selected).css("display", "block");
    });
});