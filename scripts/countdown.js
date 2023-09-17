// Vitalii Lozovan -> countdown
// set the counter end date 
const endDate = new Date("2023-10-01T23:59:59").getTime();

// counter update every second
const timer = setInterval(function () {
    const currentDate = new Date().getTime();
    const timeLeft = endDate - currentDate;
    // an expression that checks for time and date completion
    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Time is up!";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        // updating the textual content of html elements
        document.getElementById("days").innerText = days.toString().padStart(2, "0");
        document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
    }
    // the function will be executed every second
}, 1000);