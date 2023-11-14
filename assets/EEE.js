// dark mood

let toggle = document.getElementById("toggleDark");
let body = document.querySelector("body");
let nav1 = document.getElementById("navbar1");
toggle.addEventListener('click',function(){
    this.classList.toggle("bi-moon");
    if(this.classList.toggle("bi-brightness-high")){
        body.style.background = "white";
        body.style.color = "black";
      
        body.style.transition = "1s";
    }else{
        body.style.background ="#043004";
        body.style.color = "white";
     
        body.style.transition = "2s";
    }
})
// dark mood end

// map

function initMap(){
    var options = {
        zoom:20,
        center:{lat:9.657770,lng:80.159210}
    }
    var map = new google.maps.Map(document.getElementById('map'), options);

}
// map end



// carousel start

const container = document.querySelector('.container5');
const btns = document.querySelectorAll('.btn')
const imgList = ["1","2","3","4"]


let index=0
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
       if(button.classList.contains('btn-left')){
index--;
if(index<0){
    index = imgList.length-1;
}
container.style.background = `url("./img/${imgList[index]}.jpeg") center/cover fixed no-repeat
`


       }
else{
    index++;
    if(index===imgList.length){
        index = 0;
    }
    container.style.background = `url("./img/${imgList[index]}.jpeg") center/cover fixed no-repeat
    `
}


    })
})

// end


// form
function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var message = document.getElementById("message").value;

    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var emailError = document.getElementById("emailError");
    var contactNumberError = document.getElementById("contactNumberError");
    var messageError = document.getElementById("messageError");

    var isValid = true;

    // Simple validation for demonstration purposes
    if(firstName.trim() ===""){
        firstNameError.textContent = "firstName cannot be empty";
        isValid = false;

    }
    else if (!/^[a-zA-Z]+$/.test(firstName)) {
        firstNameError.textContent = "Invalid first name";
        isValid = false;
    }
    else if (firstName.length > 15) {
        firstNameError.textContent = "First name must be less than 15 characters";
        isValid = false;

    }
    else {
        firstNameError.textContent = "";
    }

    if(lastName.trim() ===""){
        lastNameError.textContent = "lastName cannot be empty";
        isValid = false;

    }else if (!/^[a-zA-Z]+$/.test(lastName)) {
        lastNameError.textContent = "Invalid last name";
        isValid = false;
    }  else if (firstName.length > 15) {
        lastNameError.textContent = "First name must be less than 15 characters";
        isValid = false;

    }
    else {
        lastNameError.textContent = "";
    }

    const emailRegex =    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if(email.trim() ===""){
        emailError.textContent = "email cannot be empty";
        isValid = false;
    }else  if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email address";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    var phoneRegex = /^\d{10}$/;
    if(contactNumber.trim() ===""){
        contactNumberError.textContent = "contact Number cannot be empty";
        isValid = false;
    } else  if (!phoneRegex.test(contactNumber)) {
        contactNumberError.textContent = "Invalid contact number";
        isValid = false;
    } else {
        contactNumberError.textContent = "";
    }

    if (message.trim() === "") {
        messageError.textContent = "Message cannot be empty";
        isValid = false;
    }else if (message.length < 2 || message.length > 120) {
        messageError.textContent = "Message must be between 2 and 120 characters";
        isValid = false;
    } else {
        messageError.textContent = "";
    }

    return isValid;
}


// Q and A

function toggleAnswer(answerId) {
    const answerBox = document.getElementById('answerBox');
    const answer = document.getElementById(answerId);
    const allAnswers = document.querySelectorAll('.answer');
    // Hide all answers
    allAnswers.forEach((item) => {
        item.style.display = 'none';
    });
    // Show the selected answer in the common box
    answerBox.style.display = 'block';
    answer.style.display = 'block';
  }


