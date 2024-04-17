
//resize
const menuRW = document.querySelector(".menu-pc");
const menuList = document.querySelector(".menu-list");
const tabMenu = document.querySelector(".content-story > div")
const storyContent = document.querySelector(".box-story")
const presentContents = document.querySelectorAll(".present")

window.onresize = function singularResize() {
	const windowWidth = window.innerWidth;

	if(windowWidth >= 1024){
		menuRW.className = "menu-pc";
		menuList.className += " flex";
		tabMenu.className += " flex";
		storyContent.className += " grid"
		for (let i = 0; i < presentContents.length; i++) {
			presentContents[i].className += " flex";
		}
		
	} else {
		menuRW.className = "menu-mobile";
		menuList. className = "menu-list";
		tabMenu.className = "";
		storyContent.className = "";
		for (let i = 0; i < presentContents.length; i++) {
			presentContents[i].classList.remove("flex");			
		}
	}
}

//mobilemenu button
