// Get reference to output area
let output = document.getElementById("output");

// Prompt user for inputs
let serviceAmount = prompt("Enter the service amount (between $5.00 and $500.00):");
let serviceQuality = prompt("Enter service quality (great, ok, or poor):");

// Convert service amount to number
serviceAmount = Number(serviceAmount);

// ------------------------------
// Function to validate service quality
// ------------------------------
function validateQuality(quality) {
    quality = quality.toLowerCase();
    return quality === "great" || quality === "ok" || quality === "poor";
}

// ------------------------------
// Function to validate service amount
// ------------------------------
function validateAmount(amount) {
    return amount >= 5 && amount <= 500;
}

// ------------------------------
// Function to calculate tip
// ------------------------------
function calculateTip(amount, quality) {
    quality = quality.toLowerCase();

    let tipRate;

    if (quality === "great") {
        tipRate = 0.20;
    } else if (quality === "ok") {
        tipRate = 0.15;
    } else {
        tipRate = 0.10;
    }

    return amount * tipRate;
}

// ------------------------------
// Validation checks
// ------------------------------
if (!validateQuality(serviceQuality)) {
    output.innerHTML = "Invalid service quality entered. Please refresh and try again.";
} else if (!validateAmount(serviceAmount)) {
    output.innerHTML = "Invalid service amount entered. Please refresh and try again.";
} else {

    let tipAmount = calculateTip(serviceAmount, serviceQuality);

    output.innerHTML =
        "For a service amount of $" + serviceAmount.toFixed(2) +
        " with " + serviceQuality.toLowerCase() +
        " service, the recommended tip is $" + tipAmount.toFixed(2) + ".";
}