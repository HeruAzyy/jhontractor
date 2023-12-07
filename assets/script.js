const btnNavMenu = document.getElementById('btnNavMenu');
const navMenu = document.getElementById('navMenu');

btnNavMenu.addEventListener('click', function (e) {
	navMenu.classList.toggle('active');
	e.preventDefault();
});

document.addEventListener('click', (e) => {
	if (!btnNavMenu.contains(e.target) && !navMenu.contains(e.target)) {
		navMenu.classList.remove('active');
	}
});
