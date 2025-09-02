document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav a");
    const pages = document.querySelectorAll(".page");

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            // Remove active class from all links
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            // Hide all pages
            pages.forEach(page => page.classList.remove("active"));

            // Show the selected page
            const target = link.getAttribute("data-page");
            document.getElementById(target).classList.add("active");
        });
    });

    // Set Home active by default
    links[0].classList.add("active");
});
