



document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile nav drawer ---- */
  const drawer = document.querySelector('[data-drawer]');
  const openBtn = document.querySelector('[data-menu-open]');
  const closeBtn = document.querySelector('[data-menu-close]');

  if (drawer && openBtn) {
    const openDrawer = () => {
      drawer.classList.add('is-open');
      openBtn.setAttribute('aria-expanded', 'true');
    };
    const closeDrawer = () => {
      drawer.classList.remove('is-open');
      openBtn.setAttribute('aria-expanded', 'false');
    };

    openBtn.addEventListener('click', openDrawer);
    closeBtn?.addEventListener('click', closeDrawer);
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) closeDrawer();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  /* ---- Services filter (services.html) ---- */
  const filterRow = document.querySelector('[data-filter-row]');
  const serviceGrid = document.querySelector('[data-service-grid]');
  const emptyState = document.getElementById('empty-state');

  if (filterRow && serviceGrid) {
    const cards = serviceGrid.querySelectorAll('.service-card');

    filterRow.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-filter]');
      if (!btn) return;

      filterRow.querySelectorAll('.chip').forEach((chip) => chip.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      let visibleCount = 0;

      cards.forEach((card) => {
        const match = filter === 'all' || card.getAttribute('data-category') === filter;
        card.style.display = match ? '' : 'none';
        if (match) visibleCount += 1;
      });

      if (emptyState) {
        emptyState.classList.toggle('is-visible', visibleCount === 0);
      }
    });
  }

  /* ---- Basic client-side form validation ---- */
  const forms = document.querySelectorAll('form[novalidate]');

  forms.forEach((form) => {
    const success = form.querySelector('.form-success');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      form.querySelectorAll('[data-field]').forEach((field) => {
        const input = field.querySelector('input, select, textarea');
        if (!input) return;

        const filled = input.value.trim() !== '';
        let fieldValid = filled;

        if (filled && input.type === 'email') {
          fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
        }
        if (filled && input.type === 'tel') {
          fieldValid = /^[0-9+\s()-]{7,}$/.test(input.value.trim());
        }

        field.classList.toggle('is-invalid', !fieldValid);
        if (!fieldValid) isValid = false;
      });

      if (isValid) {
        success?.classList.add('is-visible');
        form.reset();
        form.querySelectorAll('.is-invalid').forEach((f) => f.classList.remove('is-invalid'));
      } else {
        success?.classList.remove('is-visible');
      }
    });
  });

});


