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
        };
    });
    return wordCounter;
}



function numberOfOccurrencesInText(word ,text){
    const textArray = text.split(" ");

    let wordCounter = 0;
    textArray.forEach(function(element){
        if (word.toLowerCase() === element.toLowerCase()){
            wordCounter++;
        };
    });
    return wordCounter;
}