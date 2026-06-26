import "../styles/components.Hero.css";

function Hero() {
  const gridBtn = document.getElementById("grid-view-btn");
  const listBtn = document.getElementById("list-view-btn");
  const cardsGrids = document.querySelectorAll(".cards-grid");
  const searchInput = document.querySelector(".search-input");

  gridBtn?.addEventListener("click", () => {
    gridBtn.classList.add("active");
    listBtn?.classList.remove("active");
    cardsGrids.forEach(grid => grid.classList.remove("is-list-view"));
  });

  listBtn?.addEventListener("click", () => {
    listBtn.classList.add("active");
    gridBtn?.classList.remove("active");
    cardsGrids.forEach(grid => grid.classList.add("is-list-view"));
  });

  searchInput?.addEventListener("input", (e) => {
    const searchTerm = (e.target).value.toLowerCase();
    const cards = document.getElementById(".card");

    cards.forEach(card => {
      const title = card.querySelector(".card-title")?.textContent?.toLowerCase() || "";

      if (title.includes(searchTerm)) {
        (card).style.display = "";
      } else {
        (card).style.display = "none";
      }
    })
  })

  return (
    <main>
      <div class="main-hero"></div>
      <div class="main-controls">
        <div class="controls-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" class="search-input" placeholder="Search..." />
        </div>
          <div class="view-switcher">
            <button class="view-btn active" id="grid-view-btn" aria-label="Grid View">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            <button class="view-btn" id="list-view-btn" aria-label="List View">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="14" y2="3"></line><line x1="10" y1="21" x2="14" y2="21"></line></svg>
            </button>
          </div>
      </div>
    </main>
  )
}

export default Hero;
