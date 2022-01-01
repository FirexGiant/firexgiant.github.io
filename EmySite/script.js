var anniversaryDate = new Date("2022/01/14").getTime();
var anniversaryNumber = 6;

var countdown = setInterval(() => {
    var currentDate = new Date().getTime();

    var timeToAnniversary = anniversaryDate - currentDate;

    var days = Math.floor(timeToAnniversary / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeToAnniversary % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeToAnniversary % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeToAnniversary % (1000 * 60)) / 1000);

    var countdownDiv = document.getElementById("countdown");
    var countdownTime = countdownDiv.getElementsByTagName("p")[0];
    countdownTime.innerHTML = `${padNumber(days, 2)}:${padNumber(hours, 2)}:${padNumber(minutes, 2)}:${padNumber(seconds, 2)}`;

    var countdownLabel = countdownDiv.getElementsByTagName("h2")[0];
    countdownLabel.innerHTML = `Time to ${anniversaryNumber} month anniversary:`;
}, 1000);

function padNumber(number, length) {
    var output = "" + number;

    while (output.length < length) {
        output = "0" + output;
    }

    return output;
}

// if (!localStorage.getItem("visited")) {
//     var countdownDiv = document.getElementById("countdown");
//     var sorryDiv = document.getElementById("sorry");
//     var sorryLines = sorryDiv.getElementsByTagName("*");
//     var fadeInTime = sorryLines.length * 5;
//     var animationTime = fadeInTime + 3;

//     countdownDiv.style.display = "none";

//     for (var i = 0; i < sorryLines.length; ++i) {
//         sorryLines[i].style.animation = "fadeIn 5s forwards";
//         sorryLines[i].style.animationDelay = `${i * 5}s`;
//     }

//     setTimeout(() => {
//         for (var i = 0; i < sorryLines.length; ++i) {
//             sorryLines[i].style.animation = "fadeOut 3s forwards";
//         }
//     }, fadeInTime * 1000);
//     setTimeout(() => {
//         sorryDiv.style.display = "none";
//         countdownDiv.style.display = "block";
//         countdownDiv.style.animation = "fadeIn 3s forwards";
//     }, animationTime * 1000);

//     localStorage.setItem("visited", true);
// } else {
//     document.getElementById("sorry").style.display = "none";
//     document.getElementById("countdown").style.opacity = 1;
// }