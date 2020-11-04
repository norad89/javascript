let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('failed')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})


let completed = true;

let learnJS = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (completed) {
            resolve("I have completed learning JS.");
        } else {
            reject("I haven't completed learning JS yet.");
        }
    }, 3 * 1000);
});


function download(url, callback) {
    setTimeout(function () {
        callback(url);
    }, 3000);
}

function getGithubCodemasterOrganization() {
    fetch("https://api.github.com/orgs/CodeMaster-2020")
        .then(response => {
            console.log(response);

            return response.json()
        })
        .then(result => {
            console.log(result.avatar_url);
        })
        .catch(err => {
            console.log(err);
        });
}

async function getGithubCodemasterOrganizationAsync() {
    const response = await fetch("https://api.github.com/orgs/CodeMaster-2020");

    const result = await response.json();

    const avatar = result.avatar_url;

    console.log(avatar);

    return avatar;
}

/* convertire il set timeout in una promise */
/* capire meglio il callback */

 new Promise((resolve,reject) => {
        setTimeout(reject, 3000);
    })
    .catch(e => console.log('pausa mentre aspetto'))
    .then(() => console.log('messaggio quando risolve'))
    .catch(e => console.log('messaggio 2 apparirà')); 


new Promise((resolve, reject) => {
    setTimeout(() => resolve('Cavolfiore'), 3000);
}).then(response => console.log('ciao ' + response))


let completed = true;

let learnJSTC = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(completed), 3 * 1000);
}).then(() => console.log("I have completed learning JS."))
    .catch(() => console.log("I haven't completed learning JS yet."))



function aspetta() {
    return new Promise(resolve => setTimeout(resolve, 2000))
};

function aspettaAncora() {
    return aspetta()
        .then(() => {
            console.log('1. eseguo la prima');
            return aspetta();
        })
        .then(() => {
            console.log('2. eseguo la seconda');
            return aspetta();
        })
        .then(() => {
            console.log('3. eseguo la terza');
            return aspetta();
        })
        .then(() => {
            console.log('4. ne eseguo una quarta');
        });
}

// QUi stampo l'oggetto Promise
console.log(aspettaAncora());


function timer() {
    n = n + 1;
    return new Promise((resolve,reject) => setTimeout(resolve ,2000))
};


let n = 0;

function timer() {
    n = n + 1;
    return new Promise((resolve, reject) => {
        if (n === 3) {
            setTimeout(() => {
                reject();
            }, 1000);
        } else {
            setTimeout(() => {
                resolve();
            }, 1000);
        };
    });

}


function somma() {

    return timer()
        .then(() => {
            console.log(n);
            return timer();
        })
        .then(() => {
            console.log(n);
            return timer();
        })
        .then(() => {
            console.log(n);
            return timer();
        })
        .catch(() => {
            console.log('errore')
        })
}
console.log(somma());