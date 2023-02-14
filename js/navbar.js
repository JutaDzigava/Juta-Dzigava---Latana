let navbar = ["home", "menu", "blog", "our story"];
let navlink = ["index.html", "menu.html"];
let navText = "<ul>";
for(let i=0; i<navbar.length;i++){
    navText+="<li><a href="+navlink[i]+">"+navbar[i]+"</a></li>";  
}
navText+="</ul>";
console.log(navText);
document.getElementById("navigation").innerHTML=navText;


let mainNavigation = document.getElementById("mainNavigation");
let navigation = document.getElementById("navigation");
let header = document.getElementById("header");
let bar = document.getElementById("fa-bars-icon");
mainNavigation.innerHTML=navText;

function changeBar() {
    if(mainNavigation.style.display=="none"){
        mainNavigation.style.display="flex";
    }else{
        mainNavigation.style.display="none";
    }
}
bar.addEventListener("click", changeBar)
