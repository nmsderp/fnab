<<<<<<< HEAD
(function () {
    const script = document.currentScript;

    const basePath = script.src.substring(0, script.src.lastIndexOf("/") + 1);

    const iframe = document.createElement("iframe");
    iframe.src = basePath + "FNAB.html";
    iframe.style.width = script.getAttribute("data-width") || "800px";
    iframe.style.height = script.getAttribute("data-height") || "600px";
    iframe.style.border = "none";
    iframe.style.display = "block";

    script.parentNode.replaceChild(iframe, script);
})();
=======
(function () {
    const script = document.currentScript;

    const basePath = script.src.substring(0, script.src.lastIndexOf("/") + 1);

    const iframe = document.createElement("iframe");
    iframe.src = basePath + "FNAB.html";
    iframe.style.width = script.getAttribute("data-width") || "800px";
    iframe.style.height = script.getAttribute("data-height") || "600px";
    iframe.style.border = "none";
    iframe.style.display = "block";

    script.parentNode.replaceChild(iframe, script);
})();
>>>>>>> d7561c154973cb96da3b8ab5a88945610ffa2531
