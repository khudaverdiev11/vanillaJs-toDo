const dateElement = document.getElementById("date");
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

let addToDoButton = document.getElementById('addToDo');
let todocontainer = document.getElementById('toDocontainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDocontainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function () {
        toDocontainer.removeChild(paragraph);
    })
})

var input = document.getElementById("inputField");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addToDo").click();
    }
});