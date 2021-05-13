onresize = function () {
    var x = 0;

    while (x <= 10) {

        document.getElementsByClassName('accordianul')[x].style.width = window.screen.width * 7 / 8 + "px";
        document.getElementsByClassName('accordianul')[x].style.height = (window.screen.width * 40) / 100 + "px";
        x++;
        if (x >= 10) {
            break;
        }
    }
}