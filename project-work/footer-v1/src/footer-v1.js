export default function mountFooter() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Footer version 1");
    newDiv.appendChild(newContent);
    document.getElementById("global-footer").appendChild(newDiv);
}
