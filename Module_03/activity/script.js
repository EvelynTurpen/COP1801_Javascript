// Get reference to output area
let output = document.getElementById("output");


// -----------------------------
// 1. FOR LOOP (0 to 10)
// -----------------------------

output.innerHTML += "<h3>For Loop (Odd or Even)</h3>";

for (let i = 0; i <= 10; i++) {

    if (i % 2 === 0) {
        output.innerHTML += "Count " + i + " is even<br>";
    } else {
        output.innerHTML += "Count " + i + " is odd<br>";
    }
}


// -----------------------------
// 2. DO WHILE LOOP
// -----------------------------

output.innerHTML += "<h3>Do While Loop</h3>";

let myNum = prompt("Enter a number between 5 and 20:");
myNum = Number(myNum);

let counter = 1;

do {
    output.innerHTML += "Counter is: " + counter + "<br>";
    counter++;
} while (counter <= myNum);


// -----------------------------
// 3. ARRAY AND FOREACH
// -----------------------------

output.innerHTML += "<h3>Array Display</h3>";

let subjects = [
    "Accounting",
    "Algebra",
    "Programming",
    "Art",
    "Data Analytics"
];

// Display using foreach
subjects.forEach(function(subject) {
    output.innerHTML += subject + "<br>";
});

// Display comma separated (single statement)
output.innerHTML += "<br>Comma Separated: " + subjects.join(", ");