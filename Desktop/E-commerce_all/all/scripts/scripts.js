/*Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() 
{
    document.getElementById("mySideBar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "200px";
}

/*Set the width of the sidebar to 0 and the left margin of the page content to 0*/
function closeNav() 
{
    document.getElementById("mySideBar").style.width = "0";
    ocument.getElementById("main").style.marginLeft = "0";
}

//function for the login button functionality
function loginBtn()
{
    document.getElementById("loginbtn").onclick = function(){
        location.href="loginPage.html"
    }
}

// Connecting google search to the products page
// const f = document.getElementById('searchform');
// const q = document.getElementById('q');
// const google = 'https://www.google.com/search?q=site%3A+';
// const site = '/products.html'

// function submitted(event){
//     event.preventDefault();
//     const url = google + site + '+' + q.value;
//     const win = window.open(url, '_blank');
//     win.focus();
// }

// f.addEventListener('submit', submitted);


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

