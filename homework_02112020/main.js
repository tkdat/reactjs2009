// Exercise 1
function count() {
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const result = document.getElementById("result");
  const sum = parseInt(a.value) + parseInt(b.value);
  if (!isNaN(sum)) {
    result.value = sum;
  }
}

// Exercise 2
function handleOwnMouseClick() {
  const currentEle = event.target
  const color = currentEle.style.background
  if (color === "green") currentEle.style.background = "red"
  else currentEle.style.background = "green"
}

// Exercise 3
function showData() {
  const theSelect = demoForm.demoSelect
  const firstP = document.getElementById('show')
  const secondP = document.getElementById('show');
  const thirdP = document.getElementById('show');
  document.getElementById('menu').style.display = "none";
  if (theSelect.selectedIndex == 1) {
    firstP.innerHTML = document.getElementById('laptop').innerHTML
  }
  else if (theSelect.selectedIndex == 2) {
    secondP.innerHTML = document.getElementById('dt').innerHTML
  }
  else thirdP.innerHTML = document.getElementById('tivi').innerHTML
}
