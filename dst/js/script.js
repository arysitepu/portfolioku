// navbar-fixed dan memanggil scrolll

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active'); 
    navMenu.classList.toggle('hidden');
});

$(document).ready(function() {
    AOS.init({
        duration: 750,
    });
  });

  let myVar;

  function myFunction() {
    myVar = setTimeout(showPage, 1000);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }