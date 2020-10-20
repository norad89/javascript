const age = 16;

const car = "Renault Clio";

var fruits = []

function test() {
   fruits.push("Apple");
   fruits.push("Banana");
   fruits.push("Melon");
   fruits.push('Strawberry');

   console.log(fruits);
}

// test();

// this function returns true if the word
// is palindrome, otherwise false
function isPalindrome(word) {
    let isValid = false;

    for (let counter = 0; counter < word.length / 2; counter++) {
        if (word[counter] === word[word.length -1 - counter]) {
            isValid = true;
        } else {
            isValid = false;
            break;    
        }
    }

    return isValid;

}

function recursivePalindrome(word) {
    const length = word.length;

    if (length === 1) {
        return true;
    }

    if (length === 2) {
        word[0] === word[1];
        return true;
    }

    if (word[0] === word[length -1]) {
        return recursivePalindrome(word.slice(1, length -1));
    }

    return false; 

}

console.log(recursivePalindrome("anna"));
console.log(recursivePalindrome("abellissima"));
console.log(recursivePalindrome("fabrizio"));
