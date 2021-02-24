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
