const btn = document.getElementById("btn");
const color = document.querySelector(".color");


function getRandomNumber() {
    const colorCode = Math.floor(Math.random() * 16777215).toString(16);
    const hexColor = '#' + colorCode;
    document.body.style.backgroundColor = hexColor;
}

btn.addEventListener("click",getRandomNumber);
