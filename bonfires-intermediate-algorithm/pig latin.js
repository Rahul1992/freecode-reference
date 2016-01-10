function translate(str) {
  // Create variables to be used
  var newstr = '';
  var re = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(re)) {
    newstr = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(re)[0]);
   
    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    newstr = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return newstr;
}

translate("clifornia");
