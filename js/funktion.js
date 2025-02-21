document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");

    menuBtn.addEventListener("click", function () {
        // Växlar klassen 'active' för att visa/dölja menyn
        navLinks.classList.toggle("active");
    });
});
