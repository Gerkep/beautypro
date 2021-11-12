const showButton = document.getElementById("more-btn");
const hideButton = document.getElementById("hide-btn");
const container = document.getElementById("opinions");

function showMore(){
    showButton.style.display = "none";
    container.classList.toggle('show')
}
function hideOpinions(){
    showButton.style.display = "block";
    container.classList.remove('show');
}