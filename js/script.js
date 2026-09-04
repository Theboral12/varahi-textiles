const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });


    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });

    });
}
