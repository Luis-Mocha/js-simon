const numDiv = document.querySelector('#numDiv');
const startBtn = document.querySelector('#startBtn');

const form = document.querySelector('form');
// const formBtn = document.querySelector('#formBtn');


//generoi 5 numeri causali
let numArray = [];
for (let i = 0; i < 5; i++) {
    numArray.push(randomNUmber(10, 99));

    numDiv.innerHTML += `<span>${numArray[i]}</span>`
}
console.log(numArray);
// let control = true;
// console.log(control)

//Al play nascondo il tasto e mostro i numeri
startBtn.addEventListener('click', function() {
    hideDiv(startBtn);

    showDiv(numDiv);

    setTimeout(function() {
        hideDiv(numDiv);
        showDiv(form)
        control = false;
    }, 1000);

});
// setInterval(function() {
//     if (control) {
//         console.log('helooo');
//     }
//     else {
//         console.log('nono')
//     }
// }, 1000)

let userArray = [];
form.addEventListener('submit', function(invioForm) {
    invioForm.preventDefault();
    userArray = []

    const input1 = parseInt(document.querySelector('#input1').value);
    const input2 = parseInt(document.querySelector('#input2').value);
    const input3 = parseInt(document.querySelector('#input3').value);
    const input4 = parseInt(document.querySelector('#input4').value);
    const input5 = parseInt(document.querySelector('#input5').value);
    
    userArray.push(input1, input2,input3, input4, input5);
    console.log(userArray);

    hideDiv(form);

    // riordino i due array da confrontare
    let numArraySorted = [];
    let userArraySorted = [];

    for (let i = 0; i < 5; i++) {
        numArraySorted.push(numArray[i])
        userArraySorted.push(userArray[i])
    };

    numArraySorted.sort();
    userArraySorted.sort();
    console.log(numArraySorted, userArraySorted);

    
    for (let i = 0; i < 5; i++) {
        if (numArray[i] === userArray[i]) {
            corrette++;
            correctNumbers.push(userArray[i])
            correctPositions.push(i+1)
        }
        else {
            sbagliate++
        }
        console.log(corrette, sbagliate);
    }

    let originalNumbers = document.querySelector('#originalNumbers')
    let userNumbers = document.querySelector('#userNumbers')
    let finalResult = document.querySelector('#finalResult')

    originalNumbers.innerHTML =`<h2>${numArray}</h2>` 
    userNumbers.innerHTML = `<h2>${userArray}</h2>` 

    if (corrette === 5) {
        finalResult.innerHTML = '<h3>Hai indovinato ogni numero un posizione corretta!</h3>'
    }
    else if (corrette === 0) {
        finalResult.innerHTML = '<h3>Non ne hai indovinato neanche uno :(</h3>'
    }
    else {
        finalResult.innerHTML = `
        <h3>Numeri corretti:${corrette}.
        <br>
        Hai indovinato i numeri in posizione ${correctPositions}, cioè ${correctNumbers}.</h3>`
    }
   
    
});
let corrette = 0;
let sbagliate = 0;
let correctNumbers = [];
let correctPositions = [];



/* my functions */
function showDiv(divHtml) {
    divHtml.classList.remove('d-none');
};
function hideDiv(divHtml) {
    divHtml.classList.add('d-none');
};


function randomNUmber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}