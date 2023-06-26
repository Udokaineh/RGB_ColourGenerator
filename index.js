let button = document.getElementById("button");
let firstBox = document.getElementById("firstBox");
let firstRgbCode = document.getElementById("firstRgbCode");
let secondBox = document.getElementById("secondBox");
let secondRgbCode = document.getElementById("secondRgbCode");
let thirdBox = document.getElementById("thirdBox");
let thirdRgbCode = document.getElementById("thirdRgbCode");


// Function to check if a color is dark

function isDarkColor(color) {
    let match = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    let r = parseInt(match[1])
    let g = parseInt(match[2])
    let b = parseInt(match[3])
    let brightness = (r * 299 + g * 587 + b * 114) / 1000;
    if(brightness < 128){
        return true
    }else false
  }
 
//   function to copy the RGBcolor code
// add an event listener on the text you want to copy
  firstRgbCode.addEventListener("click", function () {
    // then create range
    const range = document.createRange()
    // sellect the text to be copied
    range.selectNode(firstRgbCode)
    // code to remove default existing text copied previously
    window.getSelection().removeAllRanges()
    // code to copy new text
    window.getSelection().addRange(range)

    // copy text to clipboard
    document.execCommand("copy")

    // deselect the text again
    window.getSelection().removeAllRanges()
  })

  secondRgbCode.addEventListener("click", function(){
    const range = document.createRange()
    range.selectNode(secondRgbCode)
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
  })

  thirdRgbCode.addEventListener("click", function(){
    let range = document.createRange()
    range.selectNode(thirdRgbCode)
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
  })
  
//   threshold = 128
//   let brightne = (252 * 299 + 240 * 587 + 29 * 114) / 1000;
//   console.log(brightne)
//   let x = (brightne < threshold)
//   console.log (x)

button.addEventListener("click", function () {
  // function to generate RGB color for the first box
  const firstRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // function to generate RGB color for the second box
  const secondRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // function to generate RGB color for the third  box
  const thirdRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // I activated each functions here and stored it in a variable
  let firstRgbColor = firstRandomColor();
  let secondRgbColor = secondRandomColor();
  let thirdRgbColor = thirdRandomColor();


  firstBox.style.backgroundColor = firstRgbColor;
  firstRgbCode.innerText = firstRgbColor;

  secondBox.style.backgroundColor = secondRgbColor;
  secondRgbCode.innerText = secondRgbColor;

  thirdBox.style.backgroundColor = thirdRgbColor;
  thirdRgbCode.innerText = thirdRgbColor;


  // Check if the box colours is dark and update the text color
  if (isDarkColor(firstRgbColor)) {
    firstRgbCode.style.color = "white";
  } else {
    firstRgbCode.style.color = "black";
  }

  if (isDarkColor(secondRgbColor)) {
    secondRgbCode.style.color = "white";
  } else {
    firstRgbCode.style.color = "black";
  }
  
  if (isDarkColor(thirdRgbColor)) {
    thirdRgbCode.style.color = "white";
  } else {
    thirdRgbCode.style.color = "black";
  }
});
