function adaptContent() {
    // size of device screen
    var xsize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var ysize = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // landscape
    if (xsize > ysize) {
        $('.team').css('margin-top', '5vh');
    } else {
        $('.team').css('margin-top', '20vh');

    }
}