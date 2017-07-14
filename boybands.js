console.log("test");

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = bands.length;
console.log("loopCount", loopCount)

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");
console.log("bandElement", bandElement);

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");
console.log("veggieElement", veggieElement);

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  
  // Add the band names into the correct <div>
  currentBand = bands[loopTracker];
  console.log("currentBand", currentBand);
  let bandPara = `<p>${currentBand}</p>`;
  bandElement.innerHTML += bandPara;

  
  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[loopTracker];
  console.log("currentVeggie", currentVeggie);
  let veggiePara = `<p>${currentVeggie}</p>`;
  veggieElement.innerHTML += veggiePara;
}