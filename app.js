// Business Logic

function wordCounter(text){
    let wordCounter = 0;
    const textArray = text.split("")
    textArray.forEach(function(word){
        wordCounter++;
    })
    return wordCounter;
}



