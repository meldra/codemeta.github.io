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
		} else if (mode == 'light') {
			setIcon('dark');
		}
	}

	function switchMode(mode, bsTheme) {
		if (mode == true) {
			htmlEl.setAttribute('data-bs-theme', 'dark');
			if (bsTheme == true) {
				localStorage.setItem('bsTheme', 'dark');
			}
			toggleIcon('dark');
		} else {
			htmlEl.setAttribute('data-bs-theme', 'light');
			if (bsTheme == true) {
				localStorage.setItem('bsTheme', 'light');
			}
			toggleIcon('light');
		}
	}
    const currentTheme = localStorage.getItem('bsTheme') || null;
    
    // Set the theme by OS preferences
	if (window.matchMedia) {
		var osMode = window.matchMedia('(prefers-color-scheme: dark)')
		if (currentTheme == null) {
			switchEl.setAttribute('checked', osMode.matches);
			switchMode(osMode.matches, false);
		}
		osMode.addEventListener('change', e => {
			if (currentTheme == null) {
				switchEl.setAttribute('checked', osMode.matches);
				switchMode(osMode.matches, false);
			}
		})
		
	}
    // Set the default theme to light if no setting is found in local storage

    toggleIcon(currentTheme);

    switchEl.addEventListener('change', function () {
        if (this.checked) {
            switchMode(false, true);
            setIcon('dark');
        } else {
            switchMode(true, true);
            setIcon('light');
        }
    });
});
