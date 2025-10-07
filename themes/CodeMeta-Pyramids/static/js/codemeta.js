/*!

 =========================================================
 * CodeMeta js customizations
 =========================================================

 */

const headerEl = document.querySelector('#sectionsNav');

window.addEventListener('scroll', () => {
	if (window.scrollY > 50) {
		headerEl.classList.remove('navbar-transparent');
	} else if (window.scrollY < 50) {
		headerEl.classList.add('navbar-transparent');
	}
	
});
