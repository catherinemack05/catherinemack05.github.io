/* =========================================================
   CATHERINE MACK — PERSONAL WEBSITE
   Interactive functionality
   ========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("open");

            menuToggle.classList.toggle(
                "open",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        navLinks.querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener("click", () => {

                    navLinks.classList.remove(
                        "open"
                    );

                    menuToggle.classList.remove(
                        "open"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });

    }


    /* =====================================================
       AREA OF INTEREST SWITCHER
       ===================================================== */

    const focusButtons =
        document.querySelectorAll(
            ".focus-button"
        );

    const focusDescription =
        document.getElementById(
            "focusDescription"
        );


    const focusContent = {

        branding:
            "Interested in building lifestyle brands and creating meaningful connections between brands and consumers.",

        influencer:
            "Interested in how creators and influencers can help brands build awareness, engagement, and authentic consumer relationships.",

        storytelling:
            "Interested in using content, visual media, and creative strategy to tell compelling stories about brands and their impact."

    };


    focusButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const focus =
                button.dataset.focus;


            focusButtons.forEach((item) => {

                item.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            if (
                focusContent[focus] &&
                focusDescription
            ) {

                focusDescription.style.opacity =
                    "0";


                setTimeout(() => {

                    focusDescription.textContent =
                        focusContent[focus];

                    focusDescription.style.opacity =
                        "1";

                }, 150);

            }

        });

    });


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".about-grid, " +
            ".education-card, " +
            ".experience-card, " +
            ".leadership-card, " +
            ".skills-layout, " +
            ".contact-content"
        );


    revealElements.forEach((element) => {

        element.classList.add(
            "reveal"
        );

    });


    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observerInstance.unobserve(
                                entry.target
                            );

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

            element.classList.add(
                "visible"
            );

        });

    }


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navigationItems =
        document.querySelectorAll(
            ".nav-links a"
        );


    const updateActiveNavigation =
        () => {

            let currentSection = "";


            sections.forEach((section) => {

                const sectionTop =
                    section.offsetTop - 180;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.id;

                }

            });


            navigationItems.forEach((link) => {

                link.classList.remove(
                    "active"
                );


                const destination =
                    link.getAttribute(
                        "href"
                    );


                if (
                    destination ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

        };


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        {
            passive: true
        }
    );


    updateActiveNavigation();


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const currentYear =
        document.getElementById(
            "currentYear"
        );


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }

});
