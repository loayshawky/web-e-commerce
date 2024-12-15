// copy menu for mobile
function copyMenu () {
    var dptCategory = document.querySelector(".dpt-cat");
    var dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;


 
    // copy inside nav to nav
    var mainNav = document.querySelector(".header-nav nav ");
    var navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = mainNav.innerHTML;

    var topNav = document.querySelector(".header-top .wrapper");
    var topPlace = document.querySelector(".off-canvas .thetop-nav");
    topPlace.innerHTML = topNav.innerHTML;
    // copy header-top wrapper to top-nav
 
}
copyMenu();

// show mobile menu
const menuButton = document.querySelector('.trigger');
const classButton = document.querySelector('.t-close');
const addClass = document.querySelector('.site');
menuButton.addEventListener('click', function() {
    addClass.classList.toggle('showmenu')
})
classButton.addEventListener('click', function() {
    addClass.classList.remove('showmenu');
})


var swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});




      const searchButton = document.querySelector('.t-search');
const tClose = document.querySelector('.t-close');
const showClass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function() {
    showClass.classList.remove('showsearch'); // Correct class removal
});

