System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('default', mountHeader);

            function mountHeader() {
                const newDiv = document.createElement("div");
                const newContent = document.createTextNode("Header version 1");
                newDiv.appendChild(newContent);
                document.getElementById("global-header").appendChild(newDiv);
            }

        })
    };
}));
