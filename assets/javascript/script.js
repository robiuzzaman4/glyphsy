
const btnCopy = document.querySelectorAll(".glyphs-btn")
let clipboard = new ClipboardJS(btnCopy);



btnCopy.forEach(index => {
    index.addEventListener("click", ()=> {
        
        const modal = document.getElementById("modal");

        modal.classList.toggle("modal-section-active");

        setTimeout(() => {
            modal.classList.toggle("modal-section-active");
        }, 900);
    });
});


