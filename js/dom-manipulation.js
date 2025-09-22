// document.getElementById("id")
// document.querySelector("css selector")
const heading = document.querySelector("h1");
console.log(heading.innerText);

const button = document.getElementById("btnClick");

function changeHeadingText() {
    heading.innerText = "You clicked the button!";
    button.style.backgroundColor = "green";
}