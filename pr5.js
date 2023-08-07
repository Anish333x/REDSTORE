var e = require('events');
var em = new e.EventEmitter(); em.on('event-1',function(){
var dd = new Date(); console.log("Today's Date:"+dd.getDate()+"/"+(dd.getMonth()+1)+"/"+dd.getFullYear()); if(dd.getHours()>=12)
{
console.log("Current Time: "+(dd.getHours()-12)+":"+dd.getMinutes()+" P.M."); if(dd.getHours()<17)
{
console.log("Good Afternoon	")
}
else
{
console.log("Good Evening	")
}
}
else{
console.log("Current Time: "+dd.getHours()+":"+dd.getMinutes()+" A.M."); if(dd.getHours()<6)
{
console.log("Good Night	")
}
else
{
console.log("Good Morning	")
}
}
});

em.emit('event-1')


