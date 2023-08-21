export const runToggleGallery = () => {
  const btn = document.getElementById("toggle-gallery");
  const btnArrow = btn.querySelector(".arrow");
  const btnText = btn.querySelector("span:first-child");

  const wrapper = document.getElementById("gallery");
  const gradient = document.getElementById("gallery-gradient");

  btn.addEventListener("click", () => {
    wrapper.classList.toggle("max-h-[9999px]");
    gradient.classList.toggle("opacity-0");
    btnArrow.classList.toggle("rotate-180");

    btnText.innerText = btnText.innerText === "Zwiń" ? "Rozwiń" : "Zwiń";
  });
};
