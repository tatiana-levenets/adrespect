const incorrectStructureError =
  new Error(`[Carousel] HTML structure should be such as: 
<div id="">
  <ul>
    <li></li>
    ...
  </ul>
</div>`);

const containerError = new Error(
  `[Carousel] pass valid 'containerSelector' or ensure that elements for the selector is builded`
);

export class CarouselBase {
  currentSlideIdx;

  totalSlidesCount;
  initialSlide;
  slideWidth;
  totalSlidesWith;

  container;
  ul;

  constructor(options) {
    this.currentSlideIdx = 0;
    this.options = options;

    this.initializeNodes();
    this.initializeMetrics();
    this.initializeStyles();

    if (options.shouldReinitializeOnResize) {
      this.applyResizeReinitialization();
    }
  }

  initializeNodes() {
    this.container = document.querySelector(this.options.containerSelector);
    if (!this.container) {
      throw containerError;
    }

    this.ul = this.container.querySelector("ul");
    if (!this.ul) {
      throw incorrectStructureError;
    }
  }

  initializeStyles = () => {
    this.container.style.overflow = "hidden";
    this.ul.style.display = "flex";
    this.ul.style.width = `${this.totalSlidesWith}px`;
    this.ul.style.transition = `${this.options.duration || 300}ms`;
  };

  initializeMetrics() {
    this.totalSlidesCount = this.ul.childElementCount;
    this.initialSlide = this.ul.children[this.currentSlideIdx];
    this.slideWidth = this.initialSlide.offsetWidth;
    this.totalSlidesWith = this.slideWidth * this.totalSlidesCount;
  }

  applyResizeReinitialization() {
    window.addEventListener("resize", () => this.initializeMetrics());
  }

  updateUlPosition(position) {
    this.ul.style.transform = `translateX(${position}px)`;
  }

  handleNext() {
    if (this.currentSlideIdx + 1 < this.totalSlidesCount) {
      const newPosition = -(++this.currentSlideIdx * this.slideWidth);
      this.updateUlPosition(newPosition);
    }
  }

  handlePrev() {
    if (this.currentSlideIdx) {
      const newPosition = -(--this.currentSlideIdx * this.slideWidth);
      this.updateUlPosition(newPosition);
    }
  }
}
