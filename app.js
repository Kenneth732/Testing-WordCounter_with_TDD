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

// "word" refers to a specific word that you want to search for within a given text.
// The parameter word is the value that represents the word you want to find occurrences of.
// "text" refers to the actual text in which you want to search for the specified word. 
// The parameter text is the value that represents the text you want to search within.
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



const word = 'hello';
const text = 'Hello there, hello world!';
const occurrences = numberOfOccurrencesInText(word, text);
console.log(occurrences); // Output: 2
