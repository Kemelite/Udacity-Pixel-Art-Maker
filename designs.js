// Select color input


// Select size input
const siz = document.getElementbyId('pixelCanvas');
let fakh = $("#inputHeight");
let fakw = $("#inputWidth");


// When size is submitted by the user, call makeGrid()
$('#submit').click(function(e) {
	e.preventDefault();
	makeGrid();
});

let color = $("#colorPicker"); 


function makeGrid() {

	siz.innerHTML = '';
	let height = fakh.val();
	let width = fahw.val();


	let addEvent = function(box) {
		box.addEventListener('click', function() {
			box.style.backgroundColor = color.val();
		});
	}

for (let j = 0; j < height; j++) {
	let row = siz.insertRow(j);
	for (let m = 0; m < width; m++) {
		let box = row.insertBox(m);
	box.addEventListener('click', addEvent(box));
	 }
  }
// Your code goes here!
}
