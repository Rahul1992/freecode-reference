//sol 1:
function fearNotLetter(str) {

    for (var i = 0; i < str.length; i++) {
        /* code of current character */
        var code = str.charCodeAt(i);

        /* if code of current character is not equal to first charcter + no of iteration
        hence character has been escaped*/
        if (code !== str.charCodeAt(0) + i) {

            /* if current character has escaped one character find previous char and return*/
            return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}
fearNotLetter("abcde");


//sol 2:

function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index){
    if (str.charCodeAt(index) == compare) { ++compare; }
    else { missing = String.fromCharCode(compare); }
  });

  return missing;
}

// https://github.com/freecodecamp/freecodecamp/wiki/bonfire-missing-letters


function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index){
    if (str.charCodeAt(index) == compare) { ++compare; }
    else { missing = String.fromCharCode(compare); }
  });

  return missing;
}