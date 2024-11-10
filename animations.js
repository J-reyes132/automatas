document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
        section.style.transform = "translateY(20px)";
    });

    setTimeout(() => {
        sections.forEach(section => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        });
    }, 500);
});