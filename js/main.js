const btn = document.querySelector('#btn-color');
const rootStyle = document.documentElement.style;
let blacktheme = false;

btn.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(blacktheme);
	if (!blacktheme) {
		rootStyle.setProperty('--main-color', '#000');
		rootStyle.setProperty('--second-color', '#fff');
		rootStyle.setProperty('--input-color', '#181818');
		rootStyle.setProperty('--arrow', "url('../icon/arrow-down-white.svg')");
		rootStyle.setProperty('--shadow', 'rgba(255, 255, 255, 0.75)');
		blacktheme = true;
	} else {
		rootStyle.setProperty('--main-color', '#fff');
		rootStyle.setProperty('--second-color', '#000');
		rootStyle.setProperty('--input-color', '#e7e7e7');
		rootStyle.setProperty('--arrow', "url('../icon/arrow-down.svg')");
		rootStyle.setProperty('--shadow', 'rgba(0, 0, 0, 0.75)');
		blacktheme = false;
	}
});
