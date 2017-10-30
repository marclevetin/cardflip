function flipCard() {
  let thisDiv = document.getElementById('card')

  if (thisDiv.className === "") {
    thisDiv.className = "flipped";
  } else {
    thisDiv.className = "";
  }
}

function flipToDetails() {
  let thisDiv = document.getElementById('card')
  thisDiv.className = "flipped";
}

function flipToCover() {
  let thisDiv = document.getElementById('card')
  thisDiv.className = "";
}
