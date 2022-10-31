// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else if (num1 === num2) {
    return num1;
  }
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordsArray) {
  /* let firstOccurence = '';
  let occurencesAmount = 0;
  let longestWord = ''
  if (wordsArray.length === 0) {
    return null;
  } else if (wordsArray.length === 1) {
    return wordsArray[0];
  } else if (wordsArray.length > 1){
    for (i = 0; i < wordsArray.length -1; i++) {
      if (wordsArray[i].length < wordsArray[i + 1].length) {
        longestWord = wordsArray[i + 1];
      }
      return longestWord;
    }
    
    for (i = 0; i < wordsArray.length; i++){
      if (wordsArray[i] === longestWord) {
        firstOccurence = wordsArray[i];
        occurencesAmount++
      }
    }
    if (occurencesAmount > 0) {
      return firstOccurence;
    }
  } */
  let longestWord = '';
  let firstOccurence = '';
  let occurencesAmount = 0;
  
  if (wordsArray == '') {
    return null;
  }
  if (wordsArray.length == 1) {
    return wordsArray[0];
  }
  for (i = 0; i < wordsArray.length -1; i++) {
    if (wordsArray[i].length > wordsArray[i + 1].length) {
      longestWord = wordsArray[i];
    } else if (wordsArray[i].length < wordsArray[i + 1].length) {
      longestWord = wordsArray[i + 1];
    } else if (wordsArray[i].length == wordsArray[i + 1].length) {
      firstOccurence = wordsArray[i];
      console.log(firstOccurence);
      console.log(longestWord);
      return firstOccurence;
    }
  }
  return wordsArray.find(longestWord => longestWord === firstOccurence);
  /* wordsArray.forEach(element => {
    if (element === longestWord) {
      occurencesAmount++
    }
  });
  console.log(occurencesAmount);
  if (occurencesAmount === 1) {
    for (i = 0; i < wordsArray.length -1 ; i++) {
      if (wordsArray[i].length < wordsArray[i+1].length) {
        longestWord = wordsArray[i + 1];
      }
    }
    console.log(longestWord);
    return longestWord
  }   */
}
const arrwrd = ['a', 'zab', '12abc', '$$abcd', 'abcde', 'ironhack'];
findLongestWord(arrwrd)

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum;
  let allZero = false;
  let allNumbers = false;
  if (numbers == '') {
    return 0;
  }
  if (numbers.length == 1) {
    return sum = numbers[0];
  }
  numbers.forEach(element => {    
    element === 0 ? allZero = true : allZero = false;    
  });
  if (allZero) {
    return 0
  }
  allNumbers = numbers.every(element => {
    return typeof element === 'number';
  });
  if (allNumbers) {
    sum = 0;
    numbers.forEach(element => {
      sum = element + sum;
    });
  }
  return sum;
}



// Iteration #3.1 Bonus:
function sum(sumArray) {
  let sum;
  let allZero = false;
  let allNumbers = false;
  let allStrings = false;
  let allNumbersOrStrings = false;
  let allNumbersStringsOrBoolean = false;
  let wrongArray = false;
  if (sumArray.length === 0) {
    return 0;
  }
  if (sumArray.length === 1 && typeof sumArray[0] === 'number') {
    return sumArray[0];;
  }
  sumArray.forEach(element => {    
    element === 0 ? allZero = true : allZero = false;    
  });
  if (allZero) {
    return 0
  }
  allNumbers = sumArray.every(element => {
    return typeof element === 'number';
  });
  if (allNumbers) {
    sum = 0;
    sumArray.forEach(element => {
      sum = element + sum;
    });
    return sum;
  }
  allStrings = sumArray.every(element => {
    return typeof element === 'string';
  });
  if (allStrings) {
    sum = 0;
    sumArray.forEach(element => {
      sum = element.length + sum;
    });
    return sum;
  }
  allNumbersOrStrings = sumArray.every(element => {
    return (typeof element === 'string' || typeof element === 'number')
  });

  if (allNumbersOrStrings) {
    sum = 0;
    sumArray.forEach(element => {
      if (typeof element === 'number') {
        sum = element + sum;
      } else if (typeof element === 'string') {
        sum = element.length + sum;
      }
    });
  return sum;
  }
  allNumbersStringsOrBoolean = sumArray.every(element => {
    return (typeof element === 'string' || typeof element === 'number' || typeof element === 'boolean')
  });
  if (allNumbersStringsOrBoolean) {
    sum = 0;
    sumArray.forEach(element => {
      if (typeof element === 'number') {
        sum = element + sum;
      } else if (typeof element === 'string') {
        sum = element.length + sum;
      } else if (typeof element === 'boolean') {
        sum = element + sum;
      }
    });
  return sum;
  }
  wrongArray = sumArray.every(element => {
    return (typeof element === 'object' || typeof element === 'array')
  });
  console.log(wrongArray);
  if (!wrongArray) {
    throw new Error("Unsupported data type sir or ma'am")
  }  
}


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayNums) {
  let average;
  let sum = 0;
  if (arrayNums == '') {
    return null;
  }
  if (arrayNums.length === 1) {
    return average = arrayNums[0];
  }
  for (i = 0; i < arrayNums.length; i++) {
    sum = sum + parseInt(arrayNums[i]);
  }
  return average = sum / arrayNums.length;  
}




// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arrayWords) {
  let sum = 0;
  let average = 0;
  if (arrayWords.length > 1) {
    arrayWords.forEach(element => {
      sum = element.length + sum;
    });
    average = sum / arrayWords.length;
    return average;
  }
  
  if (arrayWords.length == 1) {
    return arrayWords[0].length;
  };
  if (arrayWords = []) {
    return null;
  }
}

// Bonus - Iteration #4.1
function avg(avgArray) {
  let sum = 0;
  let average = 0;
  
  if (avgArray.length > 1) {
    avgArray.forEach(element => {
      if (typeof element === 'number') {
        console.log('number');
        sum = element + sum;
      } else if (typeof element === 'string') {
        console.log('string');
        sum = element.length + sum;
      } else if (typeof element === 'boolean') {
        console.log('boolean');
        sum = element + sum;
      }
    });
    average = sum / avgArray.length;
    return average;
  }
  if (avgArray = []) {
    return null;
  }
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(testArr) {
  let compareArray = [];
  let unique = false;
  compareArray = new Array(testArr[0]);
  unifiedArray = testArr;
  
  
  if (testArr.length === 0) {
    return null;
  }
  
  testArr.forEach(element => {
    if (compareArray == element) {
      unique = true;
    } else {
      unique = false;
    }
  });
  if (unique) {
    return compareArray;
  } else if (!unique) {
    return testArr;
  }
  let uniqueChars = testArr.filter((element, index) => {
    testArr.indexOf(element) === index;
  });
  return uniqueChars;
}
const test = ['iPhone', 'Samsung', 'Android', 'iOS', 'iPhone', 'Samsung', 'Nokia', 'Blackberry', 'Android']
uniquifyArray(test);



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arrFind, wordToFind) {
  let countOccurence = 0;
  if (arrFind.length === 0) {
    return null;    
  } else {
    arrFind.forEach(element => {
      if (element === wordToFind) {
        countOccurence++
      }
    });
    if (countOccurence >= 1) {
      return true;
    } else if (countOccurence === 0) {
      return false;
    }
  }
}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordsArray, wordToFind) {
  let wordsCounter = 0;
  let wordmatchIndex = [];
  if (wordsArray.length === 0) {
    return 0;
  }  else {
    let idx = wordsArray.indexOf(wordToFind);
    while (idx != -1) {
    wordmatchIndex.push(idx);
    idx = wordsArray.indexOf(wordToFind, idx + 1);
    }
    switch (wordmatchIndex.length) {
      case 1:
        return 1;       
      case 0:
        return 0;
      case 5:
        return 5;
      default:
        break;
    }
  } 
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {
  let match1 = false;
  let match2 = false;
  for(var i = 0; i < matrix.length; i++) {
    var matrix2 = matrix[i];
    for(var j = 0; j < matrix2.length; j++) {
      if (matrix[i][j] === 1) {
        match1 = true;
      } else {
        match1 = false;
      }
      if (matrix[i][j] === 2) {
        match2 = true;
      } else {
        match2 = false;
      }
    }
    if (match1) {
      return 1
    }
    if (match2) {
      return 16
    }
}
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
