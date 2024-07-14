const body = document.getElementById("idontknow");
const pTemplate = document.createElement("p");
const versionNode = document.createTextNode("0.0θ");
let p1 = pTemplate.cloneNode(true);
p1.appendChild(versionNode);
body.appendChild(p1)
