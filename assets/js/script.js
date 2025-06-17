// Header Scroll 
let navbar = document.querySelector('.navbar');
document.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        navbar.classList.add('header-scrolled');
    }
    else {
        navbar.classList.remove('header-scrolled');
    }
}

// Nav Hide
let navlink = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse');
navlink.forEach(function (a) {
    a.addEventListener('click', function () {
        navCollapse.classList.remove('show');
    });
});