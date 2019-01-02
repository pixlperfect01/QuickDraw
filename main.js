var c,ctx,data;
var mouseData={
  down:false,
};
function setup(){
  c=document.getElementById("canvas");
  c.width=window.innerWidth-8;
  c.height=window.innerHeight-38;
  c.style.width=window.innerWidth-8;
  c.style.height=window.innerHeight-29;
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
    ctx.beginPath();
    ctx.arc(m.offsetX, m.offsetY, 10, 0, Math.PI*2);
    ctx.fill();
    data[data.length-1].xs.push(m.offsetX);
    data[data.length-1].ys.push(m.offsetY);
  }
}


function stroke(){
  var time=new Date();
  this.timeStamp="Date = "+(time.getMonth()+1)+", "+time.getDate()+", "+time.getFullYear()+"   Time = "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()+":"+time.getMilliseconds();
  this.xs=[];
  this.ys=[];
}
