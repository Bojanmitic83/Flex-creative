//hamburger meni
function toggleDropdown() {
    let navbarToggle = document.getElementById("navbar-toggle");
    if(navbarToggle.className === "topnav") {
        navbarToggle.className += " responsive";
    } else {
        navbarToggle.className = "topnav";
    }
}
//nav scroll
$(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 80) {
        $(".navbar").addClass("sticky");
    }else {
        $(".navbar").removeClass("sticky")
    }
});