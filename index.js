document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const cards = document.querySelectorAll(".cards");

  function filterIcon(searchQuery) {
    const nothingFound = document.getElementById("nothing-alert");
    let number = 0;

    cards.forEach(function (card) {
      const name = card.querySelector("h2").textContent.toLocaleLowerCase();

      if (name.includes(searchQuery.toLocaleLowerCase())) {
        nothingFound.style.display = "none";
        card.style.display = "flex";
        number++;
      } else {
        card.style.display = "none";
      }
    });
    if (number == 0) {
      nothingFound.style.display = "block";
    }
  }

  searchInput.addEventListener("input", function () {
    const searchQuery = searchInput.value.trim();
    filterIcon(searchQuery);
  });
});
