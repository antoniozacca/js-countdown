'use strict'
function countdown() {
    let seconds = 10;
    const timer = setInterval(function(){
        seconds--;
        if (seconds<=10) {
            clearInterval(timer);
            alert("buon anno!");
        }
    }, 10000);
}
countdown();
