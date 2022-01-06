// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  sen = sen.replace(/[^a-zA-Z]/g," ")
  console.log(sen)
  let words = sen.split(" ");
  
  let maxcount = 0;
  let arr = new Array();
  
  for(let i of words)
  {

    if(i.length > maxcount)
    {
      arr = [];
      arr.push(i);
      maxcount = i.length;
    }
    else if(i.lenght >= maxcount)
    {
      arr.push(i);
    }
  }

  console.log(arr);
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr , len)
{
  let result = [];
  while(arr.length>0)
  {
    let subarr = arr.splice(0,len);
    result.push(subarr);
  }
  
  console.log(result);
  
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  let result = "";
  for(let i of arr)
  {
    result = result + i.join('');
  }
  console.log(result.split(''));
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  
  if(str1.length === str2.length)
  {
    for(let i of str1)
    {
      if(str2.indexOf(i) === -1 )
      {
        return false;
      }
    }
  }
  else
  {
    return false;
  }
  return true;
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let result = "";
  str = str.toLowerCase();
  
  let vo = "aeiou";
  
  for(i in str)
  {
    if(vo.indexOf(str.charAt(i)) >= 0)
    {
    result = result + String.fromCharCode(str.charCodeAt(i) + 1).toUpperCase();
    }
    else
    {
      result = result + String.fromCharCode(str.charCodeAt(i) + 1)
    }
  }

  result.replace(/a|e|i|o|u/gi,char=>char.toUpperCase());
  
  console.log(result)
}

// Call Function
const output = longestWord('Hello, my name is Brad');

console.log(output);
