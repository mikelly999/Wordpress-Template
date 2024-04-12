// Function to handle intersection observer callback
function handleIntersection(entries, observer) {
	const isi = document.getElementById("isi");
	const stickyIsi = document.getElementById("stickyIsi");
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			stickyIsi.classList.add("hidden");
		} else {
			const rect = isi.getBoundingClientRect();
			if (rect.top >= 0) {
				stickyIsi.classList.remove("hidden");
			}
		}
	});
}

// Options for the Intersection Observer
const options = {
	root: null, // Use the viewport as the root
	threshold: 0, // Trigger when any part of the target is visible
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

window.addEventListener("DOMContentLoaded", function () {
	const stickyHeaderContainer = document.getElementById(
		"sticky-header-container"
	);
	const announcementBar = document.getElementById("news-banner");

	function handleAnnouncementBar() {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		const offset = announcementBar ? announcementBar.offsetHeight : 0;
		if (!scrollTop) {
			document.documentElement.style.setProperty(
				"--announcement-bar-offset",
				`${offset}px`
			);
		}
		if (scrollTop >= offset) {
			document.documentElement.style.setProperty(
				"--announcement-bar-offset",
				"0px"
			);
		} else {
			document.documentElement.style.setProperty(
				"--announcement-bar-offset",
				`${offset - scrollTop}px`
			);
		}
	}

	function handleViewportHeight() {
		document.documentElement.style.setProperty(
			"--viewport-height",
			`${window.innerHeight}px`
		);
	}
	handleViewportHeight();

	if (announcementBar) {
		handleAnnouncementBar();
		window.addEventListener("resize", function () {
			handleViewportHeight();
			handleAnnouncementBar();
		});
	}

	function setMenuPadding() {
		const stickyHeaderHeight = stickyHeaderContainer
			? stickyHeaderContainer.offsetHeight
			: 0;
		document.documentElement.style.setProperty(
			"--header-offset",
			`${stickyHeaderHeight}px`
		);
	}

	if (stickyHeaderContainer) {
		setMenuPadding();
	}

	const mobileMenuToggleOpen = document.getElementById("mobile-open-menu");
	const mobileMenuToggleClose = document.getElementById("mobile-close-menu");
	const mainNav = document.querySelector(
		"#main-nav .wp-block-navigation__responsive-container"
	);
	if (mobileMenuToggleOpen) {
		mobileMenuToggleOpen.addEventListener("click", function () {
			handleAnnouncementBar();
			setMenuPadding();
			mobileMenuToggleOpen.classList.add("hidden");
			mobileMenuToggleClose.classList.remove("hidden");
			mainNav.classList.add("is-menu-open");
			document.body.classList.add("mobile-menu-open");
		});
	}
	if (mobileMenuToggleClose) {
		mobileMenuToggleClose.addEventListener("click", function () {
			mobileMenuToggleClose.classList.add("hidden");
			mobileMenuToggleOpen.classList.remove("hidden");
			mainNav.classList.remove("is-menu-open");
			document.body.classList.remove("mobile-menu-open");
		});
	}
	const isi = document.getElementById("isi");
	const stickyIsi = document.getElementById("stickyIsi");
	if (!isi || !stickyIsi) {
		console.log("no isi found");
		return;
	}

	observer.observe(isi);

	const isiToggle = stickyIsi.querySelector("#toggle");
	if (!isiToggle) {
		return;
	}
	isiToggle.addEventListener("click", function () {
		if (stickyIsi.classList.contains("expanded")) {
			stickyIsi.classList.remove("expanded");
		} else {
			stickyIsi.classList.add("expanded");
		}
	});

	// EXIT MODAL
	var modal = document.getElementById("exitModal");

	if (!modal) {
		return;
	}

	// Get the link that closes the modal
	var stayBtn = modal.querySelector("#stay");

	// Get the link that leaves the site
	var leaveBtn = modal.querySelector("#leave");

	if (!stayBtn || !leaveBtn) {
		return;
	}

	// Function to show the modal
	function showModal() {
		modal.style.display = "flex";
	}

	// Function to hide the modal
	function hideModal() {
		modal.style.display = "none";
	}

	// Function to handle external link clicks
	function handleExternalLinkClick(event) {
		event.preventDefault(); // Prevent the default link behavior
		showModal(); // Show the modal
		// Store the target URL in a data attribute of the leave button
		leaveBtn.setAttribute("data-target", event.target.href);
	}

	// Attach event listener to all external links
	var externalLinks = document.querySelectorAll(
		'a[href^="http"]:not([href^="' + window.location.origin + '"])'
	);

	externalLinks.forEach(function (link) {
		link.addEventListener("click", handleExternalLinkClick);
	});

	// Close the modal when the user clicks on the "Stay" button
	stayBtn.addEventListener("click", hideModal);

	// Close the modal when the user clicks on the background
	window.onclick = function (event) {
		if (event.target == modal) {
			hideModal();
		}
	};

	// Event listener for the "Leave" button
	leaveBtn.addEventListener("click", function () {
		var targetUrl = leaveBtn.getAttribute("data-target");
		if (targetUrl) {
			window.location.href = targetUrl; // Redirect the user to the external link
		}
	});
});
