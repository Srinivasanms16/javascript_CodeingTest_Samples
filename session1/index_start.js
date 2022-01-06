// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str.split('').reverse().join('');
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {

  let reverse = str.split('').reverse().join('');

if(str === reverse){
  console.log("Is Palindrom")
}
else
{
   console.log("Not Palindrom")
}
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(num) {
  return parseInt(num.split('').reverse().join(''));
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  let splitedstr = str.split(' ');
  let result = new String();
  for(let i of splitedstr)
  {
    let firstChar = i.substring(0,1).toUpperCase() + i.substring(1);
    result = result + " " + firstChar;
  }
  console.log(result.trim());
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  function maxCharacter(str) {
  
    let splitedstr = str.toLowerCase().split('');
    let charMap = new Map();
    
    for(let i of splitedstr)
    {
      if(charMap.has(i))
      {
        charMap.set(i ,charMap.get(i) + 1);
      }
      else
      {
        charMap.set(i,1);
      }
    }
     
     let resultchar , maxCount;
     
     for(const[char,cou] of charMap)
     {
       if(!resultchar && !maxCount)
       {
         resultchar = char;
         maxCount = cou;
       }
       else if(cou > maxCount)
       {
         resultchar = char;
         maxCount = cou;
       }
     }
     
     console.log(resultchar);
    
  }
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
 
  let result = '';
  for(let i = 0 ; i <= 15;i++)
  {
    result = '';
    if(i % 3 === 0)
    {
      result += 'Fizz';
    }
    if(i % 5 === 0)
    {
      result += 'Buzz';
    }
    console.log(result || i);
  }  
}




// Call Function
const output = reverseString('hello');

console.log(output);
