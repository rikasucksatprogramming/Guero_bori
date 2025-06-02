// Mini Game 
// Initialized 
const genBtn = document.getElementById("gen");
const resultOutput = document.getElementById("result");

const posResults = [
    "First",
    "Secondn",
    "Thirdd",
    "Forthjjj",
    "Fithj",
];

genBtn.onclick = function(){
    const randomIndex = Math.floor(Math.random() * posResults.length);
    const randomSnippet = posResults[randomIndex];
    resultOutput.textContent = randomSnippet;
}