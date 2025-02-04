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



/*
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

        /*
        function stopImageRotation() {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
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
}*/

function scrollToEvent(event) {
    event.preventDefault(); // Prevent page refresh
    document.getElementById('event').scrollIntoView({ behavior: 'smooth' });
}
//container pop up
function openPopup(id) {
    const popup = document.getElementById(id);
    if (!popup) {
        console.error("Popup not found:", id);
        return;
    }

    popup.style.display = "flex"; // Open the correct popup

    // Initialize slider only for the opened popup
    setTimeout(() => initializeSlider(id), 100);
}

function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) popup.style.display = "none";
}

function initializeSlider(popupId, images) {
    const popup = document.getElementById(popupId);
    if (!popup) return;

    const mainImage = popup.querySelector(".main-image-container img");
    const thumbnails = popup.querySelectorAll(".thumbnail");
    const prevButton = popup.querySelector(".left-arrow");
    const nextButton = popup.querySelector(".right-arrow");

    if (!mainImage || thumbnails.length === 0) {
        console.error("Slider elements not found in:", popupId);
        return;
    }

    let currentImageIndex = 0;

    function updateActiveElements() {
        mainImage.src = images[currentImageIndex];

        thumbnails.forEach((thumbnail, index) => {
            thumbnail.classList.toggle("active", index === currentImageIndex);
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateActiveElements();
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateActiveElements();
    }

    function goToImage(index) {
        currentImageIndex = index;
        updateActiveElements();
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => goToImage(index));
    });

    if (prevButton) prevButton.addEventListener("click", prevImage);
    if (nextButton) nextButton.addEventListener("click", nextImage);

    updateActiveElements();
}

// Initialize sliders for each popup with their respective images
document.addEventListener("DOMContentLoaded", () => {
    initializeSlider("double-room", [
        "tiny-assets/IMG_0891_Original-min.webp",
        "tiny-assets/IMG_0892_Original-min.webp",
        "tiny-assets/IMG_0895_Original-min.webp",
        "tiny-assets/IMG_0897_Original-min.webp",
        "tiny-assets/IMG_0923_Original-min.webp",
        "tiny-assets/IMG_7961_Original-min.webp"
    ]);

    initializeSlider("double-room-2", [
        "tiny-assets/jpeg-optimizer_IMG_0935_Original.webp",
        "tiny-assets/jpeg-optimizer_IMG_0899_Original.webp",
        "tiny-assets/jpeg-optimizer_IMG_0936_Original.webp",
        "tiny-assets/jpeg-optimizer_IMG_0937_Original.webp",
        "tiny-assets/IMG_0923_Original-min.webp",
        "tiny-assets/IMG_7961_Original-min.webp"
    ]);
    initializeSlider("family-room", [
        "tiny-assets/jpeg-optimizer_IMG_0934_Original (1).webp",
        "tiny-assets/jpeg-optimizer_IMG_0899_Original (2).webp",
        "tiny-assets/IMG_0897_Original-min.webp",
        "tiny-assets/IMG_0923_Original-min.webp",
        "tiny-assets/IMG_7961_Original-min.webp",
        "tiny-assets/room-6.jpg"
    ]);
    initializeSlider("suit-room", [
        "tiny-assets/WhatsApp Image 2025-01-21 at 16.24.44_feb8ed77.webp",
        "tiny-assets/WhatsApp Image 2025-01-21 at 16.24.44_d65d69c8.webp",
        "tiny-assets/WhatsApp Image 2025-01-21 at 16.24.44_6371c077.webp",
        "tiny-assets/WhatsApp Image 2025-01-21 at 16.24.44_0d7cf8a1.webp",
        "tiny-assets/WhatsApp Image 2025-01-21 at 16.24.43_a352a527.webp",
        "tiny-assets/IMG_7961_Original-min.webp"
    ]);
    initializeSlider("suit-room-2", [
        "tiny-assets/jpeg-optimizer_IMG_0912_Original.webp",
        "tiny-assets/jpeg-optimizer_IMG_0919_Original.webp",
        "tiny-assets/WhatsApp Image 2025-01-21 at 16.24.43_640a7c18.webp",
        "tiny-assets/WhatsApp Image 2025-01-21 at 16.23.11_325a12bd.jpg",
        "tiny-assets/WhatsApp Image 2025-01-21 at 16.23.12_6844a223.jpg",
        "tiny-assets/IMG_7961_Original-min.webp"
    ]);
});

//gallery slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Auto Slide   if you need auto slide ,remove the commit "//"
//var slideIndex = 0;
//showSlides();
//function showSlides() {
//var i;
//  var slides = document.getElementsByClassName("mySlides");
// for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
// }
//  slideIndex++;
// if (slideIndex > slides.length) { slideIndex = 1 }
// slides[slideIndex - 1].style.display = "block";
// setTimeout(showSlides, 2000); // Change image every 2 seconds
//}
//test
function openLightbox(image) {
    document.getElementById("lightbox-img").src = image.src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}