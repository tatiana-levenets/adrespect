export const runToggleSearch = () => {
  const search = document.getElementById("search");
  const input = document.getElementById("input");

  const searchClickHandler = () => {
    input.classList.toggle("search_visible");
    input.value = "";
  };

  search.addEventListener("click", searchClickHandler);
};
