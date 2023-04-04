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

    if (numArray === userArray) {
        console.log('perfetto!');
    } else if (numArraySorted === userArraySorted){
        console.log('quasi!'); 
    } else {
       console.log('nope')
    }

});



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