var $start=document.querySelector('#start')
$start.addEventListener('click', Generate)
var $again=document.querySelector('#again')
$again.addEventListener('click', Again)
var $rating=document.querySelector('#rating')
$rating.addEventListener('click', Winners)
var $gamewindow=document.querySelector('#GameWindow')
var $result=document.querySelector('#result')
var $cube1=document.querySelector('#cube1')
var $cube2=document.querySelector('#cube2')
var $cube3=document.querySelector('#cube3')
var $cube4=document.querySelector('#cube4')
var $cube5=document.querySelector('#cube5')
var $cube6=document.querySelector('#cube6')
var $cube7=document.querySelector('#cube7')
var $cube8=document.querySelector('#cube8')
var $cube9=document.querySelector('#cube9')
var $cube10=document.querySelector('#cube10')
var $cube11=document.querySelector('#cube11')
var $cube12=document.querySelector('#cube12')
var $cube13=document.querySelector('#cube13')
var $cube14=document.querySelector('#cube14')
var $cube15=document.querySelector('#cube15')
var $cube16=document.querySelector('#cube16')
var $cube17=document.querySelector('#cube17')
var $cube18=document.querySelector('#cube18')
var $cube19=document.querySelector('#cube19')
var $cube20=document.querySelector('#cube20')
var $cube21=document.querySelector('#cube21')
var $cube22=document.querySelector('#cube22')
var $cube23=document.querySelector('#cube23')
var $cube24=document.querySelector('#cube24')
var $cube25=document.querySelector('#cube25')
var box=[$cube1, $cube2, $cube3, $cube4, $cube5, $cube6, $cube7, $cube8, $cube9, $cube10, $cube11, $cube12, $cube13, $cube14, $cube15, $cube16, $cube17, $cube18, $cube19, $cube20, $cube21, $cube22, $cube23, $cube24, $cube25]
var mas=new Array(10);
var mass=new Array(10);
var m=0;
var chance=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
var count=0
GameWindow.addEventListener('click', BoxClick)
var isGameStarted=false
function show($el) {
	$el.classList.remove('hide')
}

