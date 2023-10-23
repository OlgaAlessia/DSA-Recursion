/** product: calculate the product of an array of numbers. */

function product(nums) {
    if (nums.length === 0) return 1;

    return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestWord = 0) {
    if (idx === words.length) return longestWord;

    longestWord = Math.max(words[idx].length, longestWord);
    return longest(words, idx + 1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newString = "") {
    if (idx >= str.length) return newString;
    newString += str[idx];

    return everyOther(str, idx + 2, newString);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
    let idxLeft = idx;
    let idxRight = str.length - idx - 1;
    if (idxLeft >= idxRight) return true;
    if (str[idxLeft] !== str[idxRight]) return false;

    return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
    if (idx === arr.length) return -1;
    if (arr[idx] === val) return idx;
    return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newString = "") {
    if (newString.length === str.length) return newString;

    newString += str[str.length - idx - 1];

    return revString(str, idx + 1, newString);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    let arr = [];
    for (let property in obj) {
        if (typeof obj[property] === 'string') arr.push(obj[property]);
        if (typeof obj[property] === 'object') arr.push(...gatherStrings(obj[property]));
    }

    return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low = 0, high = arr.length) {

    if (low > high) return -1

    let mid = Math.floor((high + low) / 2);
    if (arr[mid] == val) return mid;

    if (arr[mid] < val) return binarySearch(arr, val, mid + 1, high);

    //arr[mid] > val 
    return binarySearch(arr, val, low, mid - 1);
}


/**
 * Write a function that sums squares of numbers in list that may contain more lists
 */
function sumSquares(l) {
    let sumsquare = 0;
    for (let key in l) {
        if (typeof l[key] === 'object') sumsquare += sumSquares(l[key]);
        if (typeof l[key] === 'number') sumsquare += (l[key] ** 2);
    }
    return sumsquare;
}


/**
 * Write a function that sums squares of numbers in list that may contain more lists
 */
function realSize(Arrays) {
    let sizeArr = 0;
    for (let key in Arrays) {
        if (typeof Arrays[key] === 'object') sizeArr += realSize(Arrays[key]);
        if (typeof Arrays[key] === 'number') sizeArr += 1;
    }
    return sizeArr;
}


/**
 * Write a recursive function that return an array containing repetitions of the number argument.
 * If the times argument is negative, return an empty array.
 */
function replicate(times, number) {
    if (times <= 0) return [];
    
    let arr = replicate(times-1, number);

    arr.push(number);
    return arr;
}


module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings,
    binarySearch,
    sumSquares,
    realSize,
    replicate
};
