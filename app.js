function clock(){
  var fulldate= new Date();
  var hrs = fulldate.getHours();
  var mins = fulldate.getMinutes();
  var secs = fulldate.getSeconds();
  if(hrs < 10){
    hrs ="0"+ hrs;
  }
  if(mins < 10){
    mins ="0"+ mins;
  }
  if(secs < 10){
    secs ="0"+ secs;
  }
  document.getElementById('hours').innerHTML=hrs;
  document.getElementById('minute').innerHTML=":" + mins;
  document.getElementById('seconds').innerHTML=":" + secs;
}
setInterval(clock,1000);
