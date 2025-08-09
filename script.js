document.addEventListener("DOMContentLoaded", () => {
  // Lightbox functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox?.querySelector("img");

  document.querySelectorAll(".image-card img").forEach(img => {
    img.addEventListener("click", () => {
      if (lightbox && lightboxImg) {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      }
    });
  });

  if (lightbox) {
    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    });
  }

  // WhatsApp button
  const whatsappBtn = document.querySelector(".whatsapp-button");
  whatsappBtn?.addEventListener("click", () => {
    window.open("https://wa.me/27712345678", "_blank"); // replace with your number
  });

  // Email button
  const emailBtn = document.querySelector(".email-button");
  emailBtn?.addEventListener("click", () => {
    window.location.href = "mailto:youremail@example.com";
  });

});

// Video controls functions

function togglePlay(id) {
  const video = document.getElementById(id);
  if (video.paused) {
    video.muted = false;   // Unmute the video
    video.volume = 1.0;    // Set volume to max
    video.play();
  } else {
    video.pause();
  }
}

function skip(id, seconds) {
  const video = document.getElementById(id);
  video.currentTime += seconds;
}
