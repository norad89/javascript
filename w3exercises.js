/*1--------------------OK*/
function reverseNumber(n) {
    n = n.toString();
    return n.split("").reverse().join("");
}

/*2*/
function isPalindrome(s) {
    sNoSpace = s.replace(/ /g,"");
    var arr = sNoSpace.split("");
    
    for (i = 0; i < arr.length; i++) {
        arr = arr.slice(1, arr.length -1);
        if (arr[0] != arr[arr.length - 1]) return s + " is not palindrome";
                 
    }
    return s + " is palindrome";
    }

/*3*/
function allCombinations(str) {
    var arr = str.split("");
    for (i = 0; i < arr.length; i++) {
        console.log([...arr])
    }
    
}

/*4--------------------OK*/
function alphabeticalOrder(str) {
    return str.toLowerCase().split("").sort().join("");
}

/*5*/
