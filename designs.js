// Select color input
let color = $("#colorPicker"); 

// Select size input
const size = document.getElementbyId('pixelCanvas');
let fakh = $("#inputHeight");
let fakw = $("#inputWidth");


// When size is submitted by the user, call makeGrid()
$('#submit').click(function(e) {
	e.preventDefault();
	makeGrid();
});




function makeGrid() {

	size.innerHTML = '';
	let height = fakh.val();
	let width = fahw.val();


	let addEvent = function(cell) {
		cell.addEventListener('click', function() {
			cell.style.backgroundColor = color.val();
		});
	}

for (let j = 0; j < height; j++) {
	let row = size.insertRow(j);
	for (let m = 0; m < width; m++) {
		let cell = row.insertCell(m);
	cell.addEventListener('click', addEvent(cell));
	 }
  }
// Your code goes here!
}
