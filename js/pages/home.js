window.Pages = window.Pages || {};

window.Pages.Home = function Home() {
  const categories = DataStore.getCategories();
  const totalProducts = DataStore.getProducts().length;

  const html = `
    <section class="hero" aria-label="Introduction">
      <div class="hero-inner">
        <p class="eyebrow">A discovery layer for your wardrobe</p>
        <h1 class="hero-title">
          Find the look.<br />
          <span class="outline-text">We'll point the way.</span>
        </h1>
        <p class="hero-sub">
          Quoltix Finds curates the fashion worth wearing — no checkout, no clutter.
          Browse a category, hit <em>View</em>, and we hand you off to where it's sold.
        </p>
        <div id="ticker-slot"></div>
        <div class="hero-stats">
          <div><strong>${categories.length}</strong><span>${categories.length === 1 ? 'Category' : 'Categories'}</span></div>
          <div><strong>${totalProducts}</strong><span>Pieces indexed</span></div>
          <div><strong>0%</strong><span>Checkout friction</span></div>
        </div>
      </div>
    </section>

    <section class="section search-section" aria-label="Search all products">
      <div id="home-search-slot"></div>
    </section>

    <section class="section" id="home-search-results-section" hidden aria-labelledby="home-results-heading">
      <div class="section-head">
        <h2 id="home-results-heading">Search results</h2>
        <p id="home-results-count"></p>
      </div>
      <div id="home-results-grid-slot"></div>
    </section>

    <section class="section" id="categories-section" aria-labelledby="categories-heading">
      <div class="section-head">
        <h2 id="categories-heading">Browse categories</h2>
        <p>Every category below is generated straight from the catalog — pick one to start exploring.</p>
      </div>
      <div class="category-grid" id="category-grid"></div>
    </section>

    <section class="section" id="trending-all-section" aria-labelledby="trending-all-heading">
      <div class="section-head">
        <h2 id="trending-all-heading">Trending across Quoltix Finds</h2>
        <p>The newest pieces added, pulled from every category.</p>
      </div>
      <div id="trending-all-slot"></div>
    </section>

    <section class="section about-section" id="about-section" aria-labelledby="about-heading">
      <div class="about-grid">
        <div class="about-statement">
          <p class="eyebrow">Why Quoltix Finds exists</p>
          <h2 id="about-heading">We're not a store.<br />We're a filter.</h2>
          <p>
            Quoltix Finds is a curated space for fashion inspiration and trending styles. We highlight
            carefully selected outfits and looks so you can explore ideas effortlessly — every piece here
            was chosen, not crawled, and one tap sends you straight to where it's actually sold.
          </p>
        </div>
        <ul class="about-pillars">
          <li>
            <h3>Curated picks</h3>
            <p>Handpicked fashion styles based on current trends and aesthetics — not an endless crawl.</p>
          </li>
          <li>
            <h3>Trending styles</h3>
            <p>Explore outfits and looks that are genuinely popular right now, refreshed regularly.</p>
          </li>
          <li>
            <h3>Easy discovery</h3>
            <p>Find styles quickly using categories and search — no clutter between you and the look.</p>
          </li>
          <li>
            <h3>Style inspiration</h3>
            <p>Get ideas for outfits and combinations, then head straight to the retailer to shop it.</p>
          </li>
        </ul>
      </div>
    </section>
  `;

  const element = Utils.fromHTML(`<div class="page page-home">${html}</div>`);
  const grid = element.querySelector('#category-grid');

  element
    .querySelector('#ticker-slot')
    .appendChild(Marquee.create(['CURATE', 'DISCOVER', 'STYLE', 'REPEAT']));

  const trendingAll = DataStore.sortByNewest(DataStore.getProducts()).slice(0, 8);
  const trendingAllGrid = ProductGrid.create(trendingAll, {
    badge: 'New',
    emptyText: 'Nothing trending yet — check back soon.'
  });
  element.querySelector('#trending-all-slot').appendChild(trendingAllGrid.element);

  if (categories.length === 0) {
    grid.appendChild(Utils.fromHTML('<p class="grid-empty-inline">No categories yet — check back soon.</p>'));
  } else {
    categories.forEach((category) => grid.appendChild(CategoryCard.create(category)));
  }

  // Site-wide search: lets someone jump straight to one specific piece
  // without picking a category first. Clearing it restores the normal
  // homepage (categories, trending, about) exactly as it was.
  const browseSections = [
    element.querySelector('#categories-section'),
    element.querySelector('#trending-all-section'),
    element.querySelector('#about-section')
  ];
  const searchResultsSection = element.querySelector('#home-search-results-section');
  const resultsGridSlot = element.querySelector('#home-results-grid-slot');
  const resultsCount = element.querySelector('#home-results-count');
  let homeResultsGrid = null;

  function showBrowseLayout() {
    searchResultsSection.hidden = true;
    browseSections.forEach((section) => {
      if (section) section.hidden = false;
    });
  }

  function showSearchLayout(query) {
    browseSections.forEach((section) => {
      if (section) section.hidden = true;
    });
    searchResultsSection.hidden = false;

    const matches = DataStore.sortByNewest(DataStore.searchProducts(DataStore.getProducts(), query));
    resultsCount.textContent = `${matches.length} result${matches.length === 1 ? '' : 's'} for "${query}"`;

    if (!homeResultsGrid) {
      homeResultsGrid = ProductGrid.create(matches, {
        emptyText: `No pieces match "${query}". Try a different name or SKU.`
      });
      resultsGridSlot.appendChild(homeResultsGrid.element);
    } else {
      homeResultsGrid.setProducts(matches);
    }
  }

  const homeSearch = SearchBar.create({
    placeholder: 'Search every category by name or SKU…',
    onSearch: (query) => {
      const trimmed = query.trim();
      if (trimmed.length === 0) showBrowseLayout();
      else showSearchLayout(trimmed);
    }
  });
  element.querySelector('#home-search-slot').appendChild(homeSearch);

  return {
    element,
    title: 'Quoltix Finds — Curated Fashion Discovery',
    description:
      'Quoltix Finds is a curated discovery platform for fashion — browse by category and get pointed straight to the source.'
  };
};
