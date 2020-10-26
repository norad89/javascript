function foo() {
    var a = 2;
    this.bar();
}

function bar() {
    console.log(this.a);
}

foo();

function foo2() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo2: foo2
};

obj.foo2();

/*--------------------------------------------*/
/*--------------------------------------------*/

var lorenzo = {
    name: 'Lorenzo',
    greet: function(person) {
        console.log(
            "Buongiornoissimo" + person + "sono il boomer" + this.name
        );
    }
}

lorenzo.greet("Gianpaolo");

var copy = lorenzo.greet;

copy("Gianpaolo");

var a = 5;

var test = {
    a: 2,
    b: {
        a:3,
        c: function() {
            console.log(this.a)
        }
    }
};

var result = test.b.c;

result();

/*--------------------------------------------*/
/*--------------------------------------------*/

var name = "Laura";

var me = {
    name: "Daniele",
    withArrow: () => {
        console.log("Ciao " + this.name);
    },
    withoutArrow: function() {
        console.log("Ciao " + this.name);

    }
};

me.withArrow();
me.withoutArrow();

/*--------------------------------------------*/
/*--------------------------------------------*/

var cat = {
    lives: 9,
    jumps: function() {
        this.lives--;
        console.log(this.lives);
    }
};

cat.jumps(); 

/*--------------------------------------------*/
/*--------------------------------------------*/

function sum() {

    var total = 0;

    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];

        arg = arg.split(",");
        
        if (Array.isArray(arg)) {
            for (let k = 0; k < arg.length; k++) {
                total += parseFloat(arg[k]);
            }
            } else { 

            const numberToAdd = parseFloat(arg);
        
            if (!Number.isNaN(numberToAdd)) {
                total += numberToAdd;
            }
        }
    }   
        return total;
    }

console.log(sum('4,6,7,88'));

/*--------------------------------------------*/
/*--------------------------------------------*/

function download(url, callback) {
    
    setTimeout(function() {
        callback(url);    
    }, 5000); 
}

download("Cowabunga", image => {
    console.log(image)
});

function downloadIamge(url, imageName, callback) {
    setTimeout(function() {
        callback(url + imageName);
    }, 5000);
}

downloadImage("https://unsplash.com/photos/", "Z05GiksmqYU", () => {

})

/*--------------------------------------------*/
/*--------------------------------------------*/

function factorial(num) {
    let counter = num
    let x = num;

    for (let i = 1; i < counter; i++) {
        y = --x;
        x = y;
        num = num * y 
    }
    return num;
} 

function recursiveFactorial(n) {
    if (n == 0) return 1;
    return n * recursiveFactorial(n - 1);
}


//This function should return true if numberToCheck
//is multiple of targetNumber

function isMultiple(targetNumber, numberToCheck) {
    return numberToCheck % targetNumber === 0;
}

function fancyTernaryOperator(i) {
    i % 3 === 0 && i % 5 === 0 ? console.log('FizzBuzz') :
    i % 3 === 0 ? console.log('Fizz') : 
    i % 5 === 0 ? console.log('Buzz') : 
    console.log(i.toString());
}

function isMultipleThreeOrFive(n) {
    for (i = 1; i < n; i++) {
      fancyTernaryOperator(i);
    }
}

/* ------------------------------------------ */

function printNumber(m) {
    if (isMultiple(3, m) && isMultiple(5, m)) {
        return "FizzBuzz";
      } else if (isMultiple(3, m)) {
        return "Fizz";
      } else if (isMultiple(5, m)) {
        return "Buzz";
      } else {
        return m.toString();
      }
    }


function fancier(m) {
    for (i = 0; i < m; i++) {
        console.log(printNumber(i));
    }
}
