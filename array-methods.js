function MyArray(){
};

MyArray.prototype = {

  myPop: function(anArray) {
    var arrLength = anArray.length; // gets array length
    var poppedItem = anArray[arrLength - 1]; // saves item to be popped

    // pops item off of array by shortening the length of the array
    anArray.length = arrLength - 1;
    return poppedItem;
  },

  myPush: function(anArray, anElement) {
    var arrLength = anArray.length; // gets array length
    anArray.length = arrLength + 1; // increases array length
    anArray[arrLength] = anElement; // adds element to lengthened array
    return anArray.length; // returns array length
  },

  myShift: function(anArray) {
    var arrLength = anArray.length; // gets array length
    shiftedItem = anArray[0]; // gets 1st element which will be removed

    // create for loop that will assign elements to the index before it
    for (var i = 0; i < arrLength - 1; i++){
      anArray[i] = anArray[i + 1]; // assigns elements to new index
    }
    anArray.length = arrLength - 1;

    return shiftedItem;
  },

  myUnshift: function(anArray, anElement) {
    var arrLength = anArray.length; // gets original array length
    anArray.length = anArray.length + 1; // increases length of array

    // for loop that will reassign elements to original array
    for (var j = arrLength; j > 0; j--) {
      anArray[j] = anArray[j - 1];
    }

    // add element to first index in array
    anArray[0] = anElement;

    return anArray.length;
  },

  myUnique: function(anArray) {

    // filter over the array pushes each kind of item
    // from original into a new array to be returned
    var uniqueArray = anArray.filter(isUnique);

    // function that checks the items of array
    function isUnique(item, position, anArray) {

      // returns true or false so filter can determine whether or not
      // to push item into unique array
      return anArray.indexOf(item) == position;

    };

    return uniqueArray;
  },

  myFrequency: function(anArray) {
    var lettersArray = [];
    var holderArray = [];
    var arrLength = anArray.length;
    var uniqueLetterObject = {};
    var results = {};

    // push all words into one array of letters
    // perhaps add loop to remove duplicate letters from each word in array
    for (var k = 0; k < arrLength; k++) {
      holderArray = anArray[k].split('');
      lettersArray = lettersArray.concat(holderArray);
    }

    // remove duplicates from array of all letters
    var uniqueLetterArray = implementMyArray.myUnique(lettersArray);
    var uniqueArrLength = uniqueLetterArray.length;

    // intialize object with elements from uniqueLetterArray, value = 0
    for (var m = 0; m < uniqueArrLength; m++) {
      uniqueLetterObject[uniqueLetterArray[m]] = 0;
    }

    // look for each uniqueLetter in each word in anArray
    for (var c = 0; c < arrLength; c++) { // for loop to grab each word
      // forEach to run the check for each letter in uniqueLetterArray
      uniqueLetterArray.forEach(charCheck);

      // function to check letters of word and increase value in object
      function charCheck(item, index, uniqueArray) {
        for (var b = 0; b < anArray[c].length; b++) {
          var wordChecked = anArray[c];
          // increases value in object if letter is in word
          if (item === anArray[c].charAt(b)) {
              uniqueLetterObject[uniqueLetterArray[index]] += 1;
              break;
          }
        }
      };
    }

    // code to put letters with highest frequency into results object
    for (var n = arrLength; n > 0; n--) {
      if (Object.keys(results).length === 0) {
        for (var d = 0; d < uniqueArrLength; d++) {
         if (uniqueLetterObject[uniqueLetterArray[d]] === n) {
            results[uniqueLetterArray[d]] = n;
          }
        }
      }else {
        break;
      }
    }

    // returns letters that are in the most words
    return results;
  }
};

var implementMyArray = new MyArray();



module.exports = MyArray; // not the Array object with methods is requireable

