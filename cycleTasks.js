const table = [
  ["P", "R", "S", "D"],
  ["L", "G", "B", "C"],
  ["L", "A", "X", "G", "H", "X"],
  ["A", "A", "B", "D"],
];

function removeDuplicatedValues(table) {
  const result = [];
  const set = new Set();

  for (let i = table.length - 1; i >= 0; i--) {
    const arr = table[i].filter((char) => {
      if (!set.has(char)) {
        set.add(char);

        return true;
      }

      return false;
    });

    result.unshift(arr);
  }
  console.log(result);

  return result;
}

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
};

//fizzBuzz(5);

const findVowels = (string) => {
  if (!string) {
    return 0;
  }

  let count = 0;
  const vowels = "aieou";

  for (const letter of string.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  
  return count;
};


//console.log(findVowels("hello"));

const printHashLines = () => {
  for (let i = 1; i <= 5; i++) {
    console.log('#'.repeat(i));
    
  }
}

//printHashLines();

const getSum = (arr) => {

  let sum = 0;

  for (const n of arr) {
    sum += n;
    console.log(n);
  }
  console.log(sum);  
}

//getSum([1, 2, 3]);

const getDaysOfWeek = (lang) => {
  const arr = [];
   
  if (lang === 'uk') {
    arr.push('Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пʼятниця', 'Субота', 'Неділя');
  } else {
    arr.push('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
  } 
  return arr; 
}

//console.log(getDaysOfWeek('en'));

const getDaysOfWeek2 = (lang) => {
  const arr = [];

  switch (lang) {
    case 'uk':
      arr.push('Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пʼятниця', 'Субота', 'Неділя');
      break;

    case 'en':
      arr.push('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
      break;
    
    default:
      break;
  }
  return arr;
}

//console.log(getDaysOfWeek2('uk'));

const checkNumber = (a) => {
  const result = (a > 0 && a <= 5);
  console.log(result ? 'Вiрно' : 'Невiрно');
}

//checkNumber(2);

const func = (a) => {
  const isValid = (a === 0 || a === 2);
  return isValid ? (a + 7) : (a / 10);
}
//console.log(func(2));

 