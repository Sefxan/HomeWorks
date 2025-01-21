document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
        header.classList.toggle("active");
        let content = header.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});