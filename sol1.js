function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log("Click Count : " + count);
  };
}

let clickCounter = createCounter();
clickCounter();
clickCounter();

/**
 * Click Count : 1
Click Count : 2 
*/
