// var heading = document.quarySelector('h1')
// console.log(heading);
// heading.innerText = "jenita mary";
// function startCountdown() {
//     const countdownElement = document.getElementById("countdown");
//     let count = 10;

// const intervel = setIntervel( ( )=> {
//     countdownElement.innerText= count;
//     count --;    
//     if (count < 0 ) {
//         clearIntervel(intervel);
//        countdownElement.innerText="happy birthday";
//     }
// }, 1000);
// }
// startCountdown();
// script.js
function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    let count = 10;

    const interval = setInterval(() => {
        countdownElement.innerText = count;
        count--;

        if (count < 0) {
            clearInterval(interval);
            countdownElement.innerText = "Happy birthday";
        }
    }, 1000);
}

startCountdown();
