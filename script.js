// Smooth scrolling for menu links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Highlight active menu item while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Back to Top button
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.right = "20px";
backToTop.style.bottom = "70px";
backToTop.style.padding = "10px 15px";
backToTop.style.fontSize = "20px";
backToTop.style.display = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.backgroundColor = "green";
backToTop.style.color = "white";
backToTop.style.border = "none";
backToTop.style.cursor = "pointer";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Typewriter effect on banner subtitle
const typeText = document.querySelector("#banner h3");
const text = "Aspiring Full Stack Developer";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typeText.innerHTML = text.substring(0, i + 1);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();
