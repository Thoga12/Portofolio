
const currentPath = window.location.pathname;
// console.log(currentPath)


const navLinks = document.querySelectorAll('.navbar > a');
// console.log(navLinks)

navLinks.forEach(link => {
	// console.log(link.getAttribute('href'))

    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
		// console.log("berhasil Masuk")
    }
});
