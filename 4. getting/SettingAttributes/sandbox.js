const link = document.querySelector("a");

console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.thenetninja.co.uk");
link.innerText = "TheNetNinja";

const mssg = document.querySelector("p");
console.log(mssg.getAttribute("class"));
mssg.setAttribute("class", "success");
mssg.setAttribute("style", "color: green;");
