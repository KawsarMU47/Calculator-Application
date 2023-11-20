let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}
