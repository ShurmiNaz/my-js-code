function findOldestNumber(numbers) {
     let oldOne = [0];
     for (let i = 0; i < numbers.length; i++) {
          const elements = numbers[i];
          if (elements > oldOne) {
               oldOne = elements;

          }


     }
     return oldOne;
};
const numbers = [43, 54, 75, 23, 42, 702, 11];
const myOldNumber = findOldestNumber(numbers);
console.log(myOldNumber);