// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Dark mode toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Load theme from localStorage
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙';
  } else {
    // Default = dark mode
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Hamburger menu toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburgerBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburgerBtn.textContent = '☰';
      }
    });

    // Close menu when clicking a link
    navMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navMenu.classList.remove('active');
        hamburgerBtn.textContent = '☰';
      }
    });
  }

  // Function to create product card
  function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="sku">SKU: ${product.sku}</div>
      <button onclick="redirectToProduct(${product.id})">View</button>
    `;
    return card;
  }

  // Function to render products
  function renderProducts(container, productsList) {
    container.innerHTML = '';
    if (productsList.length === 0) {
      container.innerHTML = '<p class="no-products">No products found</p>';
      return;
    }
    productsList.forEach(product => {
      container.appendChild(createProductCard(product));
    });
  }

  // Debounce function
  function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // Search functionality - works on all pages
  const searchInput = document.getElementById('search-input');
  let currentProducts = products;

  if (searchInput) {
    const debouncedSearch = debounce(() => {
      const query = searchInput.value.toLowerCase().trim();
      if (query) {
        const filtered = products.filter(p =>
          p.name.toLowerCase().includes(query) || p.sku.toLowerCase().includes(query)
        );

        // Handle different page types
        if (document.getElementById('search-results')) {
          // Index.html - show search results section
          document.getElementById('trending').style.display = 'none';
          document.getElementById('couple').style.display = 'none';
          document.getElementById('search-results').style.display = 'block';
          const searchGrid = document.querySelector('#search-results .product-grid') || document.getElementById('search-results').appendChild(document.createElement('div'));
          searchGrid.className = 'product-grid';
          renderProducts(searchGrid, filtered);
        } else if (document.getElementById('products-container')) {
          // Product.html - update the products container
          const container = document.getElementById('products-container');
          container.className = 'product-grid';
          renderProducts(container, filtered);
        } else if (document.getElementById('category-products')) {
          // Category.html - update the category products section
          const categoryGrid = document.querySelector('#category-products .product-grid') || document.getElementById('category-products').appendChild(document.createElement('div'));
          categoryGrid.className = 'product-grid';
          renderProducts(categoryGrid, filtered);
        }
      } else {
        // Reset to original state
        if (document.getElementById('search-results')) {
          // Index.html - show original sections
          document.getElementById('trending').style.display = 'block';
          document.getElementById('couple').style.display = 'block';
          document.getElementById('search-results').style.display = 'none';
        } else if (document.getElementById('products-container')) {
          // Product.html - show all products
          const container = document.getElementById('products-container');
          container.className = 'product-grid';
          renderProducts(container, products);
        } else if (document.getElementById('category-products')) {
          // Category.html - show original category view
          renderCategoriesView(products);
        }
      }
    }, 300);
    searchInput.addEventListener('input', debouncedSearch);
  }

  // Render sections on index.html
  if (document.getElementById('trending')) {
    const trendingGrid = document.querySelector('#trending .product-grid') || document.getElementById('trending').appendChild(document.createElement('div'));
    trendingGrid.className = 'product-grid';
    const trendingProducts = products.filter(p => p.tag === 'trending');
    renderProducts(trendingGrid, trendingProducts);
  }
  if (document.getElementById('couple')) {
    const coupleGrid = document.querySelector('#couple .product-grid') || document.getElementById('couple').appendChild(document.createElement('div'));
    coupleGrid.className = 'product-grid';
    const coupleProducts = products.filter(p => p.tag === 'couple');
    renderProducts(coupleGrid, coupleProducts);
  }

  // For product.html
  if (document.getElementById('products-container')) {
    const categoryFilter = document.getElementById('category-filter');
    const genderFilter = document.getElementById('gender-filter');
    const clearFilters = document.getElementById('clear-filters');
    const productsContainer = document.getElementById('products-container');

    let activeFilters = {
      category: '',
      gender: ''
    };

    function renderCategoriesView(productsList) {
      productsContainer.innerHTML = '';
      const categories = ['Dress', 'Couple Wear', 'pants', 'kurtas'];

      categories.forEach(cat => {
        const catProducts = productsList.filter(p => p.category === cat);
        if (catProducts.length === 0) return;

        const section = document.createElement('section');
        const title = document.createElement('h2');
        title.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'product-grid';
        renderProducts(grid, catProducts);
        section.appendChild(grid);

        productsContainer.appendChild(section);
      });
    }

    function applyFilters() {
      // Start with all products and apply filters in sequence
      let filtered = products.slice();

      // Apply category filter
      if (activeFilters.category) {
        filtered = filtered.filter(p => p.category === activeFilters.category);
      }

      // Apply gender filter
      if (activeFilters.gender) {
        filtered = filtered.filter(p => p.gender === activeFilters.gender);
      }

      // Display filtered results if any filter is applied
      if (activeFilters.category || activeFilters.gender) {
        productsContainer.innerHTML = '';
        const section = document.createElement('section');
        section.id = 'filtered-results';
        const title = document.createElement('h2');
        title.textContent = 'Filtered Results';
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'product-grid';
        renderProducts(grid, filtered);
        section.appendChild(grid);

        productsContainer.appendChild(section);
      } else {
        // Show all categories when no filters are applied
        renderCategoriesView(products);
      }
    }

    // Default view: all categories
    renderCategoriesView(products);

    categoryFilter.addEventListener('change', (e) => {
      activeFilters.category = e.target.value;
      if (searchInput) searchInput.value = '';
      applyFilters();
    });

    genderFilter.addEventListener('change', (e) => {
      activeFilters.gender = e.target.value;
      if (searchInput) searchInput.value = '';
      applyFilters();
    });

    clearFilters.addEventListener('click', () => {
      categoryFilter.value = '';
      genderFilter.value = '';
      if (searchInput) searchInput.value = '';
      activeFilters = { category: '', gender: '' };
      renderCategoriesView(products);
    });
  }
});

// Function for redirect
function redirectToProduct(id) {
  window.location.href = `redirect.html?id=${id}`;
}
