// document.getElementById("id")
// document.querySelector("css selector")
const heading = document.querySelector("h1");
console.log(heading.innerText);

const button = document.getElementById("btnClick");

function changeHeadingText() {
    heading.innerText = "You clicked the button!";
    button.style.backgroundColor = "green";
}

//document.createElement("li")
// const ul = document.createElement("ul");
// const li = document.createElement("li");
const addButton = document.getElementById("btnAdd");
const ul = document.getElementById("list");

function addListItem() {
    const li = document.createElement("li");
    li.innerText = "New Item";
    // document.body.appendChild(ul);
    ul.appendChild(li);
}