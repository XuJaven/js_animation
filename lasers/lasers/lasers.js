var num = 5;//所需图片数量-1
var height = 768;
var width = 1366;//基于1366,768
var image = [];
for (var i = 0; i <=num; i++) {
 image[i] = new Image();
}
image[0].src = '../images/1_110.png';
image[1].src = '../images/1_120.png';
image[2].src = '../images/1_121.png';
image[3].src = '../images/1_123.png';
image[4].src = '../images/1_124.png';
image[5].src = '../images/1_130.png';
var T = 0;//
var angle = Math.PI/180;
var x = 0;
var c = document.getElementById("lasers");
var ctx = c.getContext("2d");
var m = 1;
var r1 = 30;
var r2 = 45;
image[num].onload = function(){
	ctx.save();
	draw1();
}

function draw1(){
T=0;
c.onclick=null;
var h = 0;//right高度
var rc = 0;//
var Laser={
one:function(){//背景
ctx.restore();
ctx.save();
ctx.clearRect(0,0,width,height);
ctx.drawImage(image[0],0,0,width,height);
//left
ctx.beginPath();
ctx.shadowBlur=5;
ctx.shadowOffsetY=10;
ctx.shadowColor="black";
var grd=ctx.createRadialGradient(width/4,height/2,5,width/4,height/2,50);
grd.addColorStop(0,"white");
grd.addColorStop(1,"gray");
ctx.fillStyle=grd;
ctx.arc(width/4,height/2,50,0,2*Math.PI);
ctx.fill();//

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle="lightblue";
ctx.arc(width/4,height/2,150,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(width/4,height/2,250,0,2*Math.PI);
ctx.stroke();//

ctx.beginPath();
ctx.strokeStyle="black";
ctx.moveTo(width/2,0);
ctx.lineTo(width/2,height);
ctx.stroke();//
//right
ctx.beginPath();
ctx.fillStyle="PaleTurquoise";
ctx.fillRect(width/2+100,250,500,20);
ctx.fillRect(width/2+100,500,500,20);
ctx.shadowBlur=0;
ctx.shadowOffsetY=0;
//word
ctx.drawImage(image[1],width/4+155,height/2);
ctx.drawImage(image[2],width/4+255,height/2);
ctx.drawImage(image[4],width/2,150);
ctx.drawImage(image[2],width/2+605,250);
ctx.drawImage(image[1],width/2+605,500);	},
two:function(a){
ctx.beginPath();
ctx.translate(width/4,height/2);
ctx.fillStyle="Khaki";
//内2
ctx.rotate(a*angle);
ctx.arc(150,0,20,0,2*Math.PI);
ctx.arc(-150,0,20,0,2*Math.PI);
//外3
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.rotate(120*angle);
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.rotate(120*angle);
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.restore();
ctx.save();
ctx.beginPath();
//right
ctx.fillStyle="Gold";
ctx.arc(width/2+350,500,13,0,2*Math.PI);
ctx.fill();	
},
three:function(a){//three,four absorption
		ctx.fillStyle="white";
		ctx.font="30px Arial";
		ctx.fillText("absorption",100,100);
ctx.beginPath();
ctx.translate(width/4,height/2);
ctx.fillStyle="Khaki";
//内2

ctx.rotate(2*a*angle);
ctx.arc(150,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.rotate(-a*angle);
ctx.arc(-150,0,20,0,2*Math.PI);
//外3
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.rotate(120*angle);
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.rotate(120*angle);
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.restore();
ctx.save();
ctx.beginPath();
//right
ctx.fillStyle="Gold";
ctx.arc(width/2+350,500,13,0,2*Math.PI);
ctx.fill();},
four:function(a){
		ctx.fillStyle="white";
		ctx.font="30px Arial";
		ctx.fillText("absorption",100,100);
	ctx.beginPath();
ctx.translate(width/4,height/2);
ctx.fillStyle="Khaki";
//内2

ctx.rotate((a+110)*angle);
ctx.arc(150+rc,0,20,0,2*Math.PI);
ctx.fill();
ctx.rotate(-110*angle);
ctx.beginPath();
//ctx.rotate(-a*angle);
ctx.arc(-150,0,20,0,2*Math.PI);
//外3
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.rotate(120*angle);
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.rotate(120*angle);
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.restore();
ctx.save();
ctx.beginPath();
//right
ctx.fillStyle="Gold";
ctx.arc(width/2+350,500-h,13,0,2*Math.PI);
ctx.fill();
},
five:function(a){
			ctx.fillStyle="white";
		ctx.font="30px Arial";
		ctx.fillText("spontaneous emissions",100,100);
ctx.beginPath();
ctx.translate(width/4,height/2);
ctx.fillStyle="Khaki";
//内2

ctx.rotate(a*angle);
ctx.arc(150,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(-150,0,20,0,2*Math.PI);
//外3
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.rotate(120*angle);
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.rotate(120*angle);
ctx.rotate(-(a/2)*angle);
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.restore();
ctx.save();
ctx.beginPath();
//right
ctx.fillStyle="Gold";
ctx.arc(width/2+350,250,13,0,2*Math.PI);
ctx.fill();
},
six:function(a){
				ctx.fillStyle="white";
		ctx.font="30px Arial";
		ctx.fillText("spontaneous emissions",100,100);
ctx.beginPath();
ctx.translate(width/4,height/2);
ctx.fillStyle="Khaki";
//内2

ctx.rotate(a*angle);
ctx.arc(150,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
//ctx.rotate(-a*angle);
ctx.arc(-150,0,20,0,2*Math.PI);
//外3
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.rotate(120*angle);
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.rotate(120*angle);
ctx.rotate(-100*angle);
ctx.arc(250-rc,0,20,0,2*Math.PI);
ctx.fill();
ctx.restore();
ctx.save();
ctx.beginPath();
//right
ctx.fillStyle="Gold";
ctx.arc(width/2+350,250+h,13,0,2*Math.PI);
ctx.fill();
},
seven:function(a){
				ctx.fillStyle="white";
ctx.font="30px Arial";
ctx.fillText("stimulated emission",100,100);
ctx.beginPath();
ctx.translate(width/4,height/2);
ctx.fillStyle="Khaki";
//内2

ctx.rotate(a*angle);
ctx.arc(150,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(-150,0,20,0,2*Math.PI);
//外3
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.rotate(120*angle);
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.rotate(120*angle);
ctx.arc(250,0,20,0,2*Math.PI);
ctx.fill();
ctx.restore();
ctx.save();
ctx.beginPath();
//right
ctx.fillStyle="Gold";
ctx.arc(width/2+350,250+h,13,0,2*Math.PI);
ctx.fill();	
}
}
ctx.globalAlpha=0;
var myLaser = setInterval(function(){
if(ctx.globalAlpa<1)
{ctx.globalAlpha+=0.1;}
Laser.one();
//Laser.two();
switch(Math.floor(T/500)){
	case 0:
	if(h<250){h++;}
	if(rc<100){rc++;}
	Laser.four(T);
    T++;
	break;	
	case 1:
	if(T-500<200){
	Laser.five(T);
	h = 0;
	rc=0;
}
else{
	if(h<250){h++;}
	if(rc<100){rc++;}
	Laser.six(T);
}
T++;
break;
	case 2:
			if(T==1000){
		Laser.two(T);
		h=0;}
		else{
	if(h<250){h++;}
		Laser.seven(T);}
T++;
	break;
	default:
	Laser.two(T);
	c.onclick = function(){
	clearInterval(myLaser);
	draw2();};
	break;
}
}, 15);
}
function draw2(){
T=0;
c.onclick=null;
var drawelement=function(x,y,deg,num){
var a = Math.asin(m/r1);
var d = r1*Math.cos(a);
var a1 = a
var a2 = Math.asin(m/r2);
var d1 = d
var d2 = r2*Math.cos(a2);


	ctx.translate(x,y);
	ctx.rotate(deg);
	switch(num){
		case 11:
		ctx.beginPath();
ctx.fillStyle="pink";
ctx.arc(d,0,r1,a+Math.PI,-a+Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(-d,0,r1,a,-a);
ctx.fill();
ctx.restore();
ctx.save();
		break;
		case 12:
		ctx.beginPath();
ctx.fillStyle="lightgreen";
ctx.arc(0,0,r2,0,2*Math.PI);
ctx.fill();

ctx.fillStyle="pink";
ctx.rotate(-30*angle);
ctx.beginPath();
ctx.arc(-d1-d2,0,r1,a1,-a1);
ctx.fill();
ctx.rotate(60*angle);
ctx.beginPath();
ctx.arc(d1+d2,0,r1,a1+Math.PI,-a1+Math.PI);
ctx.fill();
ctx.restore();
ctx.save();
		break;
		case 21:
			d = r1-m/2;
			d1 = d;
			d2 = r2-m/2;
		ctx.fillStyle="pink";
ctx.arc(d,0,r1,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(-d,0,r1,0,2*Math.PI);
ctx.fill();
ctx.restore();
ctx.save();
		break;
		case 22:
			d = r1-m/2;
			d1 = d;
			d2 = r2-m/2;
		ctx.beginPath();
		ctx.fillStyle="lightgreen";
		ctx.arc(0,0,r2,0,2*Math.PI);
		ctx.fill();

		ctx.fillStyle="pink";
		ctx.rotate(-30*angle);
		ctx.beginPath();
		ctx.arc(-d1-d2,0,r1,0,2*Math.PI);
		ctx.fill();
		ctx.rotate(60*angle);
		ctx.beginPath();
		ctx.arc(d1+d2,0,r1,0,2*Math.PI);
		ctx.fill();
		ctx.restore();
		ctx.save();
		break;
		default:
		return;
	}
	return;
}
var Laser={
	one:function(){
		ctx.restore();
		ctx.save();
		ctx.clearRect(0,0,width,height);
		ctx.drawImage(image[0],0,0,width,height);
		ctx.fillStyle="white";
		ctx.font="30px Arial";
		ctx.fillText("working of lasers",width/2,100);
	},
	two:function(){
		if(m==25){
	drawelement(300,200,90*angle,11);
drawelement(775,225,90*angle,11);
drawelement(400,450,180*angle,11);
drawelement(175,550,90*angle,11);
drawelement(875,525,45*angle,11);//
drawelement(500,250,++Deg[0]*angle,12);
drawelement(250,400,++Deg[1]*angle,12);
drawelement(900,375,++Deg[2]*angle,12);
drawelement(375,550,++Deg[3]*angle,12);
drawelement(735,600,++Deg[4]*angle,12);
}
else if(m>0){
drawelement(300,200,90*angle,11);
drawelement(775,225,90*angle,11);
drawelement(400,450,180*angle,11);
drawelement(175,550,90*angle,11);
drawelement(875,525,45*angle,11);//
drawelement(500,250,90*angle,12);
drawelement(250,400,180*angle,12);
drawelement(900,375,90*angle,12);
drawelement(375,550,90*angle,12);
drawelement(735,600,90*angle,12);
}
else {
drawelement(300,200,90*angle,21);
drawelement(775,225,90*angle,21);
drawelement(400,450,180*angle,21);
drawelement(175,550,90*angle,21);
drawelement(875,525,45*angle,21);//
drawelement(500,250,90*angle,22);
drawelement(250,400,180*angle,22);
drawelement(900,375,90*angle,22);
drawelement(375,550,90*angle,22);
drawelement(735,600,90*angle,22);
}

m=m<25?m+1:25;
	}
	}

ctx.globalAlpha=0;
var Deg=[90,180,90,90,90];
var myLaser = setInterval(function(){
	if(ctx.globalAlpa<1){
	ctx.globalAlpha+=0.1;}
Laser.one();
Laser.two();
T++;
if(T>500){
c.onclick = function(){
clearInterval(myLaser);
draw3();};}
}, 10);

}
function draw3(){
T=0;
c.onclick=null;
var y=0;
var x=250;
var Layer={
one:function(){
ctx.restore();
ctx.save();
ctx.clearRect(0,0,width,height);
ctx.drawImage(image[0],0,0,width,height);
ctx.shadowBlur=5;
ctx.shadowOffsetY=10;
ctx.shadowColor="black";
ctx.beginPath();
ctx.fillStyle="PaleTurquoise";
ctx.fillRect(width/3,250,500,20);
ctx.fillRect(width/3,500,500,20);
ctx.shadowBlur=0;
ctx.shadowOffsetY=0;
ctx.drawImage(image[4],width/3-100,150);
ctx.drawImage(image[2],width/3+505,250);
ctx.drawImage(image[1],width/3+505,500);
},
two:function(){
ctx.beginPath();
ctx.fillStyle="Gold";
ctx.arc(width/3+50,250+y,15,0,2*Math.PI);
ctx.arc(width/3+100,250+y,15,0,2*Math.PI);
ctx.arc(width/3+150,250+y,15,0,2*Math.PI);
ctx.arc(width/3+200,250+y,15,0,2*Math.PI);
ctx.arc(width/3+250,250+y,15,0,2*Math.PI);
ctx.arc(width/3+300,250+y,15,0,2*Math.PI);
ctx.fill();
},
three:function(){
ctx.beginPath();
ctx.fillStyle="Gold";
ctx.arc(width/3+50,250+x,15,0,2*Math.PI);
ctx.arc(width/3+100,250+x,15,0,2*Math.PI);
ctx.arc(width/3+150,250+x,15,0,2*Math.PI);
ctx.arc(width/3+200,250+x,15,0,2*Math.PI);
ctx.arc(width/3+250,250+x,15,0,2*Math.PI);
ctx.arc(width/3+300,250+x,15,0,2*Math.PI);
ctx.fill();
}
}
ctx.globalAlpha=0;
var myLaser = setInterval(function(){
	if(ctx.globalAlpha<1){
	ctx.globalAlpha+=0.1;}
//if(ctx.globalAlpha>1){clearInterval(myLaser);}
Layer.one();
if(y<=250){
	Layer.two();
	y++;}
else {
	Layer.three();
	if(x>0){x--;}
}
T++;
if(T>500){
c.onclick = function(){
clearInterval(myLaser);
draw4();};}
}, 10);

}
function draw4(){
T=0;
c.onclick=null;
var r=15;//球r
var h=[450-2*r,150];
var Layer={//背景
one:function(){	
ctx.restore();
ctx.save();
ctx.clearRect(0,0,width,height);
ctx.drawImage(image[0],0,0,width,height);
ctx.shadowBlur=5;
ctx.shadowOffsetY=10;
ctx.shadowColor="black";
ctx.beginPath();
ctx.fillStyle="PaleTurquoise";
ctx.fillRect(width/4,150,620,20);
ctx.fillRect(width/3,300,500,20);
ctx.fillRect(width/4,450,620,20);
ctx.shadowBlur=0;
ctx.shadowOffsetY=0;
ctx.fillStyle="white";
ctx.font="30px Arial";
ctx.fillText("Metastable State",width/3+520,325);
ctx.drawImage(image[2],width/4+650,150);
ctx.drawImage(image[1],width/4+650,450);
ctx.restore();
ctx.save();
},
two:function(){//球
	for(var i=1;i<=7;i++)
{	ctx.fillStyle="Gold";
	//二行8，末行上7，下8
	ctx.beginPath();
	ctx.arc(width/3+3*i*r,300,r,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
    ctx.arc(width/4+(3*i+1)*r,450-2*r,r,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(width/4+3*i*r,450,r,0,2*Math.PI);
	ctx.fill();
}
	ctx.beginPath();
	ctx.arc(width/3+3*8*r,300,r,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(width/4+3*8*r,450,r,0,2*Math.PI);
	ctx.fill();
	ctx.restore();
	ctx.save();
},
three:function(){
	for(var i=1;i<=7;i++)
{	ctx.fillStyle="Gold";
	//二行8，末行上7，下8
	ctx.beginPath();
	ctx.arc(width/3+3*i*r,300,r,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	if(i==1){
	ctx.arc(width/4+(3*i+1)*r,h[0],r,0,2*Math.PI);}
	else{
	ctx.arc(width/4+(3*i+1)*r,450-2*r,r,0,2*Math.PI);}
	ctx.fill();
	ctx.beginPath();
	ctx.arc(width/4+3*i*r,450,r,0,2*Math.PI);
	ctx.fill();
}
	ctx.beginPath();
	ctx.arc(width/3+3*8*r,300,r,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(width/4+3*8*r,450,r,0,2*Math.PI);
	ctx.fill();
	ctx.restore();
	ctx.save();
},
four:function(){
	for(var i=1;i<=7;i++)
{	ctx.fillStyle="Gold";
	//二行8，末行上7，下8
	ctx.beginPath();
	ctx.arc(width/3+3*i*r,300,r,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	if(i==1){
	ctx.arc(width/3+(3*i+1)*r,h[1],r,0,2*Math.PI);}
	else{
	ctx.arc(width/4+(3*i+1)*r,450-2*r,r,0,2*Math.PI);}
	ctx.fill();
	ctx.beginPath();
	ctx.arc(width/4+3*i*r,450,r,0,2*Math.PI);
	ctx.fill();
}
	ctx.beginPath();
	ctx.arc(width/3+3*8*r,300,r,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(width/4+3*8*r,450,r,0,2*Math.PI);
	ctx.fill();
	ctx.restore();
	ctx.save();
}
}
ctx.globalAlpha=0;
var myLaser = setInterval(function(){
	if(ctx.globalAlpha<1){
	ctx.globalAlpha+=0.1;}
//if(ctx.globalAlpha>1){clearInterval(myLaser);}
Layer.one();
if(h[0]>150){
h[0]--;
Layer.three();
}
else if(h[1]<=300-2*r){
	if(h[1]!=300-2*r){
		h[1]++;}
Layer.four();}
T++;
if(T>500){
c.onclick = function(){
clearInterval(myLaser);
draw5();};}
}, 10);
}
function draw5(){
T=0;
c.onclick=null;
var r=15;
var h=0;
var Layer = {
one:function(){
ctx.restore();
ctx.save();
ctx.clearRect(0,0,width,height);
ctx.drawImage(image[0],0,0,width,height);
ctx.shadowBlur=5;
ctx.shadowOffsetY=10;
ctx.shadowColor="black";
ctx.beginPath();
ctx.fillStyle="PaleTurquoise";
ctx.fillRect(50,250,500,20);
ctx.fillRect(50,500,500,20);

ctx.fillRect(width/2+100,250,500,20);
ctx.fillRect(width/2+100,500,500,20);
ctx.shadowBlur=0;
ctx.shadowOffsetY=0;
ctx.fillStyle="white";
ctx.font="150px Arial";
ctx.fillText("=",width/2-50,420);
},
two:function(){
ctx.fillStyle="Gold";
ctx.beginPath();
ctx.arc(50+2*r,500-h,r,0,2*Math.PI);
ctx.arc(width/2+100+2*r,250+h,r,0,2*Math.PI);
ctx.fill();	
},
three:function(){
ctx.fillStyle="Gold";
for(var i=1;i<=6;i++){
ctx.beginPath();
ctx.arc(50+i*3*r,500-h,r,0,2*Math.PI);
ctx.arc(width/2+100+i*3*r,250+h,r,0,2*Math.PI);
ctx.fill();	
}
}	
}

ctx.globalAlpha=0;
var myLaser = setInterval(function(){
ctx.globalAlpha+=0.1;
if(ctx.globalAlpha>1){clearInterval(lasers);}
Layer.one();
//Layer.two();
Layer.three();
if(h<250){h++}
T++;
if(T>500){
c.onclick = function(){
clearInterval(myLaser);
draw1();};}
}, 10);

}








	





