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
    item.addEventListener('click', (e) => {
        const plus = item.querySelector(".plus")
        const minus = item.querySelector(".minus")

        if (e.target.className.includes("btn plus")) {
            plus.classList.add("hide")          
            plus.parentElement.classList.add('open');
            minus.classList.remove("hide")
        }

        if (e.target.className.includes("btn minus")) {
            minus.classList.add("hide")
            minus.parentElement.classList.remove('open');
            plus.classList.remove("hide")
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