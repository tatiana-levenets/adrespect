export const runGalleryImageView = () => {
  const container = document.getElementById("preview");
  const img = container.querySelector("img");

  gallery.addEventListener("click", ({ target }) => {
    if (target.tagName !== "IMG") {
      return;
    }
    img.src = target.src;
    img.alt = target.alt;

    document.body.style.overflow = "hidden";

    container.classList.remove("opacity-0");
    container.classList.remove("invisible");
  });

  container.addEventListener("click", () => {
    document.body.style.overflow = "";
    container.classList.add("opacity-0");
    container.classList.add("invisible");
  });
};
