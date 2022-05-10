var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var welcomeMessage = document.getElementById("welcome");
var ul = document.querySelector("ul");


// function welcome (){
//     var message = input.value;
//     welcomeMessage.innerHTML = message;
//     input.value = "";
// }

function createListElement (){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick (){
    if(input.value.length > 0){
        createListElement();
    }
}

function addListAfterEnter(){
    if(input.value.length > 0 && event.which === 13) {
        createListElement();
    }
}

button.addEventListener('click', addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);
