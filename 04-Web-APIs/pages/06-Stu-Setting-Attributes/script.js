var sitesEl = document.querySelector(".sites");
var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

//Store all h4 elements in a variable
var siteTitles = document.querySelectorAll("h4");

site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://www.wallpaperflare.com/2015-yamaha-yzf-r1-wallpaper-sjfke");
site1El.children[1].children[0].setAttribute("src", "https://c4.wallpaperflare.com/wallpaper/964/641/199/2015-yamaha-yzf-r1-wallpaper-preview.jpg");
site1El.children[1].children[0].setAttribute("alt", "yamaha R1 2015");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://www.wallpaperflare.com/gray-yamaha-r1-sports-bike-yamaha-yzf-r125-motorcycle-brembo-wallpaper-qwke");
site2El.children[1].children[0].setAttribute("src", "https://c4.wallpaperflare.com/wallpaper/832/213/130/yamaha-yzf-r125-yamaha-motorcycle-brembo-wallpaper-preview.jpg");
site2El.children[1].children[0].setAttribute("alt", "yamaha R1 2012");
site2El.children[1].children[0].setAttribute("style", "padding:10px,");
site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://www.wallpaperflare.com/60th-anniversary-edition-yamaha-yzf-r1-wallpaper-srmoj");
site3El.children[1].children[0].setAttribute("src", "https://c4.wallpaperflare.com/wallpaper/219/647/631/60th-anniversary-edition-yamaha-wallpaper-preview.jpg");
site3El.children[1].children[0].setAttribute("alt", "yamaha R1 2016");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// loop through all h4 elements to add styling
for (let index = 0; index < siteTitles.length; index++) {
    siteTitles[index].setAttribute("style", "color:blue; font-weight: bolder; font-size: 30px; padding-left:10px; margin:0");
    
}