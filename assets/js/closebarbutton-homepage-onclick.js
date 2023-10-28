var btn = document.getElementById("infobar-close-button");
btn.onclick = function () {
    $("#infobar-close-button").css("opacity", 0);
    $("#infobar").css("opacity", 0);
    localStorage.setItem('infobar-status', 0);
    console.log(localStorage.getItem('infobar-status'));
    $("#home-body").css("padding-top", "calc(100vh)");
}  