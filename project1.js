function switchoff() {
    document.getElementById("lyton").src="offbulbimg.png";
    document.getElementById("cat").src="cat-eyes-img.png";
    document.getElementById("switch").textContent="Switched OFF";
    document.getElementById("offswitch").style.backgroundColor="grey";
    document.getElementById("onswitch").style.backgroundColor="green";
}

function switchon() {
    document.getElementById("lyton").src="lytbulbimg.png";
    document.getElementById("cat").src="cat-img.png";
    document.getElementById("switch").textContent="Switched ON";
    document.getElementById("onswitch").style.backgroundColor="grey";
    document.getElementById("offswitch").style.backgroundColor="rgb(207, 47, 47)";
}