let result = document.getElementById("result");
let history = document.getElementById("history");
let body = document.body;
let calculator = document.querySelector(".calculator");
let darkMode = true;


//append character to the display
function appendCharacter(char) {
    result.value += char;
}

//clear
function clearDisplay() {
    result.value = "";
    history.innerHTML = "";
}

//delete last character when needed
function deleteLast() {
    result.value = result.value.slice(0, -1);
}

//calculate the result and store in history
function calculateResult() {
    try {
        let expression = result.value;
        let answer = eval(expression);

        // Update history with only the expression
        history.innerHTML = `${expression} =`;

        // Show only the answer in the result field
        result.value = answer;
    } catch (error) {
        result.value = "Error";
    }
}


//Toggle function
function toggleTheme() {
    darkMode = !darkMode;
    if (darkMode) {
        body.classList.remove("light-mode");
        calculator.classList.remove("light-mode");
        document.querySelector(".theme-toggle").textContent = "🌙";
    } else {
        body.classList.add("light-mode");
        calculator.classList.add("light-mode");
        document.querySelector(".theme-toggle").textContent = "☀️";

    }
}

//keyboard support
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (/[0-9+\-*/%.]/.test(key)) {
        appendCharacter(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
