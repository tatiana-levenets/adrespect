import { CarouselBase } from "./CarouselBase";

export const runTopCarousel = () => {
  const carousel = new CarouselBase({
    containerSelector: "#slider-top",
    duration: 700,
    shouldReinitializeOnResize: true,
  });

  const btnNext = document.querySelector("#slider-top-next-btn");
  const btnPrev = document.querySelector("#slider-top-prev-btn");

  btnNext.addEventListener("click", () => carousel.handleNext());
  btnPrev.addEventListener("click", () => carousel.handlePrev());
};
