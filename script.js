//Első Feladat: Sum of array singles

function repeats(arr) {
    let i;
    let sum = 0;
    arr.sort((a, b) => {
      return a - b;
    });
    for (i = 0; i < arr.length; i += 2) {
      if (arr[i] !== arr[i + 1]) {
        sum += arr[i];
        i--;
      }
    }
  
    return sum;
  }

//Második Feladat: -
//Harmadik feladat: Insert dashes

function insertDash(num) {
    let arr = num.toString().split('').join('-').split('');
 
     for (let i = 1; i < arr.length - 1; i += 2) {
     if (arr[i - 1] % 2 === 0 || arr[i + 1] % 2 === 0) {
       arr[i] = '';
     }
   }
   return arr.join('');
 }
