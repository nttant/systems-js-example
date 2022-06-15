System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('default', mountFooter);

            function mountFooter() {
                const newDiv = document.createElement("div");
                const newContent = document.createTextNode("Footer version 1");
                newDiv.appendChild(newContent);
                document.getElementById("global-footer").appendChild(newDiv);
            }

        })
    };
}));
