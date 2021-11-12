const moreButtonAbout = document.getElementById("more-about-btn");
const moreTextAbout = document.getElementById("more-about-text");
const hideAboutBtn = document.getElementById("hide-about-container");

function viewMoreAbout(){
    moreTextAbout.style.display = "block"
    moreButtonAbout.style.display = "none";
    hideAboutBtn.style.display = "flex";

}
function hideMoreAbout(){
    moreTextAbout.style.display = "none";
    moreButtonAbout.style.display = "inline";
    hideAboutBtn.style.display = "none";
}

const moreClinicBtn = document.getElementById("more-clinic-btn");
const moreTextClinic = document.getElementById("more-clinic-text");
const hideClinicButton = document.getElementById("hide-clinic-container");

function viewMoreClinic(){
    moreTextClinic.style.display = "block"
    moreClinicBtn.style.display = "none";
    hideClinicButton.style.display = "flex";

}
function hideMoreClinic(){
    moreTextClinic.style.display = "none";
    moreClinicBtn.style.display = "inline";
    hideClinicButton.style.display = "none";
}