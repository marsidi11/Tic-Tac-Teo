var o = 5;
// var bs1 = document.getElementById("img1").src;
// var bs2 = document.getElementById("img2").src;
// var bs3 = document.getElementById("img3").src;
// var bs4 = document.getElementById("img4").src;
// var bs5 = document.getElementById("img5").src;
// var bs6 = document.getElementById("img6").src;
// var bs7 = document.getElementById("img7").src;
// var bs8 = document.getElementById("img8").src;
// var bs9 = document.getElementById("img9").src;
// var mo = "img/oicon.svg";
// var mx = "img/xicon.svg";
// var m = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs";

function winoon() {
	

	// CHECK IF "X" WON
	
}

// ON Change

function oc1() {
	if ((document.getElementById("img1").src == "img/oicon.svg") && (document.getElementById("img2").src == "img/oicon.svg") && (document.getElementById("img3").src == "img/oicon.svg")) {
		alert("Hello World")
	}
}

function oc2() {
	if ((document.getElementById("img1").src == "img/oicon.svg") && (document.getElementById("img2").src == "img/oicon.svg") && (document.getElementById("img3").src == "img/oicon.svg")) {
		alert("Hello World")
	}
}
function oc3() {
	if ((document.getElementById("img1").src == "img/oicon.svg") && (document.getElementById("img2").src == "img/oicon.svg") && (document.getElementById("img3").src == "img/oicon.svg")) {
		alert("Hello World")
	}
}
// Win O, Win X and Draw Function

function winplayero() {
	document.getElementById("popup").style.visibility = "visible";
	document.getElementById("o-won").style.visibility = "visible";
	document.getElementById("tic").style.opacity = ".1";
}

function winplayerx() {
	document.getElementById("popup").style.visibility = "visible";
	document.getElementById("x-won").style.visibility = "visible";
	document.getElementById("tic").style.opacity = ".1";
}

function draw() {
	document.getElementById("popup").style.visibility = "visible";
	document.getElementById("draw").style.visibility = "visible";
	document.getElementById("tic").style.opacity = ".1";
}

// Play Again

function playa() {
	document.getElementById("popup").style.visibility = "hidden";
	document.getElementById("o-won").style.visibility = "hidden";
	document.getElementById("x-won").style.visibility = "hidden";
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
}

// Check X or Y

function checkpo1() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img1").src = "img/oicon.svg";
	} else {
		document.getElementById("img1").src = "img/xicon.svg";
	}
}
function checkpo2() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img2").src = "img/oicon.svg";
	} else {
		document.getElementById("img2").src = "img/xicon.svg";
	}
}
function checkpo3() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img3").src = "img/oicon.svg";
	} else {
		document.getElementById("img3").src = "img/xicon.svg";
	}
}
function checkpo4() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img4").src = "img/oicon.svg";
	} else {
		document.getElementById("img4").src = "img/xicon.svg";
	}
}
function checkpo5() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img5").src = "img/oicon.svg";
	} else {
		document.getElementById("img5").src = "img/xicon.svg";
	}
}
function checkpo6() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img6").src = "img/oicon.svg";
	} else {
		document.getElementById("img6").src = "img/xicon.svg";
	}
}
function checkpo7() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img7").src = "img/oicon.svg";
	} else {
		document.getElementById("img7").src = "img/xicon.svg";
	}
}
function checkpo8() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img8").src = "img/oicon.svg";
	} else {
		document.getElementById("img8").src = "img/xicon.svg";
	}
}
function checkpo9() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img9").src = "img/oicon.svg";
	} else {
		document.getElementById("img9").src = "img/xicon.svg";
	}
}


// Click Button

function po1() {
	checkpo1();
	winoon();
	oc1();
}
function po2() {
	checkpo2();
	winoon();
	oc2();
}
function po3() {
	checkpo3();
	winoon();
	oc3();
}
function po4() {
	checkpo4();
	winoon();
}
function po5() {
	checkpo5();
	winoon();
}
function po6() {
	checkpo6();
	winoon();
}
function po7() {
	checkpo7();
	winoon();
}
function po8() {
	checkpo8();
	winoon();
}
function po9() {
	checkpo9();
	winoon();
}