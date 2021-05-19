const day = document.getElementById('days');
const hour = document.getElementById('hours');
const minutes = document.getElementById('mins');
const second = document.getElementById('secs');

const Bday = '30 Aug 2021';
 function countdown(){
     const bdayDate = new Date(Bday);
     const currentDate = new Date();
     
     const totsecs = (bdayDate- currentDate) /1000;

     const days = Math.floor(totsecs/ 3600/24);
     const hours = Math.floor(totsecs/ 3600)%24;
     const min = Math.floor(totsecs/ 60) % 60;
     const seconds = Math.floor(totsecs)% 60;
     console.log(bdayDate - currentDate);

     day.innerHTML = formatTime(days);
     hour.innerHTML = formatTime(hours);
     minutes.innerHTML = formatTime(min);
     second.innerHTML = formatTime(seconds);
     

 }

 // function to show 0 if time(mins, sec) is less than 10
 function formatTime(time) {
     return time < 10 ? (`0${time}`) : time;
 }
// intial call
 countdown();
 // calls countdown every second
 setInterval(countdown,1000);