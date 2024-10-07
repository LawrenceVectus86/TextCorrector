// Function to correct text
function correctText(text, removeWord, removeSymbols) {
    // Step 1: Remove custom word/phrase
    if (removeWord && removeWord.trim() !== '') {
        const regex = new RegExp(removeWord, 'gi'); // Create case-insensitive regex for the word
        text = text.replace(regex, '');
    }

    // Step 2: Remove symbols if the checkbox is checked
    if (removeSymbols) {
        text = text.replace(/[&*()@!#$%^~`+={}\[\]|\\:;"'<>,.?/_-]/g, ''); // Remove common symbols
    }

    // Step 3: Example text correction (capitalize first letter of each sentence)
    return text.replace(/(^\w{1}|\.\s*\w{1})/g, function(letter) {
        return letter.toUpperCase();
    }).replace(/\bi\b/g, 'I'); // Fix lowercase 'i' to uppercase 'I'
}

// Get elements
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const removeText = document.getElementById('removeText');
const removeSymbolsCheckbox = document.getElementById('removeSymbols');
const correctButton = document.getElementById('correctButton');
const clearButton = document.getElementById('clearButton');

// Event listener for the correct button
correctButton.addEventListener('click', function() {
    const input = inputText.value;
    const removeWord = removeText.value;
    const removeSymbols = removeSymbolsCheckbox.checked;

    if(input.trim() !== '') {
        const corrected = correctText(input, removeWord, removeSymbols);
        outputText.value = corrected;
    } else {
        outputText.value = ''; // Clear output if input is empty
    }
});

// Event listener for the clear button
clearButton.addEventListener('click', function() {
    inputText.value = '';
    removeText.value = '';
    removeSymbolsCheckbox.checked = false;
    outputText.value = '';
});