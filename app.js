const button = document.getElementsByTagName("button")[0];
const mark = document.getElementsByTagName("button")[1];
const del = document.getElementsByTagName("button")[2];
const form = document.querySelector("form");
const todo = document.getElementById('newid');
const ul = document.getElementById("lists");
const edit = document.getElementsByClassName("editbutton");
const check_boxes = document.getElementsByClassName("checks");
var today = new Date();
let counter = 0

const todos = [];

console.log(`edit: ${edit}`)

form.addEventListener("submit", function (e) {
    e.preventDefault();
    add_to_list();
    todo.value = "";
})
let del_check = 0
del.addEventListener("click", () => {
    for (let box of check_boxes) {
        if (box.checked == true) {
            del_check = 1
            box.parentElement.parentElement.setAttribute("class", "delclass");
            box.checked = false;
        }
    }
    if (del_check === 0) alert("Please select atleast one todo!");
    else { alert("Deleted!"); }
})

let mark_check = 0
mark.addEventListener("click", () => {

    for (let box of check_boxes) {
        if (box.checked == true) {
            mark_check = 1
            box.parentElement.parentElement.setAttribute("class", "cross")
            box.checked = false;
        }
    }
    if (mark_check === 1) alert("Congratulations on completing your task!");
    else alert("Please select atleast one todo!");
})



button.addEventListener("click", () => {
    if(todo.value !== ""){
    alert("Successfully added!");
    todos.push(todo.value);
    }
    else alert("Please enter todo to add!")
})

function add_to_list() {
    let text = todo.value
    if(text !== ""){
    let subclass = "sub" + counter
    let x = counter + "c"
    let for_check = `class${x}`
    counter++
    // console.log(`checkbox is: ${for_check}`)

    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    //create tags
    const li = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const ed = document.createElement("button");
    ed.innerHTML = "Edit";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.setAttribute("id", `${for_check}`)
    checkbox.setAttribute("class", "checks")
    ed.setAttribute("class", "editbutton")
    ed.setAttribute("id", `${for_check}`)
    li2.setAttribute("id", "heading");

    li2.appendChild(checkbox);
    li2.appendChild(document.createTextNode(todo.value));

    li3.appendChild(document.createTextNode(date));
    li3.appendChild(ed);
    li3.setAttribute("class", `${subclass}`)

    li.appendChild(li2);
    li.appendChild(li3);
    li.setAttribute("class", `${subclass}`)

    ed.addEventListener("click", () => {
        alert("You are about to edit!")
        newid.value = text
        button.addEventListener("click", () => {
            li.setAttribute("class", "delclass");
            box.checked = false;
        })

    })

    ul.appendChild(li);
}
}
