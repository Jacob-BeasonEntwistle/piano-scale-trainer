// Logic for random selection + speech

const nextScaleButton = document.getElementById("next-scale");
nextScaleButton.addEventListener("click", chooseRandom);
const repeatScaleButton = document.getElementById("repeat-scale");
repeatScaleButton.addEventListener("click", sayScale);

const articulation = [ "Legato", "Staccato" ]

let category = "";
let currentlySelected = "";
let currentArticulation = "";

let counter = 0;
let lastPlayed = "";

function chooseRandom(){
    // If a scale is currently being read, it is stopped and a new one is chosen
    speechSynthesis.cancel();

    // If this is not the first scale, update lastPlayed and increment the counter
    if (currentlySelected){
        lastPlayed = currentlySelected.display + " " + currentArticulation;
        counter++;
    }

    // Pick a random category from the grade
    category = grade7[Math.floor(Math.random() * grade7.length)];
    console.log(category);
    // Pick a random scale from the category
    currentlySelected = category.scales[Math.floor(Math.random() * category.scales.length)];
    console.log(currentlySelected);

    // Determine articulation
    if (category.allowsStaccato){
        currentArticulation = articulation[Math.floor(Math.random() * articulation.length)];
    }
    else{
        currentArticulation = "Legato";
    }
    console.log(currentArticulation);

    displayScale();     // Display the selected scale
    sayScale();         // Say the scale outloud
    logProgress();      // Displays progress on screen
}

// Updating the "scale display" element's text to show the scale
function displayScale(){
    document.getElementById("scale-display").innerText = "Scale: " + currentlySelected.display + "\nArticulation: " + currentArticulation;
}

function logProgress(){
    document.getElementById("progress-display").innerText = `Scales practiced: ${counter}\nLast played: ${lastPlayed}`;
}

// Speaking the scale aloud (using speechSynthesis)
function sayScale(){
    const utterThis = new SpeechSynthesisUtterance(currentlySelected.speak + "..." + currentArticulation);
    utterThis.rate = 1;
    utterThis.pitch = 1;
    utterThis.volume = 1;
    
    speechSynthesis.speak(utterThis);
}