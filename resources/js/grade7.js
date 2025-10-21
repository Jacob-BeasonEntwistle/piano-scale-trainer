const majorScales = {
    name: "major_scales",
    scales: [
        {display: "Db major scale", speak: "Play a D flat major scale"}, 
        {display: "E major scale", speak: "Play an E major scale"}, 
        {display: "G major scale", speak: "Play a G major scale"}, 
        {display: "Bb major scale", speak: "Play a B flat major scale"}
    ],
    allowsStaccato: true
}

const minorScales = {
    name: "minor_scales",
    scales: [
        {display: "C# minor harmonic scale", speak: "Play a C sharp minor harmonic scale"}, 
        {display: "C# minor melodic scale", speak: "Play a C sharp minor melodic scale"}, 
        {display: "E minor harmonic scale", speak: "Play an E minor harmonic scale"}, 
        {display: "E minor melodic scale", speak: "Play an E minor melodic scale"}, 
        {display: "G minor harmonic scale", speak: "Play a G minor harmonic scale"}, 
        {display: "G minor melodic scale", speak: "Play a G minor melodic scale"}, 
        {display: "Bb minor harmonic scale", speak: "Play a B flat minor harmonic scale"}, 
        {display: "Bb minor melodic scale", speak: "Play a B flat minor melodic scale"}
    ],
    allowsStaccato: true
}

const majorScalesThirdApart = {
    name: "major_scales_third_apart",
    scales: [
        {display: "Db major third apart", speak: "Play a D flat major scale, a third apart"}, 
        {display: "E major third apart", speak: "Play an E major scale, a third apart"}, 
        {display: "G major third apart", speak: "Play a G major scale, a third apart"}, 
        {display: "Bb major third apart", speak: "Play a B flat major scale, a third apart"}
    ],
    allowsStaccato: true
}

const minorScalesThirdApart = {
    name: "minor_scales_third_apart",
    scales: [
        {display: "C# minor harmonic third apart", speak: "Play a C sharp minor harmonic scale, a third apart"}, 
        {display: "E minor harmonic third apart", speak: "Play an E minor harmonic scale, a third apart"}, 
        {display: "G minor harmonic third apart", speak: "Play a G minor harmonic scale, a third apart"}, 
        {display: "Bb minor harmonic third apart", speak: "Play a B flat minor harmonic scale, a third apart"}
    ],
    allowsStaccato: true
}

const majorContraryMotion = {
    name: "major_contrary_motion",
    scales: [
        {display: "Db major contrary-motion", speak: "Play a D flat major contrary-motion scale"}, 
        {display: "E major contrary-motion", speak: "Play an E major contrary-motion scale"}, 
        {display: "G major contrary-motion", speak: "Play a G major contrary-motion scale"}, 
        {display: "Bb major contrary-motion", speak: "Play a B flat major contrary-motion scale"}
    ],
    allowsStaccato: true
}

const minorContraryMotion = {
    name: "minor_contrary_motion",
    scales: [
        {display: "C# minor harmonic contrary-motion", speak: "Play a C sharp minor harmonic contrary-motion scale"}, 
        {display: "E minor harmonic contrary-motion", speak: "Play an E minor harmonic contrary-motion scale"}, 
        {display: "G minor harmonic contrary-motion", speak: "Play a G minor harmonic contrary-motion scale"}, 
        {display: "Bb minor harmonic contrary-motion", speak: "Play a B flat minor harmonic contrary-motion scale"}
    ],
    allowsStaccato: true
}

const scalesInThirds = {
    name: "scales_in_thirds",
    scales: [
        {display: "G major scale in thirds (RH)", speak: "Play a G major scale in thirds using just the right hand"}, 
        {display: "G major scale in thirds (LH)", speak: "Play a G major scale in thirds using just the left hand"}
    ],
    allowsStaccato: true
}

const chromaticContraryMotion = {
    name: "chromatic_contrary_motion",
    scales: [
        {display: "Contrary-motion starting in C# (LH) E (RH)", speak: "Play a contrary-motion scale starting on C sharp in the left hand and E in the right hand"}
    ],
    allowsStaccato: true
}

const majorArpeggiosFirstInversion = {
    name: "major_arpeggios_first_inversion",
    scales: [
        {display: "Db major arpeggio (1st inversion)", speak: "Play a D flat major arpeggio, first inversion"}, 
        {display: "E major arpeggio (1st inversion)", speak: "Play an E major arpeggio, first inversion"}, 
        {display: "G major arpeggio (1st inversion)", speak: "Play a G major arpeggio, first inversion"}, 
        {display: "Bb major arpeggio (1st inversion)", speak: "Play a B flat major arpeggio, first inversion"}
    ],
    allowsStaccato: false
}

const minorArpeggiosFirstInversion = {
    name: "minor_arpeggios_first_inversion",
    scales: [
        {display: "C# minor arpeggio (1st inversion)", speak: "Play a C sharp minor arpeggio, first inversion"}, 
        {display: "E minor arpeggio (1st inversion)", speak: "Play an E minor arpeggio, first inversion"}, 
        {display: "G minor arpeggio (1st inversion)", speak: "Play a G minor arpeggio, first inversion"}, 
        {display: "Bb minor arpeggio (1st inversion)", speak: "Play a B flat minor arpeggio, first inversion"}
    ],
    allowsStaccato: false
}

const dominantSevenths = {
    name: "dominant_sevenths",
    scales: [
        {display: "Dominant seventh in the key of Db", speak: "Play a dominant seventh in the key of D flat"}, 
        {display: "Dominant seventh in the key of E", speak: "Play a dominant seventh in the key of E"}, 
        {display: "Dominant seventh in the key of G", speak: "Play a dominant seventh in the key of G"}, 
        {display: "Dominant seventh in the key of Bb", speak: "Play a dominant seventh in the key of B flat"}
    ],
    allowsStaccato: false
}

const diminishedSevenths = {
    name: "diminished_sevenths",
    scales: [
        {display: "Diminished seventh starting on Bb", speak: "Play a diminished seventh starting on B flat"}, 
        {display: "Diminished seventh starting on E", speak: "Play a diminished seventh starting on E"}
    ],
    allowsStaccato: false
}

window.grade7 = [
    majorScales, minorScales, majorScalesThirdApart, minorScalesThirdApart, majorContraryMotion, minorContraryMotion, scalesInThirds, chromaticContraryMotion, majorArpeggiosFirstInversion, minorArpeggiosFirstInversion, dominantSevenths, diminishedSevenths
]