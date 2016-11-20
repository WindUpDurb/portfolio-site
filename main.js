"use strict";

const linkedInIcon = document.getElementById("linkedInIcon");
const twitterIcon = document.getElementById("twitterIcon");
const githubIcon = document.getElementById("githubIcon");
const openResume = document.getElementById("openResume");
const dddDeployedHere = document.getElementById("dddDeployedHere");
const jsmDeployedHere = document.getElementById("jsmDeployedHere");
const dddCodeHere = document.getElementById("dddCodeHere");
const jsmCodeHere = document.getElementById("jsmCodeHere");

linkedInIcon.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/david-urbina-589327b9", "_blank");
});

twitterIcon.addEventListener("click", () => {
    window.open("https://twitter.com/WindUpDurb", "blank");
});

githubIcon.addEventListener("click", () => {
    window.open("https://github.com/windupdurb", "_blank");
});

openResume.addEventListener("click", () => {
   window.open("http://windupdurb.github.io/portfolio-site/resume.pdf", "_blank");
});

dddDeployedHere.addEventListener("click", () => {
    window.open("http://www.drinkdrankdrunk.tech/", "_blank");
});

dddCodeHere.addEventListener("click", () => {
    window.open("https://github.com/WindUpDurb/drink-drank-drunk-react", "_blank");
});


jsmDeployedHere.addEventListener("click", () => {
    window.open("http://www.jsm-app.tech/", "_blank");
});

jsmCodeHere.addEventListener("click", () => {
    window.open("https://github.com/amazingandyyy/jobrm", "_blank");
});
