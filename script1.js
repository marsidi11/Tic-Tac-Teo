// Points
var pointo = 0;
var pointx = 0;
var xtrue;

// Function for shuffle

function shuffle(arr) {
	for (var i = arr.length - 1; i > 0; i--) {
		var m = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[m]] = [arr[m], arr[i]];
	}
}

// Shuffle number for "check()"

var numbs = [1,2,3,4,5,6,7,8,9]
shuffle(numbs)



// Function Win "O"

function wino() {
	var bs1 = document.getElementById("img1").src;
	var bs2 = document.getElementById("img2").src;
	var bs3 = document.getElementById("img3").src;
	var bs4 = document.getElementById("img4").src;
	var bs5 = document.getElementById("img5").src;
	var bs6 = document.getElementById("img6").src;
	var bs7 = document.getElementById("img7").src;
	var bs8 = document.getElementById("img8").src;
	var bs9 = document.getElementById("img9").src;
	var m = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs";

	if ((bs1 == bs2) && (bs1 == bs3) && (bs1 !== m) && (bs2 !== m) && (bs3 !== m)) {
		winplayero();
	} 
	if ((bs4 == bs5) && (bs4 == bs6) && (bs4 !== m) && (bs5 !== m) && (bs6 !== m)) {
		winplayero();
	} 
	if ((bs7 == bs8) && (bs7 == bs9) && (bs7 !== m) && (bs8 !== m) && (bs9 !== m)) {
		winplayero();
	} 
	if ((bs1 == bs4) && (bs1 == bs7) && (bs1 !== m) && (bs4 !== m) && (bs7 !== m)) {
		winplayero();
	} 
	if ((bs2 == bs5) && (bs2 == bs8) && (bs2 !== m) && (bs5 !== m) && (bs8 !== m)) {
		winplayero();
	} 
	if ((bs3 == bs6) && (bs3 == bs9) && (bs3 !== m) && (bs6 !== m) && (bs9 !== m)) {
		winplayero();
	} 
	if ((bs1 == bs5) && (bs1 == bs9) && (bs1 !== m) && (bs5 !== m) && (bs9 !== m)) {
		winplayero();
	} 
	if ((bs3 == bs5) && (bs3 == bs7) && (bs3 !== m) && (bs5 !== m) && (bs7 !== m)) {
		winplayero();
	}
}

// Check If "X" Won

function winx() {

	var bs1 = document.getElementById("img1").src;
	var bs2 = document.getElementById("img2").src;
	var bs3 = document.getElementById("img3").src;
	var bs4 = document.getElementById("img4").src;
	var bs5 = document.getElementById("img5").src;
	var bs6 = document.getElementById("img6").src;
	var bs7 = document.getElementById("img7").src;
	var bs8 = document.getElementById("img8").src;
	var bs9 = document.getElementById("img9").src;
	var m = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs";


	if ((bs1 == bs2) && (bs1 == bs3) && (bs1 !== m) && (bs2 !== m) && (bs3 !== m)) {
		winplayerx();
	} 
	if ((bs4 == bs5) && (bs4 == bs6) && (bs4 !== m) && (bs5 !== m) && (bs6 !== 	m)) {
		winplayerx();
	} 
	if ((bs7 == bs8) && (bs7 == bs9) && (bs7 !== m) && (bs8 !== m) && (bs9 !== 	m)) {
		winplayerx();
	} 
	if ((bs1 == bs4) && (bs1 == bs7) && (bs1 !== m) && (bs4 !== m) && (bs7 !== 	m)) {
		winplayerx();
	} 
	if ((bs2 == bs5) && (bs2 == bs8) && (bs2 !== m) && (bs5 !== m) && (bs8 !== 	m)) {
		winplayerx();
	} 
	if ((bs3 == bs6) && (bs3 == bs9) && (bs3 !== m) && (bs6 !== m) && (bs9 !== 	m)) {
		winplayerx();
	} 
	if ((bs1 == bs5) && (bs1 == bs9) && (bs1 !== m) && (bs5 !== m) && (bs9 !== 	m)) {
		winplayerx();
	} 
	if ((bs3 == bs5) && (bs3 == bs7) && (bs3 !== m) && (bs5 !== m) && (bs7 !== 	m)) {
		winplayerx();
	}
	
	
}

// Check If "Draw"

function windraw() {
	var bs1 = document.getElementById("img1").src;
	var bs2 = document.getElementById("img2").src;
	var bs3 = document.getElementById("img3").src;
	var bs4 = document.getElementById("img4").src;
	var bs5 = document.getElementById("img5").src;
	var bs6 = document.getElementById("img6").src;
	var bs7 = document.getElementById("img7").src;
	var bs8 = document.getElementById("img8").src;
	var bs9 = document.getElementById("img9").src;
	var m = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs";

	if ((bs1 !== m) && (bs2 !== m) && (bs3 !== m) && (bs4 !== m) && (bs5 !== m) && (bs6 !== m) && (bs7 !== m) && (bs8 !== m) && (bs9 !== m)) {
		draw();
	}
}


