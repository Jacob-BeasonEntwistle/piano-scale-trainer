// Logic for random selection + speech

const nextScaleButton = document.getElementById("next-scale");
nextScaleButton.addEventListener("click", chooseRandom);

const articulation = [ "legato", "staccato" ]

let category = "";
let currentlySelected = "";
let currentArticulation = "";

let counter = 0;
let lastPlayed = "";

function chooseRandom(){
    // If a scale is currently being read, it is stopped and a new one is chosen
    speechSynthesis.cancel();
    // Pick a random category from the grade
    category = grade7[Math.floor(Math.random() * grade7.length)];
    console.log(category);
    // Pick a random scale from the category
    currentlySelected = category.scales[Math.floor(Math.random() * category.scales.length)];
    console.log(currentlySelected);

    if (category.allowsStaccato){
        currentArticulation = articulation[Math.floor(Math.random() * articulation.length)];
    }
    else{
        currentArticulation = "legato";
    }

    console.log(currentArticulation);

    displayScale();     // Display the selected scale
    sayScale();         // Say the scale outloud
}

// Updating the "scale display" element's text to show the scale
function displayScale(){
    document.getElementById("scale-display").innerText = currentlySelected.display + " " + currentArticulation;
}

// Speaking the scale aloud (using speechSynthesis)
function sayScale(){
    const utterThis = new SpeechSynthesisUtterance(currentlySelected.speak + "..." + currentArticulation);
    utterThis.rate = 1;
    utterThis.pitch = 1;
    utterThis.volume = 1;
    
    speechSynthesis.speak(utterThis);
}