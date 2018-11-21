let massiv = ["answer2", "answer3", "answer4", "answer1", "answer1", "answer2", "answer4", "answer3", "answer1", "answer3", "answer2", "answer4"];
let n = 0;
let result = [];

function next(i) {	
	document.getElementById("question").innerHTML = arr[i].title + "<br>";
	document.getElementById("answer1").innerHTML = arr[i].answer1 + "<br>";
	document.getElementById("answer2").innerHTML = arr[i].answer2 + "<br>";
	document.getElementById("answer3").innerHTML = arr[i].answer3 + "<br>";
	document.getElementById("answer4").innerHTML = arr[i].answer4 + "<br>";
}

function nextQ() {
    if($('.green').length===1) {
		let answer = document.querySelector(".green").getAttribute("id");
		result.push(answer);
		$('.block').removeClass('green');
		$('.block').removeClass('q');
		let btn = document.getElementById('next'); 
    	btn.style.visibility = "hidden";
	}
	next(n);
	n++;
	if(n==13) {
		let btn = document.getElementById('next'); 
       	let btn1 = document.getElementById('result'); 
       	btn.style.visibility = "hidden";
       	btn1.style.visibility = "visible";
       	$('.block').addClass('q');
    }
}

function viktory() {
	let res = 0;
	let err = [];
	for(let i = 0; i < 12; ++i){
		console.log(result[i]);
		if (result[i] === massiv[i]) {
			res++;
		}
		else {
			err.push(++i); 
			--i;
		} 
	}
	document.getElementById("res").innerHTML = res;   
	document.getElementById("wres").innerHTML = res;       
	let nores = 12 - res;
	document.getElementById("nores").innerHTML = nores;
	document.getElementById("arr").innerHTML = err; 
}

$(function(){
	nextQ();
	document.body.onclick = function(e){
		let el = e ? e.target:event.srcElement;
		let cls = el.className;
		let btn = document.getElementById('next');
		if(!~cls.indexOf("block")) return;
		if(~cls.indexOf("green")) {
			el.className = "block";
			if($('.green').length===1) {
				btn.style.visibility = "visible";
			}
			else {
				btn.style.visibility = "hidden";
			}
		} 
		else {
			el.className = "block green";
			if($('.green').length===1) {
				btn.style.visibility = "visible";
				document.getElementById("r").innerHTML += 
				n + ") " + arr[n-1].title + " - " + document.querySelector(".green").innerHTML + "<b>";
				$('.block').addClass('q');
			}
			else btn.style.visibility = "hidden";
		}		
	}
});
