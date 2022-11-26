var products = document.querySelectorAll('.product__heading')
var productItems = document.querySelectorAll('.product__item')

for (let index = 0; index < products.length; index++) {
    products[index].addEventListener('click', ()=> {
        productItems[index].classList.toggle('hidden')
    })
}

var countDownDate = new Date("Nov 26, 2022 11:00:00").getTime();
var timer = document.querySelector('.timer__value')
var x = setInterval(() => {
    var now = new Date().getTime();
    var left = countDownDate - now;

    var days = Math.floor(left / (1000 * 60 * 60 * 24));
    var hours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((left % (1000 * 60)) / 1000);

    timer.innerHTML = `Осталось ${days}д ${hours}ч ${minutes}мин ${seconds}сек`;
}, 1000);

var sidemenu = document.querySelector('.sidemenu')
var sidemenuOpen = document.querySelector('.info__tag')
var sidemenuClose = document.querySelector('.sidemenu__close')

sidemenuOpen.addEventListener('click', ()=> {
    sidemenu.style.display = "block";
})

sidemenuClose.addEventListener('click', () => {
    sidemenu.style.display = "none";
})