"use strict";

const linkedInIcon = document.getElementById("linkedInIcon");
const twitterIcon = document.getElementById("twitterIcon");
const githubIcon = document.getElementById("githubIcon");

linkedInIcon.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/david-urbina-589327b9", "_blank");
});

twitterIcon.addEventListener("click", () => {
    window.open("https://twitter.com/WindUpDurb", "blank");
});

githubIcon.addEventListener("click", () => {
    window.open("https://github.com/windupdurb", "_blank");
});