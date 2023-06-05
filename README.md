# Our First Test
Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1


# Our Second Test
Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

# Our Third Test
Test: "It should return 0 for an empty string."
Code: wordCounter(" ");
Expected Output: 0


# Our Fourth Test
Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0


# Our Fifth Test
Test: "It should not count number as words"
Code: wordCounter("hi there 77 19);
Expected: output: 2


# Our First Test
Describe: numberOfOccurrencesInText()
Code: 
const text = ''
const word = 'red'
numberOfOccurrencesInText(word, text);
Expected Output: 0


# Our Second Test
Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1


# Our Third Test
Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0


# Our Fourth Test
Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4


# Our Fifth Test
Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3


# Our sixth Test
Test: "It should return a word match regardless of punctuation."
Code:
const word = "Red"
numberOfOccurrencesInText(word, text);
Expected Output: 3




# wordCounter function:

> This function takes a text parameter as input.
```
function wordCounter(text) {}
```
> It first checks if the trimmed text has a length of 0 (i.e., if it is empty or contains only whitespace). If so, it returns 0 as there are no words to count.
```
    if (text.trim().length === 0) {
        return 0;
    }
```
> It initializes a variable wordCounter to keep track of the word count.
```
    let wordCounter = 0;
```
> The text is split into an array of characters using split("").
> It then iterates over each element in the textArray using forEach and checks if the element is not a number using !Number(element).
```
const textArray = text.split(" ")
```
> If the element is not a number (i.e., it is a word), it increments the wordCounter by 1.
> Finally, it returns the wordCounter, which represents the total number of words in the text.

```
    return wordCounter;
```

# Here is the code for it
```
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

```

# numberOfOccurrencesInText function:

> This function takes two parameters: word (the word to search for) and text (the text to search within).

```
function numberOfOccurrencesInText(word, text) {}
```
> It splits the text into an array of words using split(" ").
It initializes a variable wordCount to keep track of the number of occurrences of the word.
```
 const textArray = text.split(" ");
```

> The textArray is iterated over using forEach, and for each element (a word), it checks if the lowercase version of the element includes the lowercase version of the word using element.toLowerCase().includes(word.toLowerCase()).

```
    textArray.forEach(function (element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++;
        }
    });
```
> If the word is found (case-insensitive), it increments the wordCount by 1.
> Finally, it returns the wordCount, which represents the total number of occurrences of the word in the text.
```
    return wordCount;
```

> Wait a minu.. what the heck is going on here with this code? numberOfOccurrencesInText function
- what is the use of two paramenters? word and text
> Well, let dive deep into it and unlock the mystery story of it:

- In the context of the numberOfOccurrencesInText function, the word "word" refers to a specific word that you want to search for within a given text. The parameter word is the value that represents the word you want to find occurrences of.

- Similarly, the word "text" refers to the actual text in which you want to search for the specified word. The parameter text is the value that represents the text you want to search within.

- So when you call the numberOfOccurrencesInText function, you provide two arguments: the first argument is the specific word you want to search for, and the second argument is the text in which you want to perform the search.
> For example:
```
const word = 'hello';
const text = 'Hello there, hello world!';
const occurrences = numberOfOccurrencesInText(word, text);
console.log(occurrences); // Output: 2

```
- In this example, the function numberOfOccurrencesInText is called with the word "hello" as the first argument (the word to search for) and the text "Hello there, hello world!" as the second argument (the text to search within). The function will count the occurrences of the word "hello" in the given text and return the result, which is 2 in this case.

# Here is the code for it
```
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
```

- Both functions are related to counting words in a text, but they use slightly different approaches. The wordCounter function counts the total number of words in a text, while the numberOfOccurrencesInText function counts the occurrences of a specific word in a text.