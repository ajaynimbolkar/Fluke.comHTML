$(document).ready(function() {
    $(".tab-content").hide();
    $(".tab-content:first").show();
    $(".inner-nav li:first").addClass("active");
    $(".inner-nav a").click(function() {
        $(".inner-nav li").removeClass("active");
        $(this).parent().addClass("active");
        var currentTab = $(this).attr("href");
        $(".tab-content").hide();
        $(currentTab).show();
        return false;
    });
});