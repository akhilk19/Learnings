(function () {
  const navItems = [
    { href: './index.html', label: 'Home' },
    { href: './sql-handbook.html', label: 'SQL & DBMS' },
    { href: './java-design-patterns.html', label: 'Java Design Patterns' },
    { href: './leetcode-patterns.html', label: 'LeetCode Patterns' }
  ];

  const currentPath = new URL(window.location.href).pathname.replace(/\/+$/, '') || '/';

  const navMarkup = navItems
    .map(item => {
      const itemPath = new URL(item.href, window.location.href).pathname.replace(/\/+$/, '') || '/';
      const isActive = itemPath === currentPath ? 'class="active"' : '';
      return `<a href="${item.href}" ${isActive}>${item.label}</a>`;
    })
    .join('');

  const markup = `
    <style>
      .shared-site-header {
        position: sticky;
        top: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 14px 20px;
        background: #0f172a;
        color: #f8fafc;
        border-bottom: 1px solid rgba(148, 163, 184, 0.2);
        box-shadow: 0 10px 30px rgba(15, 23, 42, 0.14);
      }

      .shared-site-brand {
        font-size: 1.05rem;
        font-weight: 800;
        letter-spacing: 0.02em;
        white-space: nowrap;
      }

      .shared-site-nav {
        margin-left: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
      }

      .shared-site-nav a {
        color: #cbd5e1;
        text-decoration: none;
        font-size: 0.92rem;
        padding: 8px 12px;
        border-radius: 999px;
        transition: all 0.2s ease;
      }

      .shared-site-nav a:hover,
      .shared-site-nav a.active {
        color: #f8fafc;
        background: rgba(96, 165, 250, 0.18);
      }

      @media (max-width: 640px) {
        .shared-site-header {
          flex-direction: column;
          align-items: flex-start;
          padding: 12px 14px;
        }

        .shared-site-nav {
          width: 100%;
          margin-left: 0;
        }

        .shared-site-nav a {
          font-size: 0.8rem;
          padding: 6px 10px;
        }
      }
    </style>
    <header class="shared-site-header" role="navigation" aria-label="Main navigation">
      <div class="shared-site-brand">Developer Handbooks Hub</div>
      <nav class="shared-site-nav">${navMarkup}</nav>
    </header>
  `;

  const mountPoint = document.getElementById('shared-header');
  if (mountPoint) {
    mountPoint.innerHTML = markup;
  }
})();
