$(function(){
    if ($(window).height() > 500) {
        $('#more').click(function(){
            $('#menu').toggle();
            if ($('#more')[0].innerHTML === '+') {
                $('#more')[0].innerHTML = 'x'
            } else {
                $('#more')[0].innerHTML = '+'
            }
        });
        $('#menu').hide();
        $('#more').show();
        }
});