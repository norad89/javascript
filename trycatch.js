// class CovidError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "CovidError";
//     }

// }

// var teacher = {
//     name: 'Fabrizio',
//     surname: 'Rizzonelli',
//     address: {
//         street: 'Via Mario',
//         n: '12/a',
//         print: () => {
//             if (teacher.address.street === "Via Mario") {
//                 throw new CovidError("Qui c'è il covid, non puoi sapere dov'è");
//             }

//             console.log(teacher.address.street + " " + teacher - address.n);
//         }
//     }
// };

// try {
//     teacher.address.print();
// } catch (err) {
//     console.log(err);
// } finally {
//     console.log("Stiamo tutti a casa");
// }


class InfinityError extends Error {
    constructor(message) {
        super(message);
        this.name = "InfinityError";
    }
}

function division(num1, num2,) {
    if (num1 / num2 === Infinity) {
        throw new InfinityError("What have you done? We're all gonna die!")
    }
    return num1 / num2;
}

try {
    console.log(division(10, 0));
} catch (err) {
    console.log(err);
} finally {
    console.log("I have a bad feeling about this.")
}



function divisionWithCallback(num1, num2, callback) {

    try {
        const result = num1 / num2;
        callback(result);
    } catch (err) {
        if (err instanceof TypeError) {
            console.log('An argument is missing')
        }
    }
}

function mainWithCallBack() {
    divisionWithCallback(10, 5, (result) => {
        showInTheWebPage(result);
    });
}

divisionWithCallback(56, 12, (result) => {
    console.log(result);
});

divisionWithCallback(48, result => {
    console.log(result);
});

divisionWithCallback(89, 34 - (12 + 2) - 10 - (8 - 2), result => {
    console.log(result);
});