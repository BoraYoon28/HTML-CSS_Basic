
//resize
const menuRW = document.querySelector(".menu-mobile");
const storyContent = document.querySelector(".box-story");

window.onresize = function singularResize() {
	const windowWidth = window.innerWidth;

	if(windowWidth >= 1024){
		menuRW.className = "menu-pc";
		storyContent.className += " grid"		
	} else {
		menuRW.className = "menu-mobile";
		storyContent.className = "";
	}
}

//mobilemenu button
const menuButton = document.querySelector(".button-menu");
const menuDisplay = document.querySelector(".menu-display");

menuButton.addEventListener("click", function () {
	if (menuDisplay.style.display === "none") {
		menuDisplay.style.display = "block";
	} else {
		menuDisplay.style.display = "none";
	}
});

//toggle accordion
const toggleButton = document.querySelectorAll(".toggle-button");
const toggleDescription = document.querySelectorAll(".toggle-detail")
const toggleIcon = document.querySelectorAll(".expand-more")

console.log(toggleIcon[1]);

for (let i = 0; i < toggleButton.length; i++) {
	toggleButton[i].addEventListener ("click", function () {
		toggleDescription[i].classList.toggle("toggle-display");
		toggleIcon[i].classList.toggle("expanded")
	})
}
