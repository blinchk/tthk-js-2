const selectedLink = document.querySelector("#tthk-link");
console.log(selectedLink.getAttribute("href"));

selectedLink.setAttribute("href", "https://thk.edupage.org");

selectedLink.classList.add("violet");