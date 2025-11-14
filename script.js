document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery-grid");
    const formats = ["jpg", "jpeg", "png", "webp"];
    const maxImages = 200;

    for (let i = 1; i <= maxImages; i++) {
        formats.forEach(ext => {
            const imgPath = `public/images/${i}.${ext}`;
            const img = new Image();
            img.src = imgPath;

            img.onload = () => {
                const el = document.createElement("img");
                el.src = imgPath;
                el.alt = "Galeri";
                gallery.appendChild(el);
            };
        });
    }
});
