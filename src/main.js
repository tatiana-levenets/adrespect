import "./index.css";
import { runTopCarousel } from "./scripts/carousel/runTopCarousel";
import { runGalleryImageView } from "./scripts/gallery/runGalleryImageView";
import { runGalleryMasonry } from "./scripts/gallery/runGalleryMasonry";
import { runToggleGallery } from "./scripts/gallery/runToggleGallery";
import { runToggleSearch } from "./scripts/search/runToggleSearch";

runGalleryMasonry();
runTopCarousel();
runToggleGallery();
runGalleryImageView();
runToggleSearch();
