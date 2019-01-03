var c,ctx,data;
var mouseData={
  down:false,
};
var settings={
  backgroundColor:"#FFFFFF",
  strokeColor:"#000000",
  strokeSize:7,
  currentMode:"draw"
};
setInterval(update, 20);
function setup(){
  c=document.getElementById("canvas");
  c.width=window.innerWidth-18;
  c.height=window.innerHeight-150;
  c.style.width=window.innerWidth-18;
  c.style.height=window.innerHeight-150;
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
  c.addEventListener("mouseleave",function(){
    mouseData.down=false;
  });
}

function test(m){
  if(mouseData.down){
    ctx.beginPath();
    ctx.fillStyle=settings.strokeSize
    ctx.arc(m.offsetX, m.offsetY, settings.strokeSize, 0, Math.PI*2);
    ctx.fill();
    data[data.length-1].xs.push(m.offsetX);
    data[data.length-1].ys.push(m.offsetY);
    data[data.length-1].ty.push(settings.strokeColor);
    data[data.length-1].ty.push(settings.currentMode);
  }
}

function stroke(){
  var time=new Date();
  this.timeStamp="Date = "+(time.getMonth()+1)+", "+time.getDate()+", "+time.getFullYear()+"   Time = "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()+":"+time.getMilliseconds();
  this.xs=[];
  this.ys=[];
  this.co=[];
  this.ty=[];
}

function update(){
  settings.backgroundColor=document.getElementById("backColor").value;
  settings.strokeColor=document.getElementById("strokeColor").value;
  settings.strokeSize=parseInt(document.getElementById("strokeSize").value);
  settings.currentMode=document.getElementById("mode").value;
  if(settings.currentMode==="erase"){
    settings.strokeColor=settings.backgroundColor;
  }
}
