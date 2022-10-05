function checkEvenOddNumber(numbers) {
     let even = [];
     let odd = [];
     for (let i = 0; i < numbers.length; i++) {
          const elements = numbers[i];
          if (elements % 2 == 0) {
               even.push(elements);

          }
          else {
               if (elements % 2 == 1) {
                    odd.push(elements);

               }
          }

     }

     return [even, odd];

};

const numbers = [31, 32, 43, 21, 22, 56];
const isEvenNumber = checkEvenOddNumber(numbers);
console.log(isEvenNumber);
