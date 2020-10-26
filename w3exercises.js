function reverseNumber(n) {
    n = n.toString();
    return n.split("").reverse().join("");
}

function isPalindrome(s) {
    sNoSpace = s.replace(/ /g,"");
    var arr = sNoSpace.split("");
    
    for (i = 0; i < arr.length; i++) {
        arr = arr.slice(1, arr.length -1);
        if (arr[0] != arr[arr.length - 1]) return s + " is not palindrome";
                 
    }
    return s + " is palindrome";
    }
