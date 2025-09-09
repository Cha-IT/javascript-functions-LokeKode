// Oppgave 1
function arealSirkel(radius) {
    console.log(radius**2 * Math.PI)
}

arealSirkel(24)
arealSirkel(32)

// Oppgave 3
function person(navn, alder) {
    if (alder < 30) {
        console.log('Hei ', navn, ', du er ung!')
    } else {
        console.log('Hei ', navn, ', du er gammel!')
    }
}

person(prompt('Hva heter du?'), prompt('Hvor gammel er du?'))

// Oppgave 4
// a
function kvadratrot(sidelengde) {
    return sidelengde**2
}

let userInput = prompt('skriv inn et tall')
console.log('Kvadratet av ', userInput, 'er', kvadratrot(userInput))

// b

function trapes(sideA, sideB, høyde) {
    return ((Number(sideA) + Number(sideB)) / 2) * høyde
}

console.log('Arealet til trapesen er ', trapes(prompt('Skriv en sidelengde'), prompt('Skriv enda en sidelengde'), prompt('Definer høyden til trapeset')))