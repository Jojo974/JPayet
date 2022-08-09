$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // Afficher la nav
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });
});

// Typing animation

var typed = new Typed(".typing", {
    strings: ["Développeur", "Web-Designer", "Étudiant"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// Slide-up script 
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
});


// Owl carousel script 
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
})

// PopUp

var btnPopup = document.getElementById('btn-popup-projets');
var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btnClose');

btnPopup.addEventListener('click',openModal);

btnClose.addEventListener('click',closePopup);

function openModal(){
    overlay.style.display = 'block';
}

function closePopup(){
    overlay.style.display = 'none';
}


ScrollReveal().reveal('.text-1', { delay: 4000 });
ScrollReveal().reveal('.text-2', { delay: 5000 });
ScrollReveal().reveal('.text-3', { delay: 6000 });


ScrollReveal().reveal('.a-propos');
ScrollReveal().reveal('.a-propos-content');
ScrollReveal().reveal('.column .right');


ScrollReveal().reveal('.card1');
ScrollReveal().reveal('.card2', { delay: 1000 });
ScrollReveal().reveal('.card3', { delay: 2000 });
ScrollReveal().reveal('.card4', { delay: 3000 });


// Page d'accueil


window.addEventListener('load', loader);

function loader(){

    const TLLOAD = gsap.timeline();

    TLLOAD
    .to('.images-container', {height: 400, duration: 1.3, delay: 0.4, ease: 'power2.out'})
    .to('.bloc-txt', {height: 'auto', duration: 0.6, ease: 'power2.out'}, '-=0.8')
    .to('.bloc-txt h2', {y: 0, ease: 'power2.out'}, '-=0.6')

    .to('.f2', {y: 0, duration: 0.6, ease: 'power2.out'})
    .add(() => {
        document.querySelector('.flip-img1').style.backgroundImage = "url('img/Bienvenue\ \(2\).png')";
    })
    .to('.f2', {y: '-100%'})

    .to('.load-container', {opacity: 0, duration: 0.8, delay: 0.7})
    .add(() => {
        document.querySelector('.load-container').style.display = "none";
    })

    // .to('.navbar')
    // .add(() => {
    //     document.querySelector('.navbar').style.opacity = "1";
    // })
    // .add(() => {
    //     document.querySelector('.nav').play()
    // }, '-=0.8')

}



// Contact Form


// window.addEventListener("DOMContentLoaded", function () {
//   // get the form elements defined in your form HTML above

//   var form = document.getElementById("my-form");
//   // var button = document.getElementById("my-form-button");
//   var status = document.getElementById("status");

//   // Success and Error functions for after the form is submitted

//   function success() {
//     form.reset();
//     status.classList.add("success");
//     status.innerHTML = "Votre message a bien été envoyé !";
//   }

//   function error() {
//     status.classList.add("error");
//     status.innerHTML = "Oops! Un problème est survenu.";
//   }

//   // handle the form submission event

//   form.addEventListener("submit", function (ev) {
//     ev.preventDefault();
//     var data = new FormData(form);
//     ajax(form.method, form.action, data, success, error);
//   });
// });

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
};


var someTrigger = $('#trigger'); //a trigger button
var contentContainer = $('#content'); //element I want to temporarily remove scroll from

contentContainer.addClass('notfixed'); //make sure that the element has the "notfixed" class

//Something to trigger the fixed positioning. In this case we chose a button.
someTrigger.on('click', function(){

    if(contentContainer.hasClass('notfixed')){
        contentContainer.removeClass('notfixed').addClass('fixed');

    }else if(contentContainer.hasClass('fixed')){
        contentContainer.removeClass('fixed').addClass('notfixed');
    };
});