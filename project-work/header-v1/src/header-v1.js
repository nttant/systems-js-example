export default function mountHeader() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Header version 1");
    newDiv.appendChild(newContent);
    document.getElementById("global-header").appendChild(newDiv);
}
