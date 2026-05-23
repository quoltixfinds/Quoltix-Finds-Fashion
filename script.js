document.addEventListener('DOMContentLoaded', function () {

  // =========================
  // DARK MODE
  // =========================

  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙';
  } else {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    const isDark = body.classList.contains('dark-mode');

    themeToggle.textContent = isDark ? '☀️' : '🌙';

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // =========================
  // MOBILE MENU
  // =========================

  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburgerBtn && navMenu) {

    hamburgerBtn.addEventListener('click', () => {

      navMenu.classList.toggle('active');

      hamburgerBtn.textContent =
        navMenu.classList.contains('active') ? '✕' : '☰';
    });

    document.addEventListener('click', (e) => {

      if (
        !hamburgerBtn.contains(e.target) &&
        !navMenu.contains(e.target)
      ) {
        navMenu.classList.remove('active');
        hamburgerBtn.textContent = '☰';
      }
    });
  }

  // =========================
  // PRODUCT CARD
  // =========================

  function createProductCard(product) {

    const card = document.createElement('div');

    card.className = 'product-card';

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="sku">SKU: ${product.sku}</div>
      <button onclick="redirectToProduct(${product.id})">
        View
      </button>
    `;

    return card;
  }

  // =========================
  // RENDER PRODUCTS
  // =========================

  function renderProducts(container, productsList) {

    container.innerHTML = '';

    if (productsList.length === 0) {

      container.innerHTML =
        '<p class="no-products">No products found</p>';

      return;
    }

    productsList.forEach(product => {

      container.appendChild(createProductCard(product));
    });
  }

  // =========================
  // LIMITED PRODUCTS
  // =========================

  function renderLimitedProducts(
    container,
    productsList,
    genderFilter
  ) {

    container.innerHTML = '';

    const limitedProducts = productsList.slice(0, 7);

    limitedProducts.forEach(product => {

      container.appendChild(createProductCard(product));
    });

    // View More Card

    if (productsList.length > 7) {

      const viewMoreCard = document.createElement('div');

      viewMoreCard.className =
        'product-card view-more-card';

      viewMoreCard.innerHTML = `
        <div class="view-more-content">
          <button>View More</button>
        </div>
      `;

      viewMoreCard.addEventListener('click', () => {

        window.location.href =
          `product.html?gender=${genderFilter}`;
      });

      container.appendChild(viewMoreCard);
    }
  }

  // =========================
  // SEARCH
  // =========================

  function debounce(func, delay) {

    let timeout;

    return function (...args) {

      clearTimeout(timeout);

      timeout = setTimeout(() => {

        func.apply(this, args);

      }, delay);
    };
  }

  const searchInput =
    document.getElementById('search-input');

  if (searchInput) {

    const debouncedSearch = debounce(() => {

      const query =
        searchInput.value.toLowerCase().trim();

      if (query) {

        const filtered = products.filter(p =>

          p.name.toLowerCase().includes(query) ||

          p.sku.toLowerCase().includes(query)
        );

        // Product page

        if (
          document.getElementById('products-container')
        ) {

          const productsContainer =
            document.getElementById('products-container');

          productsContainer.innerHTML = '';

          const grid =
            document.createElement('div');

          grid.className = 'product-grid';

          renderProducts(grid, filtered);

          productsContainer.appendChild(grid);
        }

        // Homepage

        if (
          document.getElementById('search-results')
        ) {

          document.getElementById(
            'women-fashion'
          ).style.display = 'none';

          document.getElementById(
            'mens-fashion'
          ).style.display = 'none';

          document.getElementById(
            'couple-wear'
          ).style.display = 'none';

          document.getElementById(
            'search-results'
          ).style.display = 'block';

          const searchGrid =
            document.querySelector(
              '#search-results .product-grid'
            ) ||

            document
              .getElementById('search-results')
              .appendChild(
                document.createElement('div')
              );

          searchGrid.className = 'product-grid';

          renderProducts(searchGrid, filtered);
        }

      } else {

        // Reset homepage

        if (
          document.getElementById('search-results')
        ) {

          document.getElementById(
            'women-fashion'
          ).style.display = 'block';

          document.getElementById(
            'mens-fashion'
          ).style.display = 'block';

          document.getElementById(
            'couple-wear'
          ).style.display = 'block';

          document.getElementById(
            'search-results'
          ).style.display = 'none';
        }

        // Reset product page

        if (
          document.getElementById('products-container')
        ) {

          renderCategoriesView(products);
        }
      }

    }, 300);

    searchInput.addEventListener(
      'input',
      debouncedSearch
    );
  }

  // =========================
  // HOMEPAGE SECTIONS
  // =========================

  // Women

  if (
    document.getElementById('women-fashion')
  ) {

    const womenGrid =
      document.querySelector(
        '#women-fashion .product-grid'
      ) ||

      document
        .getElementById('women-fashion')
        .appendChild(
          document.createElement('div')
        );

    womenGrid.className = 'product-grid';

    const womenProducts =
      products.filter(
        p => p.gender === 'female'
      );

    renderLimitedProducts(
      womenGrid,
      womenProducts,
      'female'
    );
  }

  // Men

  if (
    document.getElementById('mens-fashion')
  ) {

    const menGrid =
      document.querySelector(
        '#mens-fashion .product-grid'
      ) ||

      document
        .getElementById('mens-fashion')
        .appendChild(
          document.createElement('div')
        );

    menGrid.className = 'product-grid';

    const menProducts =
      products.filter(
        p => p.gender === 'male'
      );

    renderLimitedProducts(
      menGrid,
      menProducts,
      'male'
    );
  }

  // Couple

  if (
    document.getElementById('couple-wear')
  ) {

    const coupleGrid =
      document.querySelector(
        '#couple-wear .product-grid'
      ) ||

      document
        .getElementById('couple-wear')
        .appendChild(
          document.createElement('div')
        );

    coupleGrid.className = 'product-grid';

    const coupleProducts =
      products.filter(
        p => p.gender === 'unisex'
      );

    renderLimitedProducts(
      coupleGrid,
      coupleProducts,
      'unisex'
    );
  }
  // =========================
  // PRODUCT PAGE
  // =========================

  let currentLimit = 8;
  let filteredProducts = [];

  if (
    document.getElementById('products-container')
  ) {

    const categoryFilter =
      document.getElementById(
        'category-filter'
      );

    const genderFilter =
      document.getElementById(
        'gender-filter'
      );

    const clearFilters =
      document.getElementById(
        'clear-filters'
      );

    const productsContainer =
      document.getElementById(
        'products-container'
      );

    let activeFilters = {

      category: '',
      gender: ''
    };

    // =========================
    // URL FILTER
    // =========================

    const urlParams =
      new URLSearchParams(
        window.location.search
      );

    const genderFromURL =
      urlParams.get('gender');

    if (genderFromURL) {

      activeFilters.gender =
        genderFromURL;

      genderFilter.value =
        genderFromURL;
    }

    // =========================
    // CATEGORY VIEW
    // =========================

    function renderCategoriesView(
      productsList
    ) {

      productsContainer.innerHTML = '';

      const categories = [

        'Dress',
        'Shirt',
        'Cargo',
        'Kurta',
        'Sweatshirt',
        'Couple Wear'
      ];

      categories.forEach(cat => {

        const catProducts =
          productsList.filter(
            p => p.category === cat
          );

        if (
          catProducts.length === 0
        ) return;

        const section =
          document.createElement(
            'section'
          );

        const title =
          document.createElement(
            'h2'
          );

        title.textContent = cat;

        section.appendChild(title);

        const grid =
          document.createElement(
            'div'
          );

        grid.className = 'product-grid';

        // SHOW ONLY 8 PRODUCTS

        const limitedProducts =
          catProducts.slice(0, 8);

        renderProducts(
          grid,
          limitedProducts
        );

        section.appendChild(grid);

        // EXPLORE MORE BUTTON

        if (catProducts.length > 8) {

          const loadMoreWrapper =
            document.createElement('div');

          loadMoreWrapper.className =
            'load-more-wrapper';

          const loadMoreBtn =
            document.createElement('button');

          loadMoreBtn.className =
            'load-more-btn';

          loadMoreBtn.textContent =
            'Explore More';

          loadMoreBtn.addEventListener(
            'click',
            () => {

              activeFilters.category = cat;

              categoryFilter.value = cat;

              filteredProducts =
                catProducts;

              currentLimit = 16;

              renderLimitedFilteredProducts();
            }
          );

          loadMoreWrapper.appendChild(
            loadMoreBtn
          );

          section.appendChild(
            loadMoreWrapper
          );
        }

        productsContainer.appendChild(
          section
        );
      });
    }

    // =========================
    // APPLY FILTERS
    // =========================

    function applyFilters(
      reset = true
    ) {

      if (reset) {
        currentLimit = 8;
      }

      filteredProducts =
        products.slice();

      // CATEGORY

      if (
        activeFilters.category
      ) {

        filteredProducts =
          filteredProducts.filter(
            p =>
              p.category ===
              activeFilters.category
          );
      }

      // GENDER

      if (
        activeFilters.gender
      ) {

        filteredProducts =
          filteredProducts.filter(
            p =>
              p.gender ===
              activeFilters.gender
          );
      }

      renderLimitedFilteredProducts();
    }

    // =========================
    // RENDER FILTERED PRODUCTS
    // =========================

    function renderLimitedFilteredProducts() {

      productsContainer.innerHTML = '';

      const section =
        document.createElement(
          'section'
        );

      const title =
        document.createElement(
          'h2'
        );

      title.textContent =
        'Products';

      section.appendChild(title);

      const grid =
        document.createElement(
          'div'
        );

      grid.className =
        'product-grid';

      // SHOW LIMITED PRODUCTS

      const visibleProducts =
        filteredProducts.slice(
          0,
          currentLimit
        );

      renderProducts(
        grid,
        visibleProducts
      );

      section.appendChild(grid);

      // LOAD MORE BUTTON

      if (
        filteredProducts.length >
        currentLimit
      ) {

        const loadMoreWrapper =
          document.createElement('div');

        loadMoreWrapper.className =
          'load-more-wrapper';

        const loadMoreBtn =
          document.createElement('button');

        loadMoreBtn.className =
          'load-more-btn';

        loadMoreBtn.textContent =
          'Explore More';

        loadMoreBtn.addEventListener(
          'click',
          () => {

            currentLimit += 8;

            renderLimitedFilteredProducts();
          }
        );

        loadMoreWrapper.appendChild(
          loadMoreBtn
        );

        section.appendChild(
          loadMoreWrapper
        );
      }

      productsContainer.appendChild(
        section
      );
    }

    // =========================
    // INITIAL RENDER
    // =========================

    if (genderFromURL) {

      applyFilters(true);

    } else {

      renderCategoriesView(products);
    }

    // =========================
    // FILTER EVENTS
    // =========================

    categoryFilter.addEventListener(
      'change',
      (e) => {

        activeFilters.category =
          e.target.value;

        applyFilters(true);
      }
    );

    genderFilter.addEventListener(
      'change',
      (e) => {

        activeFilters.gender =
          e.target.value;

        applyFilters(true);
      }
    );

    clearFilters.addEventListener(
      'click',
      () => {

        activeFilters = {
          category: '',
          gender: ''
        };

        categoryFilter.value = '';
        genderFilter.value = '';

        renderCategoriesView(products);
      }
    );
  }

});

  // =========================
  // REDIRECT
  // =========================

  function redirectToProduct(id) {

    window.location.href =
      `redirect.html?id=${id}`;
  }
