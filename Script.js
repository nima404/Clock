// Function
function clockHandler() {
    // Variable's
    const OrgDate = new Date();
    let Hour = OrgDate.getHours();
    let Minute = OrgDate.getMinutes();
    let Second = OrgDate.getSeconds();
    let HourElement = document.getElementById("hour").innerHTML = ("0" + Hour + " " + ":").slice(-4);
    let MinuteElement = document.getElementById("minute").innerHTML = ("0" + Minute + " " + ":").slice(-4);
    let SecondElement = document.getElementById("second").innerHTML = ("0" + Second).slice(-2);

    let ClockDeg = 360;

    // Hour
    let HourDeg = 12;
    let AllHour = ClockDeg / HourDeg;
    let FHour = AllHour * Hour + Minute / 2;

    // Minute
    let MinuteDeg = 60;
    let AllMinut = ClockDeg / MinuteDeg;
    let FMinute = AllMinut * Minute;

    // Second
    let SecondDeg = 60;
    let AllSecond = ClockDeg / SecondDeg;
    let FSecond = AllSecond * Second;

    // Condition's
    if (Hour >= 12) {
        Hour = 1;
    }

    if (Hour >= 24) {
        Hour = 13;
    }

    // Dom Code's
    document.getElementById('Hour-Hand-Clock').style.transform = `rotate(${FHour}deg)`;
    document.getElementById('Minute-Hand-Clock').style.transform = `rotate(${FMinute}deg)`;
    document.getElementById('Second-Hand-Clock').style.transform = `rotate(${FSecond}deg)`;

    // Stop Button Code
    const BTN = document.getElementById("StopBtn").addEventListener("click", function () {
        document.querySelector("#GetDate").innerHTML = "You'r Stop At  " + Hour + " " + ": " + Minute + " " + ": " + Second + "  " + "Clock.";
    })
}

// Calling Function
clockHandler();

// SetInterval For Second In Clock
setInterval(clockHandler, 1000);