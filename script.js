function winon() {
	var bs1 = document.getElementById('img1').src;
	var bs2 = document.getElementById('img2').src;
	var bs3 = document.getElementById('img3').src;
	var bs4 = document.getElementById('img4').src;
	var bs5 = document.getElementById('img5').src;
	var bs6 = document.getElementById('img6').src;
	var bs7 = document.getElementById('img7').src;
	var bs8 = document.getElementById('img8').src;
	var bs9 = document.getElementById('img9').src;
	var mo = "img/oicon.svg";
	var mx = "img/xicon.svg";

	
}

function computer() {

	if (document.getElementById('img7').src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setInterval(check7, 500) 
	}
	else if (document.getElementById('img2').src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setInterval(check2, 500)
	}
	else if (document.getElementById('img5').src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setInterval(check5, 500)
	}
	else if (document.getElementById('img8').src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setInterval(check8, 500)
	}
	else if (document.getElementById('img9').src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setInterval(check9, 500)
	}
	else if (document.getElementById('img1').src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setInterval(check1, 500)
	}
	else if (document.getElementById('img4').src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setInterval(check4, 500)
	}
	else if (document.getElementById('img3').src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setInterval(check3, 500)
	}
	else if (document.getElementById('img6').src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs") {
		setInterval(check6, 500)
	}
}

function po1() {
	document.getElementById('img1').src = "img/oicon.svg";
	computer();
	winon();
}
function po2() {
	document.getElementById('img2').src = "img/oicon.svg";
	computer();
	winon();
}
function po3() {
	document.getElementById('img3').src = "img/oicon.svg";
	computer();
	winon();
}
function po4() {
	document.getElementById('img4').src = "img/oicon.svg";
	computer();
	winon();
}
function po5() {
	document.getElementById('img5').src = "img/oicon.svg";
	computer();
}
function po6() {
	document.getElementById('img6').src = "img/oicon.svg";
	computer();
	winon();
}
function po7() {
	document.getElementById('img7').src = "img/oicon.svg";
	computer();
	winon();
}
function po8() {
	document.getElementById('img8').src = "img/oicon.svg";
	computer();
	winon();
}
function po9() {
	document.getElementById('img9').src = "img/oicon.svg";
	computer();
	winon();
}




function check1() {
	document.getElementById('img1').src = "img/xicon.svg";
}
function check2() {
	document.getElementById('img2').src = "img/xicon.svg";
}
function check3() {
	document.getElementById('img3').src = "img/xicon.svg";
}
function check4() {
	document.getElementById('img4').src = "img/xicon.svg";
}
function check5() {
	document.getElementById('img5').src = "img/xicon.svg";
}
function check6() {
	document.getElementById('img6').src = "img/xicon.svg";
}
function check7() {
	document.getElementById('img7').src = "img/xicon.svg";
}
function check8() {
	document.getElementById('img8').src = "img/xicon.svg";
}
function check9() {
	document.getElementById('img9').src = "img/xicon.svg";
}

