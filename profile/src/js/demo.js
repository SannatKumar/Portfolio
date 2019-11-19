var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.background = "rgba(0, 0, 0, 1)";
  } else {
    document.getElementById("navbar").style.top = "-82px";
    document.getElementById("navbar").style.background = "rgba(0, 0, 0, 1)";
  }
  prevScrollpos = currentScrollPos;
}

document.querySelector("#main").addEventListener("mouseover", function(){
  console.log("clicked");
  document.getElementById("item-1").classList.toggle("item-1");
  document.getElementById("item-2").classList.toggle("item-2");
  document.getElementById("item-3").classList.toggle("item-3");
  document.getElementById("item-4").classList.toggle("item-4");
});

document.querySelector("#main").addEventListener("mouseout", function(){
  console.log("clicked");
  document.getElementById("item-1").classList.toggle("item-1");
  document.getElementById("item-2").classList.toggle("item-2");
  document.getElementById("item-3").classList.toggle("item-3");
  document.getElementById("item-4").classList.toggle("item-4");
});



