const form = document.getElementById("email-input");
const errortxt = document.getElementById("err-txt");
const submitbtn = document.getElementById("submit-btn");
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let timer;

submitbtn.disabled = true;

form.addEventListener('keyup', (e) => {

    clearTimeout(timer);

    onChange(form);
    timer = setTimeout(() => {
        if(form.value.match(mailformat)){
            return;
        }else{
            errortxt.classList.add("show")
            form.classList.add("error");
        }
    }, 2000)
})

function onChange(form){
    if(form.value.match(mailformat)){
            submitbtn.disabled = false;
            submitbtn.classList.add("active");
            form.classList.remove("error");
            errortxt.classList.remove("show")
    }else{
        submitbtn.disabled = true;
        submitbtn.classList.remove("active");

    }
}