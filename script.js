/* =========================================================
   CATHERINE MACK — PERSONAL WEBSITE
   Interactive functionality
   ========================================================= */


document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------
       MOBILE NAVIGATION
    ------------------------- */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("open");

            menuToggle.classList.toggle("open", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        // Close mobile menu after selecting a link
        navLinks.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");
                menuToggle.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* -------------------------
       INTEREST / FOCUS SWITCHER
    ------------------------- */

    const focusButtons =
        document.querySelectorAll(".focus-button");

    const focusDescription =
        document.getElementById("focusDescription");


    const focusContent = {

        beauty:
            "Exploring how brands connect with consumers through beauty, lifestyle, and emerging trends.",

        consumer:
            "Interested in understanding consumer behavior and using insights and analytics to inform marketing decisions.",

        creative:
            "Interested in creative strategy, content creation, brand storytelling, and social media marketing."

    };


    focusButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const focus = button.dataset.focus;

            // Remove active state
            focusButtons.forEach((item) => {
                item.classList.remove("active");
            });

            // Add active state
            button.classList.add("active");

            // Update text
            if (focusContent[focus]) {

                focusDescription.style.opacity = "0";

                setTimeout(() => {

                    focusDescription.textContent =
                        focusContent[focus];

                    focusDescription.style.opacity = "1";

                }, 150);

            }

        });

    });


    /* -------------------------
       SCROLL REVEAL
    ------------------------- */

    const revealElements = document.querySelectorAll(
        ".section-heading, .about-grid, .education-card, .experience-card, .leadership-card, .skills-layout, .contact-content"
    );


    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observerInstance.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        revealElements.forEach((element) => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("visible");
        });

    }


    /* -------------------------
       ACTIVE NAVIGATION
    ------------------------- */

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    const navigationItems =
        document.querySelectorAll(".nav-links a");


    const updateActiveNavigation = () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }

        });


        navigationItems.forEach((link) => {

            link.classList.remove("active");

            const destination =
                link.getAttribute("href");

            if (destination === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    updateActiveNavigation();


    /* -------------------------
       CURRENT YEAR
    ------------------------- */

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }

});
