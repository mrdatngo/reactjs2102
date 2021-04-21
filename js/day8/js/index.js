// callback
// function hello() {
//   console.log("Hello world");
// }

// hello();

// function say(cb) {
//   cb();
// }

// say(hello);
// synchronous - asynchronous (dong bo va bat dong bo)

// function dinner() {
//   setTimeout(() => {
//     console.log("Dinner done!");
//     readBook();
//   }, 3000);
// }

// function readBook() {
//   setTimeout(() => {
//     console.log("Read books done!");
//   }, 2000);
// }

// dinner();

// console.log("Main thread");

// promise
let accept = true;
let found = false;
function buyCar() {
  let fatherPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (accept) {
        resolve({
          status: true,
          type: "father-promise",
        });
      } else {
        reject({
          status: false,
          type: "father-promise",
        });
      }
    }, 3000);
  });
  return fatherPromise;
}

function findLover() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (found) {
        resolve();
      } else {
        reject({
          status: false,
          type: "find-lover",
        });
      }
    }, 2000);
  });
}

buyCar()
  .then((data) => {
    console.log("Oke, bought car, data", data);
    return findLover();
    // .then(() => {
    //   console.log("Happy ending!");
    // })
    // .catch(() => {
    //   console.log("Sorry my life!");
    // });
  })
  .then(() => {
    console.log("Happy ending!");
  })
  .catch((err) => {
    console.log(err);
    if (err.type == "father-promise") {
      console.log("My father didn't keep his promise!");
    } else if (err.type == "find-lover") {
      console.log("Can't find my love!");
    }
  });
