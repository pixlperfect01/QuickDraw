var c,ctx,data;
var mouseData={
  down:true,
};
function setup(){
  c=document.getElementById("canvas");
  ctx=c.getContext("2d");
  data=[];
  c.addEventListener("mousemove",function(event){
    test(event);
  });
  c.addEventListener("mousedown",function(){
    data.push(new stroke());
    mouseData.down=true;
  });
  c.addEventListener("mouseup",function(){
    mouseData.down=false;
  });
}




function test(m){
  if(mouseData.down){
    ctx.fillRect(m.offsetX, m.offsetY, 1, 1);
    data[data.length-1].x.push(m.offsetX);
    data[data.length-1].y.push(m.offsetY);
  }
}


function stroke(){
  var time=new Date();
  this.t="Date = "+time.getFullYear+", "+time.getMonth()+", "+time.getDay()+"   Time = "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()+":"+time.getMilliseconds();
  this.x=[];
  this.y=[];
}
