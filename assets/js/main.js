const numDiv = document.querySelector('#numDiv');
const startBtn = document.querySelector('#startBtn');
let numArray = [];

//generoi 5 numeri causali
for (let i = 0; i < 5; i++) {
    numArray.push(randomNUmber(10, 99));
    console.log(numArray);

    numDiv.innerHTML += `<span>${numArray[i]}</span>`
}



//Al play nascondo il tasto e mostro i numeri
startBtn.addEventListener('click', function() {
    hideDiv(startBtn);

    showDiv(numDiv);

    setTimeout(function() {
        hideDiv(numDiv)
    }, 5000);
    
});
    

console.log(numArray);



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