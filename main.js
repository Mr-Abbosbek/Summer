window.addEventListener("scroll",function(){
  let navbar = document.getElementById("navbar-sticky");
  if (window.scrollY > 1) {
    navbar.style.background = "white";
    navbar.style.boxShadow = "0px 0px 5px black";
  } else {
    navbar.style.background = "none";
    navbar.style.boxShadow = "none";
  }
});

// ==========================================================================================================================================

k = 0;
function humburger(){
  let show_class = document.getElementById("show-class");
  if (k == 0) {
    show_class.classList.add("show");
    k=1;
  } else{
    show_class.classList.remove("show");
    k=0;
  }
}

// =========================================================================================================================================

let card_hide = document.getElementById("card-hide");
card_hide.style.display = "none";
n=0;
let changeButton = document.getElementById("changeButton");
changeButton.value = "SHOW MORE";

let shadow_right= document.getElementById("shadow-right");
shadow_right.style.display = "none";
function ShowCards() {
  if (n == 0) {
    card_hide.style.display = "block";
    changeButton.value = "HIDE CARDS";
    shadow_right.style.display = "block";
    n = 1;
  } else {
    card_hide.style.display = "none";
    changeButton.value = "SHOW MORE";
    shadow_right.style.display = "none";
    n = 0;
  }
}

// ===========================================================================================================================================


new Glide(".images",{
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
        gap: 40,
        breakpoints: {
          60:{
            perView: 2
          },
          30:{
            perView: 1
          }
        }
      }).mount();