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
    
    function setIcon(mode) {
		if (mode == 'dark' && darkEl.classList.contains('d-none')) {
			lightEl.classList.add('d-none');
			darkEl.classList.remove('d-none');
		} else if (mode == 'light' && lightEl.classList.contains('d-none')) {
			darkEl.classList.add('d-none');
			lightEl.classList.remove('d-none');
		}
	}
	
	function toggleIcon(mode) {
		if (mode == 'dark') {
			setIcon('light');
		} else {
			setIcon('dark');
		}
	}

	function switchMode(mode, bsTheme) {
		if ((mode == true || mode == "dark") && htmlEl.getAttribute('data-bs-theme') != 'dark') {
			htmlEl.setAttribute('data-bs-theme', 'dark');
			toggleIcon('dark');
			if (bsTheme == true) {
				localStorage.setItem('bsTheme', 'dark');
			}
		} else {
			htmlEl.setAttribute('data-bs-theme', 'light');
			toggleIcon('light');
			if (bsTheme == true) {
				localStorage.setItem('bsTheme', 'light');
			}
		}
	}
    const currentTheme = localStorage.getItem('bsTheme');
    
    // Set the theme by OS preferences
  	if (currentTheme == null) {
		if (window.matchMedia) {
			 osMode = window.matchMedia('(prefers-color-scheme: dark)')
				switchEl.setAttribute('checked', osMode.matches);
				switchMode(osMode.matches, false);
			osMode.addEventListener('change', e => {
				switchEl.setAttribute('checked', osMode.matches);
				switchMode(osMode.matches, false);
			})
		}
	// Graceful override
	} else {
		switchMode(currentTheme, false)
	}
	
    // Set the default theme to light if no setting is found in local storage
    switchEl.addEventListener('change', function () {
		switchMode(this.checked, true);
    });
});
