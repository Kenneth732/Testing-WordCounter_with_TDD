// Business Logic

function wordCounter(text){
    if(text.trim().length === 0){
        return 0;
    }

    let wordCounter = 0;
    const textArray = text.split("")
    textArray.forEach(function(element){
        if (!Number(element)){
            wordCounter++;
        }
    })
    return wordCounter;
}



function numberOfOccurrencesInText(text, word){
    if(word === text){
        return 1;
    }
    return 0;
}