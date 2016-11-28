"use strict";

const linkedInIcon = document.getElementById("linkedInIcon");
const twitterIcon = document.getElementById("twitterIcon");
const githubIcon = document.getElementById("githubIcon");
const openResume = document.getElementById("openResume");
const dddDeployedHere = document.getElementById("dddDeployedHere");
const jsmDeployedHere = document.getElementById("jsmDeployedHere");
const dddCodeHere = document.getElementById("dddCodeHere");
const jsmCodeHere = document.getElementById("jsmCodeHere");
const toBlog = document.getElementById("toBlog");
const imageReadDeployedHere = document.getElementById("imageReadDeployedHere");
const imageReadCodeHere = document.getElementById("imageReadCodeHere");

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
   window.open("http://windupdurb.github.io/portfolio-site/resumeDec2016.pdf", "_blank");
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

toBlog.addEventListener("click", () => {
    window.open("http://www.windupdurb.com", "_blank");
});

imageReadDeployedHere.addEventListener("click", () => {
    window.open("http://www.imageread.tech", "_blank");
});

imageReadCodeHere.addEventListener("click", () => {
    window.open("https://github.com/WindUpDurb/news-project-express", "_blank");
});

function goToProject(project) {
    document.getElementById("projectsDiv").scrollTop = document.getElementById(project).offsetTop;

}

$(document).ready(() => {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});
