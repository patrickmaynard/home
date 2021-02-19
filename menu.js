class Menu {
    init = function () {
        let that = this;
        $(window).resize(function () {
            that.handleSize();
        });
        that.handleSize();
    }

    handleSize = function () {
        let more = $('#more');
        let menu = $('#menu');
        if ($(window).height() > 500) {
            more.click(function () {
                $('#menu').toggle();
                if (more[0].innerHTML === '+') {
                    more[0].innerHTML = 'x'
                } else {
                    $('#more')[0].innerHTML = '+'
                }
            });
            menu.hide();
            more.show();
        } else {
            menu.show();
            more.hide();
        }
    }
}

$(function(){
    let menu = new Menu;
    menu.init();
});