curTab = window.location.href
home = document.querySelector(".to-home")
projects = document.querySelector(".to-projects")
contact = document.querySelector(".to-contact")
discord = document.getElementById("discord")
hp = document.getElementById("hp")
git = document.getElementById("git")
codepen = document.getElementById("codepen")

if (curTab.includes("home")){
    home.classList.add("focus");
}else if(curTab.includes("projects")){
    projects.classList.add("focus");
}else if(curTab.includes("contact")){
    contact.classList.add("focus")
}

home.onclick = function(){
    window.location.href = "../html/home.html"
}
projects.onclick = function(){
    window.location.href = "../html/projects.html"
}
contact.onclick = function(){
    window.location.href = "../html/contact.html"
}

discord.onclick = function(){
    navigator.clipboard.writeText("newor0910");
    discord.innerText = "Username copied!";
    setTimeout(() => {discord.innerText = "Discord: newor0910"}, 1000);
}

hp.onclick = function(){
    navigator.clipboard.writeText("01156718436");
    hp.innerText = "Phone number copied!";
    setTimeout(() => {hp.innerText = "Phone number: 01156718436"}, 1000);
}

git.onclick = function(){
    window.open("https://github.com/newor0599")
}

codepen.onclick = function(){
    window.open("https://codepen.io/rowen-wong")
}