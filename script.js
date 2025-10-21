// Logic for random selection + speech

// --Needs to handle--

// [A. Variables and data]
// - A List (array) holding all scales
const scales = [
    "scale 1", "scale 2", "scale 3"
]
// - A variable to store whichever scale is currently selected
let currentlySelected = "";
// - (Optional) A counter of how many you've done or the last one played
let counter = 0;
let lastPlayed = "";

// [B. Functions]
// - A function that picks a random one from the list
function chooseRandom(){
    // --Random Selection--
    // 1. Get total number of scales
    //              &
    // 2. Pick a random index within the range
    const randomScale = scales[Math.floor(Math.random() * scales.length)];
    // 3. Use that index to grab the corresponding scale from the list
    // 4. Update your "scale display" element's text to show it
    // 5. Use text-to-speech to read it out
}
// - A function that displays that scale on the page
function displayScale(){

}
// - A function that speaks the text aloud (using speechSynthesis)
function sayScale(){

}

// [C. Event handling]
// - You need an event listener attached to the "next scale" button
// -- That event triggers your logic each time you click