const currentPath = window.location.pathname;
const cleanedPath = currentPath.startsWith('/') ? currentPath.slice(1) : currentPath;

const navLinks = document.querySelectorAll('.navbar > a');
console.log(cleanedPath)

navLinks.forEach(link => {
	var links = `Portofolio/about/${link.getAttribute('href')}`


    if (links === cleanedPath) {
        link.classList.add('active');
    }
});
