// a variable for serial number
let sn = 0;

// triangle
document.getElementById("triangle-btn").addEventListener("click", function (input) {
    // getting the all data using function from html
    let values = getAllValues(input);
    const name = values.name;
    const base = values.input1;
    const hight = values.input2;
    //   calculating the area 
    const area = 0.5 * base * hight;
    //   passing the value to the function
    displayValue(name, area);
});
// rectangle
document.getElementById("rectangle-btn").addEventListener("click", function (input) {
    // getting the all data using function from html
    let values = getAllValues(input);
    const name = values.name;
    const width = values.input1;
    const length = values.input2;
    //   calculating the area 
    const area = width * length;
    //   passing the value to the function
    displayValue(name, area);
});
// parallelogram 
document.getElementById("parallelogram-btn").addEventListener("click", function (input) {
    // getting the all data using function from html
    let values = getAllValues(input);
    const name = values.name;
    const base = values.input1;
    const hight = values.input2;
    //   calculating the area 
    const area = base * hight;
    //   passing the value to the function
    displayValue(name, area);
});

//   Rhombus
document.getElementById("rhombus-btn").addEventListener("click", function (input) {
    // getting the all data using function from html
    let values = getAllValues(input);
    const name = values.name;
    const d1 = values.input1;
    const d2 = values.input2;
    //   calculating the area 
    const area = 0.5 * d1 * d2;
    //   passing the value to the function
    displayValue(name, area);
});
//   Pentagon
document.getElementById("pentagon-btn").addEventListener("click", function (input) {
    // getting the all data using function from html
    let values = getAllValues(input);
    const name = values.name;
    const p = values.input1;
    const base = values.input2;
    //   calculating the area 
    const area = 0.5 * p * base;
    //   passing the value to the function
    displayValue(name, area);
});
//   Ellipse
document.getElementById("ellipse-btn").addEventListener("click", function (input) {
    // getting the all data using function from html
    let values = getAllValues(input);
    const name = values.name;
    const a = values.input1;
    const b = values.input2;
    //   calculating the area 
    const area = 3.14 * a * b;
    //   passing the value to the function
    displayValue(name, area);
});

// change color on hovering over cards 
// card- 1 
document.querySelector("#card1").addEventListener('mouseenter', function () {
    const div = document.querySelector("#card1");
    div.style.backgroundColor = getRandomColor();
})
// card - 2 
document.querySelector("#card2").addEventListener('mouseenter', function () {
    const div = document.querySelector("#card2");
    div.style.backgroundColor = getRandomColor();
})
// card - 3 
document.querySelector("#card3").addEventListener('mouseenter', function () {
    const div = document.querySelector("#card3");
    div.style.backgroundColor = getRandomColor();
})
// card - 4 
document.querySelector("#card4").addEventListener('mouseenter', function () {
    const div = document.querySelector("#card4");
    div.style.backgroundColor = getRandomColor();
})
// card - 5 
document.querySelector("#card5").addEventListener('mouseenter', function () {
    const div = document.querySelector("#card5");
    div.style.backgroundColor = getRandomColor();
})
// card - 6 
document.querySelector("#card6").addEventListener('mouseenter', function () {
    const div = document.querySelector("#card6");
    div.style.backgroundColor = getRandomColor();
})

// common function

//function to display the area and name
function displayValue(name, area) {
    // serial number 
    sn = sn + 1;
    const container = document.getElementById("data");
    const div = document.createElement("div");
    // update the html 
    div.innerHTML = `
      <div class="flex justify-between pt-3">
          <p class="pt-1 text-sm"><span>${sn}</span><span>.</span> <span>${name}</span></p>
          <p><span class="pl-1">${parseFloat(area).toFixed(2)}</span>cm<sup>2</sup></p>
          <button class="bg-sky-600 hover:bg-sky-700 font-normal text-white py-1 px-1 rounded-md sm">Covert to m<sup>2</sup></button>
      </div>
      `;
    container.appendChild(div);
}
// to get the number from input filed and check validation function
function getAllValues(input) {
    // get data from html 
    const name = (input.target.parentNode.children[1].innerText);
    const input1 = Number((input.target.parentNode.children[3].value));
    const input2 = Number((input.target.parentNode.children[5].value));
    console.log(input1, input2, name)
    // checking the data
    if (isNaN(input1) || isNaN(input2)) {
        alert("Please input number.");
    }
    else if (input1 <= 0 || input2 <= 0) {
        alert("Please input positive number.");
    }
    else {
        return { name, input1, input2 };
    }
}
//   Random Color generators function
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


