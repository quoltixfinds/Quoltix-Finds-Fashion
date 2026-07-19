/**
 * FOOTER (persistent)
 * -------------------
 * Rendered once into #app-footer. Category links are generated from
 * DataStore so the footer stays in sync automatically.
 */
window.Footer = (function () {
  function render() {
    const categories = DataStore.getCategories();
    const site = window.APP_DATA.site || {};
    const year = new Date().getFullYear();

    const links = categories
      .map((c) => `<li><a href="#/category/${Utils.escapeHTML(c.slug)}">${Utils.escapeHTML(c.name)}</a></li>`)
      .join('');

    const socialLinks = (site.social || [])
      .map(
        (s) =>
          `<li><a href="${Utils.escapeHTML(s.url)}" target="_blank" rel="noopener">${Utils.escapeHTML(s.label)}</a></li>`
      )
      .join('');

    const html = `
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <p>${Utils.escapeHTML(site.shortDescription || '')}</p>
          </div>

          <div class="footer-col">
            <h4>Categories</h4>
            <ul>${links || '<li>Coming soon</li>'}</ul>
          </div>

          <div class="footer-col">
            <h4>Follow Us</h4>
            <ul>${socialLinks || '<li>Coming soon</li>'}</ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© ${year} ${Utils.escapeHTML(site.name || 'Quoltix Finds')}. All product links are affiliate links; we may earn a commission.</p>
          <p class="footer-disclaimer">Not an online store — a discovery layer for shoppers.</p>
        </div>
      </div>
    `;

    return Utils.fromHTML(`<footer class="site-footer" role="contentinfo">${html}</footer>`);
  }

  return { render };
})();
