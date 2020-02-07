function adaptContent() {
    // size of device screen
    var xsize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var ysize = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // landscape
    if (xsize > ysize) {
        $('.team').css('margin-top', '5vh');
    } else {
        $('.team').css('margin-top', '20vh');

    }
}
document.querySelector(".co").addEventListener('click',function(){
	var circles=document.querySelectorAll('.circle');
	for(let i=0;i<circles.length;i++){
		circles[i].classList.toggle('blur');
	}
	document.querySelector('#content').classList.toggle('blur');
})


document.querySelector(".dir").addEventListener('click',function(){
	var circles=document.querySelectorAll('.circle');
	for(let i=0;i<circles.length;i++){
		circles[i].classList.toggle('blur');
	}
	document.querySelector('#director').classList.toggle('blur');
})

document.querySelector(".pat").addEventListener('click',function(){
	var circles=document.querySelectorAll('.circle');
	for(let i=0;i<circles.length;i++){
		circles[i].classList.toggle('blur');
	}
	document.querySelector('#patron').classList.toggle('blur');
})

document.querySelector(".con").addEventListener('click',function(){
	var circles=document.querySelectorAll('.circle');
	for(let i=0;i<circles.length;i++){
		circles[i].classList.toggle('blur');
	}
	document.querySelector('#convener1').classList.toggle('blur');
	document.querySelector('#convener2').classList.toggle('blur');

})

document.querySelector(".coor").addEventListener('click',function(){
	var circles=document.querySelectorAll('.circle');
	for(let i=0;i<circles.length;i++){
		circles[i].classList.toggle('blur');
	}
	document.querySelector('#coordinator').classList.toggle('blur');
})

document.querySelector(".market").addEventListener('click',function(){
	var circles=document.querySelectorAll('.circle');
	for(let i=0;i<circles.length;i++){
		circles[i].classList.toggle('blur');
	}
	document.querySelector('#marketing').classList.toggle('blur');
})

document.querySelector(".pr").addEventListener('click',function(){
	var circles=document.querySelectorAll('.circle');
	for(let i=0;i<circles.length;i++){
		circles[i].classList.toggle('blur');
	}
	document.querySelector('#pr').classList.toggle('blur');
})
document.querySelector(".ph").addEventListener('click',function(){
	var circles=document.querySelectorAll('.circle');
	for(let i=0;i<circles.length;i++){
		circles[i].classList.toggle('blur');
	}
	document.querySelector('#publicity1').classList.toggle('blur');
	document.querySelector('#publicity2').classList.toggle('blur');
})

document.querySelector(".design").addEventListener('click',function(){
	var circles=document.querySelectorAll('.circle');
	for(let i=0;i<circles.length;i++){
		circles[i].classList.toggle('blur');
	}
	document.querySelector('#design1').classList.toggle('blur');
	document.querySelector('#design2').classList.toggle('blur');
})
document.querySelector(".webteam").addEventListener('click',function(){
	var circles=document.querySelectorAll('.circle');
	for(let i=0;i<circles.length;i++){
		circles[i].classList.toggle('blur');
	}
	for(let i=1;i<15;i++)	
		document.querySelector('#web'+i).classList.toggle('blur');
})