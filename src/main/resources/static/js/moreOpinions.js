const showButton = document.getElementById("more-opinions-btn");
const hideButton = document.getElementById("hide-opinions-btn");
const moreOpinions = document.getElementById("more-opinions");

function showMore(){
    showButton.style.display = "none";
    moreOpinions.style.display = "flex";
    hideButton.style.display = "flex";
}
function hideOpinions(){
    showButton.style.display = "block";
    moreOpinions.style.display = "none";
    hideButton.style.display = "none";
}