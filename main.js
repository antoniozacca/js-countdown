'use strict'
function countdown() {
    let seconds = 10;
    const timer = setInterval(function(){
        seconds--;
        if (seconds=== 0) {
            clearInterval(timer);
            alert("buon anno!");
        } else{
            document.getElementById("output").innerText= "Secondi rimanenti: " + seconds;
        }
    }, 1000);
}
countdown();
