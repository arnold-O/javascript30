const inputBoxes = document.querySelectorAll('.input input[type="checkbox"]');
console.log(inputBoxes);

let lastChecked;
function handleClick(e) {
  console.log(e);
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    inputBoxes.forEach(item => {
      if (item === this || item === lastChecked) {
        inBetween = !inBetween;
      }
    });
  }
  lastChecked = this;
}

inputBoxes.forEach(item => item.addEventListener("click", handleClick));
