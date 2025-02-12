document.addEventListener("DOMContentLoaded", function () {
    // Animasi saat halaman dimuat
    const sections = document.querySelectorAll("section");
    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                section.classList.add("show");
            }
        });
    }
    revealSections();
    window.addEventListener("scroll", revealSections);

    // Animasi masuk untuk produk satu per satu
    const products = document.querySelectorAll(".product");
    products.forEach((product, index) => {
        product.style.animationDelay = `${index * 0.2}s`;
    });
});
