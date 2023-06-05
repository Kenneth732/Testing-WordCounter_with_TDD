function wordCounter(text){
    let wordCounter = 0;
    const textArray = text.split("")
    textArray.forEach(function(word){
        wordCounter++;
    })
    return wordCounter;
}



function wordCounter(text) {
    let wordCounter = 0;
    const textArray = text.split("");
    textArray.forEach(function(element) {
      wordCounter++;
    });
    return wordCounter;
  }
  