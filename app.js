function wordCounter(word){
    let wordCounter = 0;
    const textArray = text.split("")
    textArray.forEach(function(word){
        wordCounter++;
    })
    return wordCounter;
}
