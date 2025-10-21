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
    // Pick a random category from the grade
    category = grade7[Math.floor(Math.random() * grade7.length)];
    console.log(category);
    // Pick a random scale from the category
    currentlySelected = category[Math.floor(Math.random() * category.length)];
    console.log(currentlySelected);

    currentArticulation = articulation[Math.floor(Math.random() * articulation.length)];
    console.log(currentArticulation);

    displayScale();     // Display the selected scale
    sayScale();         // Say the scale outloud
}

// Updating the "scale display" element's text to show the scale
function displayScale(){
    if (category == major_scales || category == minor_scales || category == major_scales_third_apart || category == minor_scales_third_apart || category == scales_in_thirds || category == chromatic_contrary_motion){
        document.getElementById("scale-display").innerText = currentlySelected + currentArticulation;
    }
    else{
        document.getElementById("scale-display").innerText = currentlySelected + articulation[1];
    }
}

// Speaking the scale aloud (using speechSynthesis)
function sayScale(){

}