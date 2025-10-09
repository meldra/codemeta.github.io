/*!

 =========================================================
 * CodeMeta js customizations
 =========================================================

 */

// Navbar transparency at top of scroll

const headerEl = document.querySelector('#sectionsNav');

function manageNav() {
	if (window.scrollY > 50) {
		headerEl.classList.remove('navbar-transparent');
	} else if (window.scrollY < 50) {
		headerEl.classList.add('navbar-transparent');
	}
}

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  manageNav();
}

window.addEventListener('scroll', () => {
  manageNav();
});

// Darkmode toggler
document.addEventListener('DOMContentLoaded', (event) => {
    const htmlEl = document.documentElement;
    const switchEl = document.getElementById('darkModeSwitch');
    const darkEl = document.getElementById('dark-mode-bi');
    const lightEl = document.getElementById('light-mode-bi');

    // Set the default theme to light if no setting is found in local storage
    const currentTheme = localStorage.getItem('bsTheme') || 'light';
    htmlEl.setAttribute('data-bs-theme', currentTheme);
    switchEl.checked = currentTheme === 'light';

    switchEl.addEventListener('change', function () {
        if (this.checked) {
            htmlEl.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('bsTheme', 'light');
            if (darkEl.classList.contains('d-none')) {
				lightEl.classList.add('d-none');
				darkEl.classList.remove('d-none');
			}
        } else {
            htmlEl.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('bsTheme', 'dark');
            if (lightEl.classList.contains('d-none')) {
				darkEl.classList.add('d-none');
				lightEl.classList.remove('d-none');
			}
        }
    });
});
