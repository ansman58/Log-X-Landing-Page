
const navLink = document.querySelector('.menu-ul');
const background = document.querySelector('.bg');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const slideDiv = document.querySelectorAll('.sliding-div');

const menuLink = document.querySelectorAll('.disappear');
const menuLi = document.querySelector('.inside-li');

open.addEventListener('click', () => {
  navLink.classList.add('active');
  background.classList.add('active');
  close.classList.add('active');
  open.classList.remove('active');
});

close.addEventListener('click', () => {
    navLink.classList.remove('active');
    background.classList.remove('active');
    close.classList.remove('active');
    open.classList.add('active');
});

menuLink.forEach(item => {
    item.addEventListener('click', () => {
        navLink.classList.remove('active');
        background.classList.remove('active');
        open.classList.add('active');
        close.classList.remove('active');
} )
});

let index = 0

setInterval(() => {
    if(index < 400) {
        index += 100
        slideDiv.forEach(item => {
            item.style.transform = `translateX(-${index}%)`  ;
        })
    }

    if(index === 400) {
        index = -100
    }
}, 4000);



 
