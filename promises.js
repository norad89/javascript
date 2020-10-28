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

let learnJS = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if (completed) {
            resolve("I have completed learning JS.");
        } else {
            reject("I haven't completed learning JS yet.");
        }
    }, 3 * 1000);
});


function download(url, callback) {
    setTimeout(function() {
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