function calculateTriangleArea() {
    // get triangle base value
  const triangleBaseInput = document.getElementById("triangle-base");
  const traiangleBaseText = triangleBaseInput.value;
  const base = parseFloat(traiangleBaseText);

// get triangle height value 
const triangleHeighInput = document.getElementById('triangle-height').value;
const triangleHeighText = triangleHeighInput.value;
const height = parseFloat(triangleHeighText)

// calculate triangle area:
const area = 0.5 * base * height;
console.log('area of the triangle is:', area);
}