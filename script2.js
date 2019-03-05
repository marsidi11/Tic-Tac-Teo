var o = 5;

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
		if ((bs4 == bs5) && (bs4 == bs6) && (bs4 !== m) && (bs5 !== m) && (bs6 !== m)) {
			winplayerx();
		} 
		if ((bs7 == bs8) && (bs7 == bs9) && (bs7 !== m) && (bs8 !== m) && (bs9 !== m)) {
			winplayerx();
		} 
		if ((bs1 == bs4) && (bs1 == bs7) && (bs1 !== m) && (bs4 !== m) && (bs7 !== m)) {
			winplayerx();
		} 
		if ((bs2 == bs5) && (bs2 == bs8) && (bs2 !== m) && (bs5 !== m) && (bs8 !== m)) {
			winplayerx();
		} 
		if ((bs3 == bs6) && (bs3 == bs9) && (bs3 !== m) && (bs6 !== m) && (bs9 !== m)) {
			winplayerx();
		} 
		if ((bs1 == bs5) && (bs1 == bs9) && (bs1 !== m) && (bs5 !== m) && (bs9 !== m)) {
			winplayerx();
		} 
		if ((bs3 == bs5) && (bs3 == bs7) && (bs3 !== m) && (bs5 !== m) && (bs7 !== m)) {
			winplayerx();
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
		wino();
	} else {
		document.getElementById("img1").src = "img/xicon.svg";

	}
}
function checkpo2() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img2").src = "img/oicon.svg";
		wino();
	} else {
		document.getElementById("img2").src = "img/xicon.svg";
		winx();
	}
}
function checkpo3() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img3").src = "img/oicon.svg";
		wino();
	} else {
		document.getElementById("img3").src = "img/xicon.svg";
		winx();
	}
}
function checkpo4() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img4").src = "img/oicon.svg";
		wino();
	} else {
		document.getElementById("img4").src = "img/xicon.svg";
		winx();
	}
}
function checkpo5() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img5").src = "img/oicon.svg";
		wino();
	} else {
		document.getElementById("img5").src = "img/xicon.svg";
		winx();
	}
}
function checkpo6() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img6").src = "img/oicon.svg";
		wino();
	} else {
		document.getElementById("img6").src = "img/xicon.svg";
		winx();
	}
}
function checkpo7() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img7").src = "img/oicon.svg";
		wino();
	} else {
		document.getElementById("img7").src = "img/xicon.svg";
		winx();
	}
}
function checkpo8() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img8").src = "img/oicon.svg";
		wino();
	} else {
		document.getElementById("img8").src = "img/xicon.svg";
		winx();
	}
}
function checkpo9() {
	o += 1;
	if (o % 2 == 0) {
		document.getElementById("img9").src = "img/oicon.svg";
		wino();
	} else {
		document.getElementById("img9").src = "img/xicon.svg";
		winx();
	}
}


// Click Button

function po1() {
	checkpo1();
}
function po2() {
	checkpo2();
}
function po3() {
	checkpo3();
}
function po4() {
	checkpo4();
}
function po5() {
	checkpo5();
}
function po6() {
	checkpo6();
}
function po7() {
	checkpo7();
}
function po8() {
	checkpo8();
}
function po9() {
	checkpo9();
}