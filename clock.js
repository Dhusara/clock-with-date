function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if(hours == 0) {
        hours = 12;
    };

    if(hours > 12) {
        hours = hours - 12;
        session = "PM";
    };

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = `${hours}:${minutes}:${seconds} ${session}`;

    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setInterval(showTime, 1000);
};

function showDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let dayOfTheWeek = date.getDay();

    dayOfTheWeek = (dayOfTheWeek == 0) ? "Sunday" : dayOfTheWeek;
    dayOfTheWeek = (dayOfTheWeek == 1) ? "Monday" : dayOfTheWeek;
    dayOfTheWeek = (dayOfTheWeek == 2) ? "Tuesday" : dayOfTheWeek;
    dayOfTheWeek = (dayOfTheWeek == 3) ? "Wednesday" : dayOfTheWeek;
    dayOfTheWeek = (dayOfTheWeek == 4) ? "Thursday" : dayOfTheWeek;
    dayOfTheWeek = (dayOfTheWeek == 5) ? "Friday" : dayOfTheWeek;
    dayOfTheWeek = (dayOfTheWeek == 6) ? "Saturday" : dayOfTheWeek;

    month = (month == 0) ? "January" : month;
    month = (month == 1) ? "February" : month;
    month = (month == 2) ? "March" : month;
    month = (month == 3) ? "April" : month;
    month = (month == 4) ? "May" : month;
    month = (month == 5) ? "June" : month;
    month = (month == 6) ? "July" : month;
    month = (month == 7) ? "August" : month;
    month = (month == 8) ? "September" : month;
    month = (month == 9) ? "October" : month;
    month = (month == 10) ? "November" : month;
    month = (month == 11) ? "December" : month;
    

    let fullDate = `${dayOfTheWeek} ${day} ${month} ${year}`;

    document.getElementById("date").innerText = fullDate;
    document.getElementById("date").innerContent = fullDate;
};

showDate();
showTime();
