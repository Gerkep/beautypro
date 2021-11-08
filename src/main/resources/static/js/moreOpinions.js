const button = document.getElementById("more-btn");
const container = document.getElementById("opinions");

function showMore(){
    button.style.display = "none";
    container.style.overflowY = "scroll";
}