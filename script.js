// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
    display.style.fontSize = "5rem"; // reset size for numbers
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const expr = display.value.replace(/\s/g, "");

        if (expr === "67+41") {
            display.value = "67diddybludmangocalc";
            display.style.fontSize = "2.2rem"; // 👈 smaller text
        } else {
            display.value = eval(expr);
        }
    } catch (error) {
        display.value = "ERROR😡";
        display.style.fontSize = "2.5rem";
    }
}
