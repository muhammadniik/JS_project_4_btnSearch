const btnSearch = document.getElementById("btnSerch");
const txtSearch = document.getElementsByClassName("input")[0];


btnSearch.addEventListener("click", function() {

    txtSearch.classList.toggle("active");
    btnSearch.classList.toggle("active");
    txtSearch.focus();

});
const bac = document.getElementsByClassName("main")[0];
window.onmousemove = function(e) {
    let x = e.clientX / 10;
    let y = e.clientY / 10;
    bac.style.backgroundPositionX = x + "px";
    bac.style.backgroundPositionY = y + "px";

}