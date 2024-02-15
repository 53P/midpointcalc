document.getElementById("calculateBtn").addEventListener("click", calculateArea);

function calculateArea() {
  // INPUT
  const x1 = +document.getElementById('x1').value;
  const y1 = +document.getElementById('y1').value;
  const x2 = +document.getElementById('x2').value;
  const y2 = +document.getElementById('y2').value;

  // PROCESS
  // The midpoint x-coordinate
  const x = (x1 + x2) / 2;
  // The midpoint y-coordinate
  const y = (y1 + y2) / 2;

  // OUTPUT
  document.getElementById('output').innerHTML = `(${x}, ${y})`;
}