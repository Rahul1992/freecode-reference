function myReplace(str, before, after) {
  var i = str.indexOf(before);
   if( str[i] === str[i].toUpperCase()){
     after = after.charAt(0).toUpperCase() + after.slice(1);
   }
  str = str.replace(before , after);
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");