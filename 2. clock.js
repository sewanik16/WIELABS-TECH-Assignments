// Given a clock time in hh:mm format, determine, to the nearest degree, the angle between the hour and the minute hands.
// Bonus: When, during the course of a day, will the angle be zero?

function clock(time){
    time = time.split(":")
    let hh=parseInt(time[0])
    let mm=parseInt(time[1])
    let hdegree=(hh + mm/60)*30   // 
    let mdegree=mm*6
    let angle=Math.abs(hdegree-mdegree)
   if(angle>180)
   return 360-angle
   else
   return angle
}
let time = "10:15"
console.log(clock(time))