let smart =document.querySelector('.smart');
let strat=document.getElementById('strat');
let stop=document.getElementById('stop');
let strst=document.getElementById('reset');

let msec =  0; 
let secs = 0;
let mins = 0;

let timerId = null;

strat.addEventListener('click',function(){
    if(timerId !==null){
        clearInterval(timerId);
    }
    timerId = setInterval(stratTimer,10);
});
stop.addEventListener('click',function(){
        clearInterval(timerId);

});
reset.addEventListener('click',function(){
    clearInterval(timerId);
    smart.innerHTML=`00:00:00`;

});
function stratTimer(){
    msec++;
    if(msec == 100){
        msec=0;
        secs++;
        // console.log(secs.toString().padStart(2, 0))
        if(secs == 60){
            secs =0;
            mins++;
        }
    }


let msecString = msec < 10 ?`0${msec}`: msec;
let secsString = secs < 10 ?`0${secs}`: secs;
let minsString = mins < 10 ?`0${mins}`: mins;

smart.innerHTML=`${minsString}: ${secsString}: ${msecString}`;
}