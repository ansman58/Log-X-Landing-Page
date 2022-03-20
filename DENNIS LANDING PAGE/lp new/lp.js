const faqTag = document.querySelectorAll('.faq');

// Hide other elements and change icon.
const hideTag = () =>{
    faqTag.forEach(item =>{
        item.classList.remove('open')
        item.children[1].innerHTML = '&#43;'
    })
}

// Toggle targeted element to show with froEach Loop.
faqTag.forEach(item =>{  
    item.addEventListener('click', e =>{
        if (e.target.className == 'btn') {
            hideTag()
            e.target.parentElement.classList.toggle('open');
            e.target.innerHTML = '&#8722;';
        }
    }) 
})

// Mobile Menu

const navLink = document.querySelector('.menu-ul');
const background = document.querySelector('.bg');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const slideDiv = document.querySelectorAll('.sliding-div');
// const body = document.querySelector('.body')

open.addEventListener('click', () => {
  navLink.classList.add('active');
  background.classList.add('active');
  close.classList.add('active');
  open.classList.remove('active');
//   body.classList.remove('active')
});

close.addEventListener('click', () => {
    navLink.classList.remove('active');
    background.classList.remove('active');
    close.classList.remove('active');
    open.classList.add('active');
    // body.classList.add('active')
});