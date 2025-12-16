document.addEventListener("DOMContentLoaded", () => {
    // 1. Load Config Data
    const clientNameEl = document.getElementById("clientName");
    const sessionDateEl = document.getElementById("sessionDate");
    const gridEl = document.getElementById("galleryGrid");

    if (typeof galleryConfig !== 'undefined') {
        clientNameEl.textContent = galleryConfig.clientName;
        sessionDateEl.textContent = galleryConfig.sessionDate;

        renderGallery(galleryConfig.images);
    } else {
        console.error("Config not found!");
    }

    // 2. Render Gallery Function
    function renderGallery(images) {
        // Handle "Single Item" case for centered layout
        if (images.length === 1) {
            gridEl.classList.add("single-item");
        } else {
            gridEl.classList.remove("single-item");
        }

        gridEl.innerHTML = ""; // Clear current

        images.forEach(filename => {
            const card = document.createElement("div");
            card.classList.add("gallery-item");

            // Define Paths
            // Assuming config just has "photo.jpg"
            // High Res path: images/high-res/photo.jpg
            // Web Res path: images/web-res/photo.jpg

            const webPath = `images/web-res/${filename}`;
            const printPath = `images/high-res/${filename}`;

            card.innerHTML = `
                <div class="image-wrapper">
                    <!-- Loading="lazy" for performance -->
                    <img src="${webPath}" alt="${filename}" loading="lazy">
                </div>
                <div class="item-actions">
                    <span class="file-name">${filename}</span>
                    <div class="buttons">
                        <a href="${webPath}" download class="btn btn-web">Web Size</a>
                        <a href="${printPath}" download class="btn btn-print">Print Size</a>
                    </div>
                </div>
            `;

            gridEl.appendChild(card);
        });
    }
});
