// script.js
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const iframe = document.querySelector("#content-frame");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetPage = this.getAttribute("href");

            // Set the iframe src to load the content
            iframe.src = targetPage;
        });
    });
});
