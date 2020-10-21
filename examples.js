/* 

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

let name = 'Gianpaolo';
let surname = 'Raimondi';
let age = 31;
let height = 175;

function identityCard() {

    let name = 'Franco';
  
    console.log('Name: ' + name);
    console.log('Surname: ' + surname);
    console.log('Age: ' + age);
    console.log('Height: ' + height + ' cm');
};

function aging(distantYear) {

    let currentYear = new Date().getFullYear();
    let oldAge = age + distantYear - currentYear;
    
    if (oldAge > 100 && oldAge < 999) {
        console.log ('In ' + distantYear + ' you will be ' + oldAge + ' years old. Or more likely dead.')
    
    }  else if (oldAge >= 1000) {
        console.log('In the year ' + distantYear + ' you will be probably nothing more than dust.');

    }  else if (distantYear < currentYear) {
        console.log('In the year ' + distantYear + " you weren't even born.");

    }  else {
        console.log('In ' + distantYear + ' you will be ' + oldAge + ' years old.');
    }
};

let polloCurry = {
    ingrediente01: "pollo",
    ingrediente02: "curry",
    ingrediente03: "latte di cocco",
    ingrediente04: "riso",
    ingrediente05: "prezzemolo",
    ingrediente06: "farina",
    ingrediente07: "cipolla"
};

console.log('Per preparare il ' + polloCurry.ingrediente01 + ' al ' + polloCurry.ingrediente02 + ' per prima cosa fare un soffritto con la ' + polloCurry.ingrediente07 + '...');

let armadio = {
    ante: 3,
    anta1: {
        ripiano1: "pantaloni",
        ripiano2: "magliette",
        ripiano3: "mutande"
    },
    anta2: {
        ripiano1: "maglioni",
        ripiano2: "felpe",
        ripiano3: "sciarpe"
    },
    anta3: {
        ripiano1: "calzini",
        ripiano2: "cappotti"
    }
};

console.log('Il nostro armadio ha ' + armadio.ante + ' ante. Nella prima ci sono le cose estive: ' + armadio.anta1.ripiano1 + ' e ' + armadio.anta1.ripiano2);

let shaker = {
    gusto: "cioccolato",
    colore: "marrone",
    marca: "Optimum Nutrition",
    kcal: 378   
};

console.log('Sono le 11 e devo prendere il mio shaker al gusto di ' + shaker.gusto + ' che ha un poco invitante colore ' + shaker.colore);

let libro = {
    titolo: "Le mie proteine",
    numeroPagine: 420,
    collana: "Grossi e Felici",
    costo: "69 Euro",
};

console.log('Oggi ho speso ' + libro.costo + ' per comprare il libro dal titolo "' + libro.titolo + '" della collana ' + libro.collana + " e non vedo l'ora di leggere le sue " + libro.numeroPagine + ' pagine.' );

let razzeCane = ['Pitbull','Cavalier King'];

function printDog() {
    
    razzeCane.push("Husky");
    console.log(razzeCane);
    razzeCane.sort();
    console.log(razzeCane);
    razzeCane.reverse();
    console.log(razzeCane);
    razzeCane.shift();
    console.log(razzeCane);
    razzeCane.pop()
    console.log(razzeCane);
    razzeCane.push("Pitbull");
    razzeCane.push("Cavalier King");
    console.log(razzeCane);
    razzeCane.splice(1,1,"Alaskan Malamute", "Cocker Spaniel");
    console.log(razzeCane);

};

let nomi = [];

    nomi.push("Laura");
    nomi.push("Matteo");
    nomi.push("Gianpaolo");
    nomi.push("Giovanni");
    nomi.push("Lorenzo");
    nomi.push("Alberto");
    nomi.push("Valerio");
    nomi.push("Oraldo");
    nomi.push("Daniele");
    nomi.push("Dario");
    nomi.sort()

let nomiE = nomi.join(" e ");
console.log(nomiE); 

let mashUp = [nomi, printDog()];
console.log(mashUp); 

let pencilCase = [];

function fillPencilCase(zip) {

    pencilCase.push("pen","pencil","rubber","ruler","glue","highlighter");

    if (zip == 'Open') {
        console.log('The pencil case contains: ' + pencilCase.join(", ") + ".");
    
    } else {
        console.log("Pencil case is closed")
    };
    
}

fillPencilCase("Open");


let value = ['Croatia','Czech Republic','Portugal','Greece']

value.forEach(camping);

function camping (val) {
    val = val || "yo face";
    console.log("let's go camping in", val);
}

camping("Rome")

*/
