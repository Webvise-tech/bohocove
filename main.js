const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
    ...scrollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".card", {
    ...scrollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".event__title", {
    ...scrollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".event__para", {
    ...scrollRevealOption,
    interval: 1000,
});
ScrollReveal().reveal(".event-description li", {
    ...scrollRevealOption,
    interval: 1000,
});
ScrollReveal().reveal(".image1", {
    ...scrollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".image2", {
    ...scrollRevealOption,
    interval: 1000,
});
ScrollReveal().reveal(".heading", {
    ...scrollRevealOption,
    interval: 2000,
});
ScrollReveal().reveal(".banner__card", {
    ...scrollRevealOption,
    interval: 500,
});
// Ensure you include the ScrollReveal library before using this script.
ScrollReveal().reveal(".contact-info h3, .contact-info .text, .contact-info .information, .social-media", {
    duration: 1000,
    distance: "50px",
    easing: "ease-in-out",
    origin: "bottom",
    interval: 500, // Staggered effect on each element
    opacity: 0, // Start with invisible elements
    delay: 200,
});

ScrollReveal().reveal(".contact-form h3, .contact-form .input-container, .contact-form .btn__contact", {
    duration: 1000,
    distance: "50px",
    easing: "ease-in-out",
    origin: "bottom",
    interval: 400, // Staggered effect on each input field
    opacity: 0, // Start with invisible elements
    delay: 200,
});

// service container
ScrollReveal().reveal(".service__list li", {
    ...scrollRevealOption,
    interval: 500,
    origin: "right",
});
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});
//template_unbiz6i
//service_0b9rolc
//public key IWxTW5DhPlhKeEsk
function contact(event) {
    event.preventDefault();
    emailjs.sendForm(
        'service_0b9rolc', // Service ID
        'template_unbiz6i', // Template ID
        event.target, // The form element
        'IWxTW5DhPlhKeEskS' // User ID or Public Key
    ).then(() => {
        // Show success message with smooth fade-in
        const successMessage = document.getElementById('success-message');
        successMessage.classList.add('show');
        console.log("Email sent successfully!");
    }).catch((error) => {
        console.error("Failed to send email:", error);
    });
}



document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".room__card").forEach((card) => {
        const images = [
            ["/tiny-assets/double-room-1.jpg", "/tiny-assets/double-room-2-0.jpg", "/tiny-assets/double-room-3.jpg"],
            ["/tiny-assets/double-del-room-1.jpg", "/tiny-assets/double-del-room-2.jpg", "/tiny-assets/double-del-room-3.jpg"],
            ["/tiny-assets/family-room-10.jpg", "/tiny-assets/family-room-2.jpg", "/tiny-assets/family-room-3.jpg"],
            ["/tiny-assets/suit-room-1.jpg", "/tiny-assets/suit-room-2.jpg", "/tiny-assets/family-room-10.jpg"],
        ];

        let currentIndex = 0;
        let intervalId = null; // Variable to store the interval ID
        const roomImage = card.querySelector(".roomImage");
        const bullets = card.querySelectorAll(".bullet");

        function updateImage(index) {
            roomImage.src = images[Array.from(card.parentElement.children).indexOf(card)][index];
            roomImage.classList.remove("fade-in");
            void roomImage.offsetWidth;
            roomImage.classList.add("fade-in");

            bullets.forEach((bullet, i) => {
                bullet.classList.toggle("active", i === index);
            });
        }

        function startImageRotation() {
            if (!intervalId) {
                intervalId = setInterval(() => {
                    currentIndex = (currentIndex + 1) % images[Array.from(card.parentElement.children).indexOf(card)].length;
                    updateImage(currentIndex);
                }, 2000);
            }
        }

        function stopImageRotation() {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }

        card.addEventListener("mouseenter", startImageRotation);
        card.addEventListener("mouseleave", stopImageRotation);

        bullets.forEach((bullet) => {
            bullet.addEventListener("click", (e) => {
                currentIndex = parseInt(e.target.dataset.index, 10);
                updateImage(currentIndex);
            });
        });

        updateImage(currentIndex);
    });
});


function scrollToEvent(event) {
    event.preventDefault(); // Prevent page refresh
    document.getElementById('event').scrollIntoView({ behavior: 'smooth' });
}