let rulbtn = document.getElementById("rules-btn");
let close = document.getElementById("close");

// let icons = document.getElementsByClassName("play-icons");
// console.log(rulbtn);
rulbtn.onclick = function () {
  document.getElementById("rules").style.display = "block";
};

close.onclick = function () {
  document.getElementById("rules").style.display = "none";
};
