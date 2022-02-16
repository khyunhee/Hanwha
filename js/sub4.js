const dropDown = document.querySelectorAll(".cont_box");
const dropDownBody = document.querySelector(".content ul");

dropDown.forEach(dropDown => {
    dropDown.addEventListener("click", event => {
        dropDown.classList.toggle("active");
        if(dropDown.classList.contains("active")){
            dropDown.style.maxHeight = "100%";
        }
        else{
            dropDown.style.maxHeight = "0%";
        }
    });
});