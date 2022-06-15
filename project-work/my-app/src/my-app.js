function mountMyApp() {
    const newElement = document.createElement("h1");
    const newContent = document.createTextNode("My App");
    newElement.appendChild(newContent);
    document.getElementById("root").appendChild(newElement);
}

mountMyApp();