// Win O, Win X and Draw Style

function winplayero() {
	xtrue = false;
	document.getElementById("popup").style.visibility = "visible";
	document.getElementById("o-won").style.visibility = "visible";
	document.getElementById("tic").style.opacity = ".1";
	pointo += 1; 
	document.getElementById("playero").value = pointo;
}

function winplayerx() {
	if (xtrue == true) {
		document.getElementById("popup").style.visibility = "visible";
		document.getElementById("x-won").style.visibility = "visible";
		document.getElementById("tic").style.opacity = ".1";
		pointx += 1;
		document.getElementById("playerx").value = pointx;
	}
		
}

function draw() {
	document.getElementById("popup").style.visibility = "visible";
	document.getElementById("draw").style.visibility = "visible";
	document.getElementById("tic").style.opacity = ".1";
}

// Play Again

function playa() {
	xtrue = true;
	document.getElementById("popup").style.visibility = "hidden";
	document.getElementById("o-won").style.visibility = "hidden";
	document.getElementById("x-won").style.visibility = "hidden";
	document.getElementById("draw").style.visibility = "hidden";
	document.getElementById("tic").style.opacity = "1";

	// Set X/Y images to hidden

	document.getElementById('img1').src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs";

	document.getElementById('img2').src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs";

	document.getElementById('img3').src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs";

	document.getElementById('img4').src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs";

	document.getElementById('img5').src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs";

	document.getElementById('img6').src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs";

	document.getElementById('img7').src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs";

	document.getElementById('img8').src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs";

	document.getElementById('img9').src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs";
	

	// Shuffle Numbers Againg

	shuffle(numbs)
}

// Shuffled numbers

var r1 = numbs[0];
var r2 = numbs[1];
var r3 = numbs[2];
var r4 = numbs[3];
var r5 = numbs[4];
var r6 = numbs[5];
var r7 = numbs[6];
var r8 = numbs[7];
var r9 = numbs[8];

console.log(r1)

// Computer Turn

function computer() {

	if (document.getElementById('img' + r1).src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setTimeout(check1, 200)
	}
	else if (document.getElementById('img' + r2).src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setTimeout(check2, 200)
	}
	else if (document.getElementById('img' + r3).src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setTimeout(check3, 200)
	}
	else if (document.getElementById('img' + r4).src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setTimeout(check4, 200)
	}
	else if (document.getElementById('img' + r5).src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setTimeout(check5, 200)
	}
	else if (document.getElementById('img' + r6).src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setTimeout(check6, 200)
	}
	else if (document.getElementById('img' + r7).src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setTimeout(check7, 200)
	}
	else if (document.getElementById('img' + r8).src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setTimeout(check8, 200)
	}
	else if (document.getElementById('img' + r9).src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setTimeout(check9, 200)
	}
}

// Computer Check

function check1() {
	document.getElementById('img' + r1).src = "img/xicon.svg";
	winx();
}
function check2() {
	document.getElementById('img' + r2).src = "img/xicon.svg";
	winx();
}
function check3() {
	document.getElementById('img' + r3).src = "img/xicon.svg";
	winx();
}
function check4() {
	document.getElementById('img' + r4).src = "img/xicon.svg";
	winx();
}
function check5() {
	document.getElementById('img' + r5).src = "img/xicon.svg";
	winx();
}
function check6() {
	document.getElementById('img' + r6).src = "img/xicon.svg";
	winx();
}
function check7() {
	document.getElementById('img' + r7).src = "img/xicon.svg";
	winx();
}
function check8() {
	document.getElementById('img' + r8).src = "img/xicon.svg";
	winx();
}
function check9() {
	document.getElementById('img' + r9).src = "img/xicon.svg";
	winx();
}


// Table Button Click

function po1() {
	document.getElementById('img1').src = "img/oicon.svg";
	computer();
	wino();
	windraw();
}
function po2() {
	document.getElementById('img2').src = "img/oicon.svg";
	computer();
	wino();
	windraw();
}
function po3() {
	document.getElementById('img3').src = "img/oicon.svg";
	computer();
	wino();
	windraw();
}
function po4() {
	document.getElementById('img4').src = "img/oicon.svg";
	computer();
	wino();
	windraw();
}
function po5() {
	document.getElementById('img5').src = "img/oicon.svg";
	computer();
	wino();
	windraw();
}
function po6() {
	document.getElementById('img6').src = "img/oicon.svg";
	computer();
	wino();
	windraw();
}
function po7() {
	document.getElementById('img7').src = "img/oicon.svg";
	computer();
	wino();
	windraw();
}
function po8() {
	document.getElementById('img8').src = "img/oicon.svg";
	computer();
	wino();
	windraw();
}
function po9() {
	document.getElementById('img9').src = "img/oicon.svg";
	computer();
	wino();
	windraw();
}


// Try

/*function funs1() {
	console.log("Hello 1")
}

function funs2() {
	console.log("Hello 2")
}

var arr = [funs1, funs2]

var thef = arr[0]()*/
