$(function activeMenu() {
    $('header .navbar-nav a.nav-link').filter(function() {
        return this.href == location.href
    }).parent().addClass('active').siblings().removeClass('active')
    $('header .navbar-nav a.nav-link').click(function() {
        // alert("sacas");
        $(this).parent().addClass('active').siblings().removeClass('active')
    })
});