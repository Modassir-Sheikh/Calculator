let display = document.getElementById("display");
let historyList = document.getElementById("historyList");
let themeSwitch = document.getElementById("themeSwitch");

// Core calculator functions
function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    addToHistory(display.value + " = " + result);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

// History log
function addToHistory(entry) {
  let li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}

// Keyboard input support
document.addEventListener("keydown", function (e) {
  if ((e.key >= 0 && e.key <= 9) || "+-*/.()".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});

// Theme toggle
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("light");
});