function hide($el) {
	$el.classList.add('hide')
}
function on(el){
	el.classList.remove('off')
	el.classList.add('on')
}
function off(el){
	el.classList.remove('on')
	el.classList.add('off')
}
function Generate() {
	count=0
	isGameStarted=true
	renderBox()
	hide(start)
	show(again)

}
function Again() {
	count=0
	$result.textContent=count.toFixed(3).toString()
	for (var i = 0; i<25; i++) {
		var mybox = box[i]
		off(mybox)
	}
	hide(again)
	show(start)
}
function BoxClick() {
	hide(start)
	show(again)
	GameWindow.onclick = function(e) {
	var w=getRandom(0, 24);
	var rand=chance[w];
	if (rand==1) {
		var d=getRandom(0, 24);
		var boxrand=box[w];
		Electricity(boxrand);
		console.log('Oops! 1/25 chance')
		alert('Упс! Сработал шанс 1 к 25 и рандомный кубик попал под напряжение')
	}	

var elem = e ? e.target : window.event.srcElement;
console.log(elem.id)
if (elem.id!='GameWindow') {
	count++;
	$result.textContent=count.toFixed(3).toString()
	console.log('score:'+count)
}
var cub='cube'
var x = elem.id
var r = x.replace(/cube/g, '');
var numb=parseInt(r, 10)
var m1=document.getElementById(cub+(numb-1))
var m4=document.getElementById(cub+(numb-4))
var m5=document.getElementById(cub+(numb-5))
var m6=document.getElementById(cub+(numb-6))
var p1=document.getElementById(cub+(numb+1))
var p4=document.getElementById(cub+(numb+4))
var p5=document.getElementById(cub+(numb+5))
var p6=document.getElementById(cub+(numb+6))
//console.log(m1, m4, m5, m6, p1, p4, p5, p6)
Electricity(elem)
if (numb==1) {
	Electricity(p1)
	Electricity(p5)
	Electricity(p6)

}

else if(numb==2||numb==3||numb==4) {
	Electricity(m1)
	Electricity(p1)
	Electricity(p4)
	Electricity(p5)
	Electricity(p6)
}
else if (numb==5) {
	Electricity(m1)
	Electricity(p4)
	Electricity(p5)
}
else if (numb==10||numb==15||numb==20) {
	Electricity(m1)
	Electricity(m5)
	Electricity(m6)
	Electricity(p4)
	Electricity(p5)
}
else if (numb==25) {
	Electricity(m1)
	Electricity(m5)
	Electricity(m6)
}
else if (numb==22||numb==23||numb==24) {
	Electricity(m1)
	Electricity(m4)
	Electricity(m5)
	Electricity(m6)
	Electricity(p1)
}	
else if (numb==21) {
	Electricity(m4)
	Electricity(m5)
	Electricity(p1)
}
else if (numb==6||numb==11||numb==16) {
	Electricity(m4)
	Electricity(m5)
	Electricity(p1)
	Electricity(p5)
	Electricity(p6)
}
else{
	Electricity(m1)
	Electricity(m4)
	Electricity(m5)
	Electricity(m6)
	Electricity(p1)
	Electricity(p4)
	Electricity(p5)
	Electricity(p6)
}

function Electricity(lamp){
	if(lamp.classList.contains('on')){
		lamp.classList.add('off')
		lamp.classList.remove('on')
	}
	else{
		lamp.classList.add('on')
		lamp.classList.remove('off')
	}
}
if ($cube1.classList.contains('on')&&$cube2.classList.contains('on')&&$cube3.classList.contains('on')&&$cube4.classList.contains('on')&&$cube5.classList.contains('on')&&$cube6.classList.contains('on')&&$cube7.classList.contains('on')&&$cube8.classList.contains('on')&&$cube9.classList.contains('on')&&$cube10.classList.contains('on')&&$cube11.classList.contains('on')&&$cube12.classList.contains('on')&&$cube13.classList.contains('on')&&$cube14.classList.contains('on')&&$cube15.classList.contains('on')&&$cube16.classList.contains('on')&&$cube17.classList.contains('on')&&$cube18.classList.contains('on')&&$cube19.classList.contains('on')&&$cube20.classList.contains('on')&&$cube21.classList.contains('on')&&$cube22.classList.contains('on')&&$cube23.classList.contains('on')&&$cube24.classList.contains('on')&&$cube25.classList.contains('on')) {
	console.log('win! score:'+count)
	var name=prompt('Поздравляю с победой! Как вас зовут?')
	mas[m]=name+" - "+count
	mass[m]=count
	Rating()
	m++
	Again()

}
}
}
function Rating() {
var vrem1=mas[m];
var vrem2=mass[m];
var a=0;
if(m!=0){
mas[m]='';
mass[m]='';
}
for(var i=0;i<mas.length;i++){
if(vrem2<=mass[i]){
for(var x=0;x<10;x++){
mass[10-x]=mass[9-x]
mas[10-x]=mas[9-x]
a++;
}
mas[i]=vrem1;
mass[i]=vrem2;
break;
}
}
if(m==0){
mas[1]=undefined;
mass[1]=undefined;
}
if(a==0){
mas[m]=vrem1;
mass[m]=vrem2;
}
}

function Winners(){
	window.alert("Рейтинг победителей:\n 1)  "+mas[0]+"\n 2)  "+mas[1]+"\n 3)  "+mas[2]+"\n 4)  "+mas[3]+"\n 5)  "+mas[4]
	+"\n 6)  "+mas[5]+"\n 7)  "+mas[6]+"\n 8)  "+mas[7]+"\n 9)  "+mas[8]+"\n 10) "+mas[9]);
}
function renderBox() {
	for (var i=0; i < 4; i++) {
		var k=getRandom(0, 24);
		var boxLight=box[k];
		on(boxLight)
		//boxLight.style.cursor='pointer'
	}
}
function getRandom(min, max) {
	return Math.floor(Math.random()*(max-min)+min)
}
