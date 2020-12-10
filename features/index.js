function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function play2() {
    var audio = document.getElementById("audio2");
    audio.play();
}
$(function() {
    $('#gif-click').hide();

    $('#click').click(function() {
        $('#click').hide();
        $('#gif-click').show();

    });

    if ($('#click').data("clicked", true)) {
        $('#gif-click').click(function() {
            $('#click').show();
            $('#gif-click').hide();
        
        });
    }
});