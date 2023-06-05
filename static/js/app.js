// Business Logic
function wordCounter(text) {
    if (text.trim().length === 0) {
        return 0;
    }

    let wordCounter = 0;
    const textArray = text.split(" ")
    textArray.forEach(function (element) {
        if (!Number(element)) {
            wordCounter++;
        };
    });
    return wordCounter;
}


function numberOfOccurrencesInText(word, text) {
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function (element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++;
        }
    });
    return wordCount;
}


// UI Logic

function handleFormSubmission() {
    event.preventDefault();
    const passage = document.getElementById("text-passage").value;
    const word = document.getElementById("word").value;
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    document.getElementById("total-count").innerText = wordCount;
    document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener('load', () => {
    document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});