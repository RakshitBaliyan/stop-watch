
function updateTime(){
    let t = new Date();
    let hours = t.getHours();
    let minutes = t.getMinutes();
    let seconds = t.getSeconds();
    let session = "AM";
    
    if(hours>18 || hours < 6){
        document.body.style.backgroundImage = "url('./night-view.jpg')";
    }
    
    if(hours>12){
        hours = hours-12;
        session = "PM";
    }

    if(hours<10){
        hours = "0" + hours;
    }
    if(minutes<10){
        minutes = "0" + minutes;
    }
    if(seconds<10){
        seconds = "0" + seconds;
    }


    

    let time = hours + ":" + minutes + ":" + seconds + " " + session;
    document.getElementById("clock").innerText = time;
    setTimeout(updateTime, 1000);
};

