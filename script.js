var canvas;
// var img = new Image();
// img.src='volume-of-surface-mine.jpg';


function wypisz() {
	
	canvas = document.getElementById('volCanvas');
	canvasContext = canvas.getContext('2d');
	
	drawEverything();

	// canvasContext.drawImage(img,0,0);
	
	//Funkcja zaokraglajaca liczby
	function Round(zmienna, k) {
		var wskaznik = Math.pow(10, k+1);
		zmienna = Math.round(Math.round(zmienna*wskaznik)/10);
		return zmienna/(wskaznik/10);
	}
	
	var P4 = Number(document.getElementById("P4").value);
	var N6 = Number(document.getElementById("N6").value);
	var N7 = Number(document.getElementById("N7").value);
	var N9 = Number(document.getElementById("N9").value);
	var N10 = Number(document.getElementById("N10").value);
			
	var WWC;
	var WydZmian;
	var WydGodz;

	//Wskaźnik wykorzystania czasu pracy - WWC
	WWC = (N10-N9) / N10;
			
	WydZmian = P4 / (N6*N7*Round(WWC, 1));
			
	WydGodz = WydZmian / N10;
			
	document.getElementById('WydZmian').innerHTML = "Wydobycie zmianowe : " + Round(WydZmian, 2) + " [Mg/zmiana]";
	document.getElementById('WydGodz').innerHTML = "Wydobycie godzinowe : " + Round(WydGodz, 2) + " [Mg/h]";
}

function drawEverything() {
	// blanks out the screen with white
	colorRect(0, 0, canvas.width, canvas.height, 'white');
}

function colorRect(leftX, topY, width, height, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height);
}