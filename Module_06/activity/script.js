// Module 06 Assignment
// This script uses a constructor function to create multiple dog objects
// and allows the user to select a dog to view its information.

// --------------------------------------
// Constructor function
// --------------------------------------
function Dog(name, breed, show, role, mySound, canTalk) {
    this.name = name;
    this.breed = breed;
    this.show = show;
    this.role = role;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method to display greeting and whether the dog can talk
    this.myGreeting = function () {
        let talkMessage;

        if (this.canTalk) {
            talkMessage = "I can talk!";
        } else {
            talkMessage = "I cannot talk.";
        }

        return "Hello, my name is " + this.name + ". " +
               "When I speak, I say: " + this.mySound + ". " +
               "I starred in the television show " + this.show + ". " +
               "My character was a " + this.breed + ". " +
               "I was " + this.role + ". " +
               talkMessage;
    };
}

// --------------------------------------
// Create two dog objects
// --------------------------------------
let dog1 = new Dog(
    "Scooby-Doo",
    "Great Dane",
    "Scooby-Doo, Where Are You!",
    "a talking dog who solves mysteries with his friends",
    "Ruh-roh! I talk in a funny voice and get scared easily",
    true
);

let dog2 = new Dog(
    "Blue",
    "puppy",
    "Blue's Clues",
    "a helpful dog who leaves clues for her owner",
    "Bark! Bark! I use clues to communicate",
    false
);

// --------------------------------------
// Display each property and value using for...in
// --------------------------------------
let dog1Output = "<strong>Dog 1 Information:</strong><br>";
for (let property in dog1) {
    if (typeof dog1[property] !== "function") {
        dog1Output += property + ": " + dog1[property] + "<br>";
    }
}
document.getElementById("dog1").innerHTML = dog1Output;

let dog2Output = "<strong>Dog 2 Information:</strong><br>";
for (let property in dog2) {
    if (typeof dog2[property] !== "function") {
        dog2Output += property + ": " + dog2[property] + "<br>";
    }
}
document.getElementById("dog2").innerHTML = dog2Output;

// --------------------------------------
// Prompt user to select a dog
// --------------------------------------
let userChoice = prompt("Type the name of one of these dogs: Scooby-Doo or Blue");

if (userChoice === "Scooby-Doo") {
    document.getElementById("selectedDog").innerHTML =
        "<strong>Selected Dog:</strong><br>" + dog1.myGreeting();
} else if (userChoice === "Blue") {
    document.getElementById("selectedDog").innerHTML =
        "<strong>Selected Dog:</strong><br>" + dog2.myGreeting();
} else {
    document.getElementById("selectedDog").innerHTML =
        "Error: The dog you selected does not exist.";
}