// again 
const buttons = document.querySelectorAll("[data-carousel-button]");
const slides = document.querySelector("[data-slides]")
const paginationUl = document.querySelector(".pagination-ul")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const activeSlide = slides.querySelector("[data-active]");
        const activeBullet = paginationUl.querySelector('[data-active]')
        let newIndex = Array.from(slides.children).indexOf(activeSlide) + offset;
        if(newIndex <= 0 ) newIndex = slides.children.length -1;
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active
        paginationUl.children[newIndex].dataset.active = true;
        delete activeBullet.dataset.active
        
    })
})
// create pagination bullets 
for(let i = 0; i < Array.from(slides.children).length; i++) {
    const paginationLi = document.createElement("li");
    paginationLi.classList.add("paginationLi");
    paginationLi.textContent = i + 1;
    paginationUl.appendChild(paginationLi);
    
}
document.querySelector(".paginationLi").setAttribute("data-active", "")