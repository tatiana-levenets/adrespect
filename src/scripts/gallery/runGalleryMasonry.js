import Macy from "macy";

export const runGalleryMasonry = () => {
  return new Macy({
    container: "#gallery",
    columns: 3,
    margin: 42,
    breakAt: {
      1024: {
        margin: 22,
        columns: 2,
      },
      766: {
        margin: 5,
        columns: 2,
      },
    },
  });
};
