// You will create a program that takes a sentence, then search for a word in it and replaces it for a new one while preserving the uppercase if there is one.
// Solution1:

function myReplace(str, before, after) {
  var i = str.indexOf(before);
   if( str[i] === str[i].toUpperCase()){
     after = after.charAt(0).toUpperCase() + after.slice(1);
   }
  str = str.replace(before , after);
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");


// Solution 2:

function myReplace(str, before, after) {
//Create a regular expression object
  var re = new RegExp(before,"gi");
//Check whether the first letter is uppercase or not
  if(/[A-Z]/.test(before[0])){
  //Change the word to be capitalized
    after = after.charAt(0).toUpperCase()+after.slice(1);
     }
     //Replace the original word with new one
  var  newStr =  str.replace(re,after);

 return newStr;

}


// Solution 3:

function myReplace(str, before, after) {

    // create a function that will change the casing of any number of letter in parameter "target" 
    // matching parameter "source"
    function applyCasing(source, target) {
        // split the source and target strings to array of letters
        var targetArr = target.split("");
        var sourceArr = source.split("");
        // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortes array
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){
            // find out the casing of every letter from sourceArr using regular expression
            // if sourceArr[i] is upper case then convert targetArr[i] to upper case 
            if (/[A-Z]/.test(sourceArr[i])) {
                targetArr[i] = targetArr[i].toUpperCase();
            }
            // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
            else targetArr[i] = targetArr[i].toLowerCase();
        } 
        // join modified targetArr to string and return
        return (targetArr.join(""));
    }


    // replace "before" with "after" with "before"-casing 
    return str.replace(before, applyCasing(before, after));
}