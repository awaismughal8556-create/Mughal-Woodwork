
document.addEventListener("DOMContentLoaded", function () {
    const pictures = document.querySelectorAll(".picture-card img");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const counter = document.getElementById("lightboxCounter");

    const closeBtn = document.getElementById("lightboxClose");
    const prevBtn = document.getElementById("lightboxPrev");
    const nextBtn = document.getElementById("lightboxNext");

    if (
        !pictures.length ||
        !lightbox ||
        !lightboxImage ||
        !counter ||
        !closeBtn ||
        !prevBtn ||
        !nextBtn
    ) {
        console.error("Gallery error: HTML elements missing.");
        return;
    }

    let currentIndex = 0;

    function showPicture(index) {
        currentIndex = (index + pictures.length) % pictures.length;

        lightboxImage.src = pictures[currentIndex].src;
        lightboxImage.alt = pictures[currentIndex].alt;

        counter.textContent =
            `${currentIndex + 1} / ${pictures.length}`;
    }

    function openPicture(index) {
        showPicture(index);

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closePicture() {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    pictures.forEach(function (picture, index) {
        picture.style.cursor = "pointer";

        picture.addEventListener("click", function () {
            openPicture(index);
        });
    });

    nextBtn.addEventListener("click", function () {
        showPicture(currentIndex + 1);
    });

    prevBtn.addEventListener("click", function () {
        showPicture(currentIndex - 1);
    });

    closeBtn.addEventListener("click", closePicture);

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closePicture();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (!lightbox.classList.contains("active")) return;

        if (event.key === "ArrowRight") {
            showPicture(currentIndex + 1);
        }

        if (event.key === "ArrowLeft") {
            showPicture(currentIndex - 1);
        }

        if (event.key === "Escape") {
            closePicture();
        }
    });
});
