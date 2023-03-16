const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.project').length;
let items = 3;

showMore.addEventListener('click', () => {
	items += 3;
	const array = Array.from(document.querySelector('.projects').children);
	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.add('is-visible'));

	if (visItems.length === productsLength) {
		showMore.style.display = 'none';
	}
});

// nav opacity scroll

window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if(scrolled !== 0){
	document.querySelector('.nav').style.opacity = '0.9';
	}else{
	document.querySelector('.nav').style.opacity = '1';
	};
};


$(document).ready(function(){
	$('.nav-list li a').click(function () { // scroll name
		elementClick = $(this).attr('href');
		destination = $(elementClick).offset().top;
		
		$('body,html').animate({scrollTop: destination });
	});
});