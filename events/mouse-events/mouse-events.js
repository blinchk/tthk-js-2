const button = document.querySelector("#btn-1");
const paragraph = document.querySelector("#paragraph-1");

button.addEventListener('click', e => {
    paragraph.innerText = Math.random();
})