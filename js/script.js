function convertToCelsius() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitOutput = document.getElementById("fahrenheit");
    const calculationOutput = document.getElementById("calculation");

    let celsius = parseFloat(celsiusInput.value);

    if (isNaN(celsius)) {
        fahrenheitOutput.value = "";
        calculationOutput.value = "Masukkan nilai yang valid.";
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;
    fahrenheitOutput.value = fahrenheit.toFixed(2);
    calculationOutput.value = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function convertFahrenheitToCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusOutput = document.getElementById("celsius");
    const calculationOutput = document.getElementById("calculation");

    let fahrenheit = parseFloat(fahrenheitInput.value);

    if (isNaN(fahrenheit)) {
        celsiusOutput.value = "";
        calculationOutput.value = "Masukkan nilai yang valid.";
        return;
    }

    let celsius = (fahrenheit - 32) * 5/9;
    celsiusOutput.value = celsius.toFixed(2);
    calculationOutput.value = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
}

function resetForm() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("calculation").value = "";
}

function reverseConversion() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitOutput = document.getElementById("fahrenheit");
    const calculationOutput = document.getElementById("calculation");

    let fahrenheit = parseFloat(fahrenheitOutput.value);

    if (isNaN(fahrenheit)) {
        celsiusInput.value = "";
        calculationOutput.value = "Masukkan nilai yang valid.";
        return;
    }

    let celsius = (fahrenheit - 32) * 5/9;
    celsiusInput.value = celsius.toFixed(2);
    calculationOutput.value = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
}
