
	document.addEventListener('DOMContentLoaded', () => {
	const wrapper = document.querySelector('.wrapper');
	const loginLinks = document.querySelectorAll('.login-link');
	const registerLinks = document.querySelectorAll('.register-link');
	const btnPopup = document.querySelectorAll('.btnLogin-popup');
	const iconClose = document.querySelectorAll('.icon-close');


	registerLinks.forEach(link => {
		link.addEventListener('click', () => {
			wrapper.classList.add('active');
		});
	});

	loginLinks.forEach(link => {
		link.addEventListener('click', () => {
			wrapper.classList.remove('active');
		});
	});
	
	btnPopup.forEach(link => {
		link.addEventListener('click', () => {
			wrapper.classList.add('active-popup');
		});
	});

	iconClose.forEach(link => {
		link.addEventListener('click', () => {
			wrapper.classList.remove('active-popup');
		});
	});
	
});
