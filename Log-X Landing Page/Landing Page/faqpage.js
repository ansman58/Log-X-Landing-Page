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

        if (e.target.className.includes("appended-section-btn plus")) {
            plus.classList.add("hide")          
            plus.parentElement.classList.add('open');
            minus.classList.remove("hide")
        }

        if (e.target.className.includes("appended-section-btn minus")) {
            minus.classList.add("hide")
            minus.parentElement.classList.remove('open');
            plus.classList.remove("hide")
        }
    }) 
})
