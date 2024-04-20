const images = document.querySelectorAll("#gallery img");

images.forEach(image => {
  image.addEventListener("mouseover", showCaption);
  image.addEventListener("mouseleave", hideCaption);
});

function showCaption(event) {
  const captionId = event.target.dataset.captionId;
  const caption = document.getElementById(captionId);
  caption.style.display = "block";
}

function hideCaption(event) {
  const captionId = event.target.dataset.captionId;
  const caption = document.getElementById(captionId);
  caption.style.display = "none";
}
