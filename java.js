$(function() {
   
    $(".toggle-btn").on("click", function() {
        $(this).siblings(".content").slideToggle(300);
        $(this).toggleClass("active");
        $(this).html($(this).hasClass("active") ? "🔼 Collapse" : "🔽 Expand");
        
        $(this).closest(".widget").toggleClass("expanded");
    });

    
    $(".widget").hide().fadeIn(500);
});