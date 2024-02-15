let input = "This Is A String";
let swappedString = swapCase(input);
function swapCase(inputString) {
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        let currentChar = inputString.charAt(i);
        if (currentChar === currentChar.toUpperCase()) {
            result += currentChar.toLowerCase();
        } else {
            result += currentChar.toUpperCase();
        }
    }
    return result;
}
console.log(swappedString);