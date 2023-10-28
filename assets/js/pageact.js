var ib = document.getElementById("infobar");
function readTxt() {
    $.get('/assets/data/notice.txt', function (data) {
        var lines = data.split("\n"); //按行读取
        $.each(lines, function (i, v) {
            console.log(v);
            ib.innerText = v;
        });
    });
}
function adjustIframe() {
    var ifm = document.getElementById("subpage-page-ending");
    $("#subpage-page-ending").css("height", sessionStorage.getItem('pageendingheight'));
    // ifm.height = sessionStorage.getItem('pageendingheight');
    // console.log(sessionStorage.getItem('pageendingheight'))
    // ifm.width = document.documentElement.clientWidth;
}
window.onresize = function () {
    /*console.log($(window).width());
    console.log($(window).height());*/
    adjustIframe();
}
function scrollIntoView() {
    const tragetElem = document.getElementById("home-body");
    const tragetElemPostition = tragetElem.offsetTop;

    // 判断是否支持新特性
    if (
        typeof window.getComputedStyle(document.body).scrollBehavior == "undefined"
    ) {
        // 当前滚动高度
        let scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
        // 滚动step方法
        const step = function () {
            // 距离目标滚动距离
            let distance = tragetElemPostition - scrollTop;

            // 目标需要滚动的距离，也就是只走全部距离
            scrollTop = scrollTop + window.screen.availHeight;
            if (Math.abs(window.screen.availHeight) < 1) {
                window.scrollTo(0, tragetElemPostition);
            } else {
                window.scrollTo(0, scrollTop);
                setTimeout(step, 20);
            }
        };
        step();
    } else {
        tragetElem.scrollIntoView({
            behavior: "smooth",
            inline: "nearest"
        });
    }
}
$("#down").on("click", function () {
    window.scrollTo(0, document.documentElement.clientHeight - 100)
});
ib.innerText = readTxt();
adjustIframe();
localStorage.setItem('infobar-status', 1);