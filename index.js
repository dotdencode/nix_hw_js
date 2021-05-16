// task 1

function sumNumbers(arr) {
    
    if (arr.length === 0 || arr.length === 1) {
        return 0;
    }

    return Math.max(...arr) - Math.min(...arr);
}

// task 2

function biggerThenNumber(string, number) {
    let result = [];

    return string.split(' ').filter((item) => {
        if (item.length > number) {
            result.push(item);
        }
    });

    return result;
}

// task 3

function getMissingElement(arr) {
    arr.sort((a, b) => a - b);

    let correctArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   
    return +(correctArr.filter(item => (!(arr.includes(item))) ? item : null));
}

// task 4

function substringInString(str_1, str_2) {
    str_1.split('');
    str_2.split('');

    return str_1.includes(str_2) ? true : false;
}

// task 5

function averages(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push((arr[i] + arr[i + 1]) / 2);
    }
    result.pop();

    return result;
}

// task 6

function maxValue(number) {
    return +((number.toString().split('').map(item => +item).reverse().sort((a, b) => b - a)).join(''));
}

// task 7

function isCoolName(str) {
    const scores = {
        "A": 100, "B": 14, "C": 9, "D": 28, "E": 145,
        "F": 12, "G": 3,"H": 10, "I": 200, "J": 100, "K": 114, 
        "L": 100, "M": 25,"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, 
        "S": 113,"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23
    }

    let upperArray = str.toUpperCase().split('');
    let sum = 0;

    if (Object.keys(scores).includes(...upperArray)) {
        for (let key in scores) {
            if (upperArray.includes(...key)) {
                sum += scores[key];
            }
        }
    };

    if (sum <= 60) {
        return 'NOT TOO GOOD';
    } else if (61 <= sum && sum <= 300) {
        return 'PRETYY GOOD';
    } else if (301 <= sum && sum <= 599) {
        return 'VERY GOOD';
    } else {
        return 'THE BEST';
    }
}

// task 8

function hasVowels(str) {
    return str.split('').filter(item => 'aeiouy'.includes(item)).length;
}

// task 9

function removeLetters(str) {
    if ('abc'.includes(...str)) {
        return str.replaceAll(/[abc]/g, '');
    }

    return null;
}

// task 10

function uniqueArray(arr_1, arr_2) {
    return [...new Set(arr_1.concat(arr_2))];
}

// task 11

function invertClone(obj) {
    let clone = {};
    let objKeys = Object.keys(obj);

    for (let i = 0; i < objKeys.length; i++) {
        clone[obj[objKeys[i]]] = objKeys[i];
    }

    return clone;
}

// task 12

function calculateDiffence(obj, number) {
    if (Object.keys(obj).length === 0) {
        return null;
    }

    let sum = Object.values(obj).reduce((accum, item) => accum + item, 0);

    if (sum < number) {
        return null;
    }

    return sum - number;
}

// task 13

// Не удалось сделать :(

// task 14

function doesBrickFit(a, b, c, w, h) {
    if ((b <= w) && (c <= h)) {
        return true;
    }

    if ((a <= w) && (c <= w)) {
        return true;
    }

    if ((a <= w) && (b <= h)) {
        return true;
    }

    return false;
}

console.log(doesBrickFit(1, 2, 2, 1, 1));
