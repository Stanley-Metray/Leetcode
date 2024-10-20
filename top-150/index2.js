let c1 = true, c2 = true, c3 = false, c4 = true;
console.clear();
const p1 = new Promise((resolve, reject) => {
    if (c1)
        resolve("Promise 1 resolved");
    else
        reject("Promise 1 rejected");
});

const p2 = new Promise((resolve, reject) => {
    if (c2)
        resolve("Promise 2 resolved");
    else
        reject("Promise 2 rejected");
});


const p3 = new Promise((resolve, reject) => {
    if (c3)
        resolve("Promise 3 resolved");
    else
        reject("Promise 3 rejected");
});

const p4 = new Promise((resolve, reject) => {
    if (c4)
        resolve("Promise 4 resolved");
    else
        reject("Promise 4 rejected");
});

const promises = [p1, p2, p3, p4];

// let promise = Promise.all(promises);

// promise.then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err);
// });

// let promise = Promise.allSettled(promises);

// promise.then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// });

let promise = Promise.race(promises);

promise.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});