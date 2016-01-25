// You will create a program that takes a sentence, then search for a word in it and replaces it for a new one while preserving the uppercase if there is one.

function myReplace(str, before, after) {
  var i = str.indexOf(before);
   if( str[i] === str[i].toUpperCase()){
     after = after.charAt(0).toUpperCase() + after.slice(1);
   }
  str = str.replace(before , after);
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");