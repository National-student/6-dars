// js file

var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elList = document.querySelector(".list");
var newArray = [];


elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    newArray.push(elInput.value);
    elList.innerHTML = null
    
    for (var toDo of newArray) {
            var elItem = document.createElement("li");
            elItem.textContent = toDo
            elList.appendChild(elItem);
        }
        elInput.value = null
})


