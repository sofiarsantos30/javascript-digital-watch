const timeElement = document.querySelector("#time");

function showTime() {

    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = correctionTime(hours);  
    minutes = correctionTime(minutes);
    seconds = correctionTime(seconds);

    timeElement.innerText = hours + ":" + minutes + ":" + seconds;
    setInterval(showTime, 1000);
}

function correctionTime(i) {
    if(i < 10) {
        i = "0" + i;  
    } else {
        i = i;
    } return i
}

showTime();
