document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('button[aria-controls="mobile-nav"]');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuBtn && mobileNav) {
    const toggleMenu = () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('hidden');
      mobileNav.classList.toggle('flex');
    };

    menuBtn.addEventListener('click', toggleMenu);

    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (menuBtn.getAttribute('aria-expanded') === 'true') {
          toggleMenu();
        }
      });
    });
  }
});
