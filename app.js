function flipCard() {
  let thisDiv = document.getElementById('card')

  if (thisDiv.className === "") {
    thisDiv.className = "flipped";
  } else {
    thisDiv.className = "";
  }
}
