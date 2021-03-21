const btnHumberger = document.querySelector('#btnHumberger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElms = document.querySelectorAll('.has-fade')

btnHumberger.addEventListener('click', function(){
    console.log('click hamburger');
    
    if (header.classList.contains('open')) {
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElms.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });   
    }
    else {
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElms.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in')
        });
    }
});

