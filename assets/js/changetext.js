$(document).ready(function () {
    $(".show-more-button").click(function () {
        $(".show-more-button").fadeOut(function () {
            $(".show-more-button").text(($(".show-more-button").text() == 'Show More Experiences') ? 'Show Fewer Experiences' : 'Show More Experiences').fadeIn();
        })
    })
});
