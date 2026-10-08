
// =====================================================
// MUGHAL WOODWORK - SCRIPT.JS
// =====================================================

// =====================================================
// WHATSAPP NUMBER
// =====================================================

const WHATSAPP_NUMBER = "923058031673";


// =====================================================
// MOBILE MENU
// =====================================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
}


// =====================================================
// WHATSAPP QUOTE FORM
// =====================================================

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

    quoteForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get form fields
        const name =
            document.getElementById("name")?.value.trim() ||
            document.getElementById("fullName")?.value.trim() ||
            "";

        const phone =
            document.getElementById("phone")?.value.trim() ||
            "";

        const city =
            document.getElementById("city")?.value.trim() ||
            "";

        const project =
            document.getElementById("project")?.value.trim() ||
            document.getElementById("projectType")?.value.trim() ||
            "";

        const width =
            document.getElementById("width")?.value.trim() ||
            "";

        const length =
            document.getElementById("length")?.value.trim() ||
            "";

        const height =
            document.getElementById("height")?.value.trim() ||
            "";

        const budget =
            document.getElementById("budget")?.value.trim() ||
            "";

        const details =
            document.getElementById("details")?.value.trim() ||
            "";

        // =================================================
        // VALIDATION
        // =================================================

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (phone === "") {
            alert("Please enter your phone number.");
            return;
        }

        if (project === "") {
            alert("Please select your project type.");
            return;
        }

        if (details === "") {
            alert("Please describe your project.");
            return;
        }


        // =================================================
        // CREATE WHATSAPP MESSAGE
        // =================================================

        let message =
`Assalam-o-Alaikum Mughal Woodwork,

I want to request a woodwork quote.

Name: ${name}
Phone: ${phone}
City: ${city}
Project Type: ${project}
Width: ${width}
Length: ${length}`;

        if (height !== "") {
            message += `\nHeight: ${height}`;
        }

        if (budget !== "") {
            message += `\nBudget: ${budget}`;
        }

        message +=
`

Project Details:
${details}

Please contact me regarding this project.

Thank you.`;


        // =================================================
        // OPEN WHATSAPP WITH MESSAGE
        // =================================================

       const whatsappURL =
    "https://api.whatsapp.com/send?phone=" +
    WHATSAPP_NUMBER +
    "&text=" +
    encodeURIComponent(message);

// Open WhatsApp in a new tab
window.open(whatsappURL, "_blank", "noopener,noreferrer");

// Clear form
quoteForm.reset();


        // Empty form after opening WhatsApp
        quoteForm.reset();

    });
}


// =====================================================
// SMOOTH SCROLL
// =====================================================

const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
// =====================================================
// DARK / BRIGHT MODE
// =====================================================

// =====================================================
// DARK / BRIGHT MODE
// =====================================================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    // Website hamesha Bright Mode se start hogi
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙";

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "🌙";
        } else {
            themeToggle.textContent = "☀️";
        }

    });

}
// =====================================================
// ACTIVE NAVIGATION ON SCROLL
// =====================================================

const sections = document.querySelectorAll("section[id]");
const navLinksForScroll = document.querySelectorAll("#navMenu a[href^='#']");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinksForScroll.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});
