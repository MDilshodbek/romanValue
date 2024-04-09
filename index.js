const romanValues = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
};

const input = "MCMXCIV";

const romanNum = (input) => {
  let sum = 0

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];
    const nextChar = input[i + 1];

    if (romanValues[currentChar] < romanValues[nextChar]) {
      sum -= romanValues[currentChar];
    } else {
      sum += romanValues[currentChar];
    }
  }

  return sum;
};

console.log(romanNum(input));


// const romanValues = {
//   "I": 1,
//   "V": 5,
//   "X": 10,
//   "L": 50,
//   "C": 100,
//   "D": 500,
//   "M": 1000,
// };

// const input = "LVIII";
// const keys = Object.keys(romanValues)
// const Rim = (input) => {
//   for (let i = 0; i < input.length; i++) {
//     if (keys.includes(input[i])) {
//       input = input.replaceAll(input[i], romanValues[input[i]]);
//     }
//   }
//   return input;
// };
// console.log(Rim(input));
