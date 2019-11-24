console.log('hello world');
const intro= document.querySelector('.intro');
const video= intro.querySelector('video');
const text= intro.querySelector('h1');
// end

const section=document.querySelector('section');
const end= section.querySelector('h2 ');

const controller= new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
	duration: 6000,
	triggerElement: intro,
	triggerHook: 0

}).addIndicators()
.setPin(intro)
.addTo(controller);

let accelmount= 0.6;
let scrollpos= 0;
let delay=0;


 scene.on("update",e=> {
 	scrollpos= e.scrollPos / 1000;
 });

 setInterval(()=>{
 	delay+= (scrollpos-delay)*accelmount;
 	video.currentTime= delay;
 	console.log(delay);

 },20);