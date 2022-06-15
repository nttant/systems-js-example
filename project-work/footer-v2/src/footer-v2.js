export function mountFooter() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Footer version 2");
    newDiv.appendChild(newContent);
    document.getElementById("global-footer").appendChild(newDiv);
}
