/*
	This method is called when the 'generate' button is pressed.
	It gets the height value from the input field,
	then it finds the place that the pyramid will be generated (at element with id="pyramid"),
	finally with these information, the pyramid with the desired height will be generate.
*/
function generate(){
	var height = document.getElementById("input").value;	//Store the value from id="input" into "height"
	var elPyramid = document.getElementById("pyramid");		//Find the element id="pyramid" and name it elPyramid

	elPyramid.innerHTML = '';		//Clear any text in elPyramid, because there might be some pyramid generate from previous session

	for (var i = 0; i < height; i++) {		//The height for-loop, what every layer should do repeatly

		//elPyramid.innerHTML += i+1;		//Display the number label for the current layer, for debugging (optional)

		for (var j = 0; j < 2*i+1; j++)			//The layer for-loop, what this layer should do repeatly
			elPyramid.innerHTML += '*';			//Adding '*' to the already existing text

		elPyramid.innerHTML += '<br>';		//Jump to the next line
	}
}

document.getElementById("generate").addEventListener("click", generate);	//Makes the "generate" button listen for "click", and do the "generate()" function when "click"
