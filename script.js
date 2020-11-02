let naughtyOrNiceList = [
    firstChild = {
        name: "valentina",
        naughtyOrNice: undefined,
        present: undefined
    },
    secondChild = {
        name: "alessandro",
        naughtyOrNice: undefined,
        present: undefined
    },
    thirdChild = {
        name: "francesca",
        naughtyOrNice: undefined,
        present: undefined
    }
];


function naughtyOrNice() {
    for (i = 0; i < naughtyOrNiceList.length; i++) {

        var naughtyOrNice = Math.round(Math.random());

        if (naughtyOrNice === 0) {
            judgement = 'naughty'
        } else {
            judgement = 'nice'
        };

        naughtyOrNiceList[i].naughtyOrNice = judgement;

        if (judgement === 'naughty') {
            naughtyOrNiceList[i].present = 'coal'
        } else if (judgement === 'nice') {
            naughtyOrNiceList[i].present = 'toys'

        } console.log(naughtyOrNiceList[i]);
    } return 'end of list';
};


// var moment = require("moment")

// var myDate = new Date();
// var myCoolDate = moment(myDate).format('LL')

// console.log(myDate)


function Computer(motherboard, ram, processor) {
    this.motherboard = motherboard;
    this.ram = ram;
    this.processor = processor;
}

odin = new Computer('Asus', '16gb', 'Core i7')

function MyComputer(motherboard, ram, processor, hd) {
    Computer.call(this, motherboard, ram, processor);

    this.hd = hd;
}

MyComputer.prototype = Object.create(Computer.prototype);
MyComputer.prototype.constructor = MyComputer;

class Computer01 {
    constructor(motherboard, ram, processor) {
        this.motherboard = motherboard;
        this.ram = ram;
        this.processor = processor;
    }
}

class MyComputer01 extends Computer01 {
    constructor(motherboard, ram, processor, hd) {
        super(motherboard, ram, processor);
        this.hd = hd;
    }
}

odin01 = new MyComputer01('Asus', '16gb', 'Core i7', '1tb')

function greetings(name, callback) {
    console.log(name)
}

function useCallback(name, callback) {
    console.log(name);
    callback(1);
    callback(2);
    callback(3);
}

function callback(sentence) {
    console.log(sentence);
}

useCallback('pippo', callback);

let num = 4;

new Promise((resolve, reject) => {
    if (num === 5) {
        setTimeout(() => {
            resolve("yeah!");
        }, 1000);
    } else {
        setTimeout(() => {
            reject("not yeah :(");
        }, 1000);
    }
})
    .then(result => {
        console.log(result);

        return "sono il risultato del primo then";
    })
    .then(result => {
        console.log(result);

        return "sono il risultato del secondo then";
    })
    .catch(err => {
        console.log(err);

        return "sono il return del catch";
    })
    .finally(result => {
        console.log(result);
    });


function division(num1, num2) {
    return num1 / num2;
}

console.log(division(10, 5));
console.log(division(10, 0));

