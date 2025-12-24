let images = document.querySelectorAll(".gallery img");
let currentIndex = 0;

function openLightbox(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
    currentIndex = Array.from(images).indexOf(img);
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function nextImg() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function prevImg() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex].src;
}

// Filter
function filterImages(category) {
    images.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}
