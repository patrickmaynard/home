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
        let that = this;
        more.click(function () {
            that.handleClick();
        });
        if (window.innerHeight > 499 && window.innerWidth > 499) {
            menu.hide();
            more.show();
            $('#more')[0].innerHTML = '+';
        } else {
            menu.show();
            more.hide();
        }
    }

    handleClick = function () {
        let more = $('#more');
        let that = this;
        $('#menu').toggle();
        if (more[0].innerHTML === '+') {
            more[0].innerHTML = 'x'
        } else {
            $('#more')[0].innerHTML = '+';
            //Fixes a bug where we lose our handler occasionally on resize
            more.unbind();
            more.click(function () {
                that.handleClick();
            });
        }
    }
}

$(function(){
    let menu = new Menu;
    menu.init();
});