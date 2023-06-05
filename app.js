// Business Logic

function wordCounter(text){
    if(text.trim().length === 0){
        return 0;
    }

    let wordCounter = 0;
    const textArray = text.split("")
    textArray.forEach(function(word){
        wordCounter++;
    })
    return wordCounter;
}



