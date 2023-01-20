// To Make A Responsive Navigation Bar

let menu = document.querySelector('nav#top-nav-bar .bx-menu');
let navbar = document.querySelector('nav#top-nav-bar .menu-bar');

menu.onclick = () => 
{
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open-nav-bar');
}

// To Close The Navigation Bar After Click On Links Or Page

document.onclick = function(clickEvent)
{
	if(clickEvent.target.id !== '#menu-bar-side' && clickEvent.target.id !== 'menu-icon')
	{
		menu.classList.remove('bx-x');
		navbar.classList.remove('open-nav-bar')
	}
}