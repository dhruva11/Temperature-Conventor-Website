function clearFahrenheit() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('result').value = '';
}

function clearCelsius() {
    document.getElementById('celsius').value = '';
    document.getElementById('result').value = '';
}

function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('fahrenheit').value = '';
    document.getElementById('result').value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2) + " °F";
}

function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('celsius').value = '';
    document.getElementById('result').value = isNaN(celsius) ? '' : celsius.toFixed(2) + " °C";
}
