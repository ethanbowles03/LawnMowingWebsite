// Author: Ethan Bowles
// Date: March 1, 2023
// Version: 1.1

//Variables
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.getElementsByClassName('page');

//Add event listener to each link in the nav bar
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function (event) {
        event.preventDefault(); // prevent default link behavior

        // hide all sections
        for (let j = 0; j < sections.length; j++) {
            sections[j].classList.remove("active");
        }

        const href = this.getAttribute("href");
        const section = document.querySelector(href);
        section.classList.add("active"); // show corresponding section
    });
}

// Click home
const logohome = document.getElementById("logo");
logohome.addEventListener("click", function (event) {
    event.preventDefault(); // prevent default link behavior
    // hide all sections
    for (let j = 0; j < sections.length; j++) {
        sections[j].classList.remove("active");
    }
    
    const section = document.querySelector("#home"); 
    section.classList.add("active"); // show corresponding section
});

//Set Starting Screen
const section = document.querySelector("#home");
section.classList.add("active"); // show corresponding section


//Images in the welcome menu
const carousel = document.querySelector('.image-carousel');
const images = carousel.querySelectorAll('img');
let currentImg = 0;

//Rotates images every 5 seconds
setInterval(() => {
    images[currentImg].classList.remove('active');
    currentImg = (currentImg + 1) % images.length;
    images[currentImg].classList.add('active');
}, 5000);

function sendEmail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        service: document.getElementById("service").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_pscwnxf";
    const templateID = "template_xme9zye";

    emailjs.send(serviceID, templateID, params).then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value  = "";
            document.getElementById("phone").value  = "";
            document.getElementById("address").value  = "";
            document.getElementById("service").value  = "";
            document.getElementById("message").value  = "";
        }
    ).catch(err=>console.log(err));
}