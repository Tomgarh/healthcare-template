// ======================================
// FAQ
// ======================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const answer = item.querySelector(".faq-answer");
        const icon = question.querySelector("span");

        faqItems.forEach((otherItem) => {

            if (otherItem !== item) {

                otherItem.querySelector(".faq-answer").style.maxHeight = null;
                otherItem.querySelector(".faq-question span").textContent = "+";

            }

        });

        if (answer.style.maxHeight) {

            answer.style.maxHeight = null;
            icon.textContent = "+";

        } else {

            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "−";

        }

    });

});

// ======================================
// MOBILE MENU
// ======================================

const menuToggle = document.querySelector(".menu-toggle");
const menuIcon = menuToggle.querySelector("i");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuIcon.classList.add("rotate");
        menuIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        menuIcon.classList.remove("rotate");
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    }

});

// ======================================
// SCROLL TO TOP
// ======================================

const scrollBtn = document.getElementById("scrollTop");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            scrollBtn.style.display = "flex";

        } else {

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ======================================
// COUNTERS
// ======================================

const counters = document.querySelectorAll(".counter");

function animateCounters() {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        const updateCounter = () => {

            const current = Number(counter.innerText);

            const increment = Math.ceil(target / 100);

            if (current < target) {

                counter.innerText = current + increment;

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

}

if (counters.length > 0) {

    animateCounters();

}

// ======================================
// FADE ANIMATION
// ======================================

const fadeElements = document.querySelectorAll(".fade");

if (fadeElements.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {
    
            if (entry.isIntersecting) {
    
                entry.target.classList.add("show");
    
                observer.unobserve(entry.target);
    
            }
    
        });
    
    }, {
        threshold: 0.1
    });

    fadeElements.forEach((element) => {

        observer.observe(element);

    });

}

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const message = document.getElementById("message").value;
    
        const whatsappNumber = "2349034292248"; 
    
        const text =
    `*New Appointment Request*
    
    👤 Name: ${name}
    
    📞 Phone: ${phone}
    
    📧 Email: ${email}
    
    🩺 Service: ${service}
    
    📅 Date: ${date}
    
    🕒 Time: ${time}
    
    📝 Additional Information:
    ${message}`;
    
        const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
        window.open(url, "_blank");
    

    });

}

// ======================================
// CONTACT FORM
// ======================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        if (!name || !phone || !message) {
            alert("Please fill in your name, phone number and message.");
            return;
        }

        const whatsappNumber = "2348102321111";

        const text =
`*New Website Enquiry*

👤 Name: ${name}

📞 Phone: ${phone}

📧 Email: ${email || "Not provided"}

💬 Message:
${message}`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

    });

}

// ======================================
// MEDICINE SEARCH
// ======================================

const medicineSearch = document.getElementById("medicineSearch");

if (medicineSearch) {

    medicineSearch.addEventListener("input", function () {

        const searchValue = this.value.toLowerCase().trim();

        const rows = document.querySelectorAll("#medicineTable tbody tr");

        rows.forEach((row) => {

            const medicine = row.cells[0].textContent.toLowerCase();
            const category = row.cells[1].textContent.toLowerCase();
            const status = row.cells[2].textContent.toLowerCase();

            if (
                medicine.includes(searchValue) ||
                category.includes(searchValue) ||
                status.includes(searchValue)
            ) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    });

}