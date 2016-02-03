//solution 1
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


//solution 2 
function translate(str) {
    //finding all the consonants in the beginning of the str. 
    //by using && below I'm achiving a concept called Intersection of Regular Expressions
    //where your pattern finds the union of two or more RegEx rules. 
    //In Java you can achive this with RegEx special character '&&' 
    //but in Javascript you can use the following instead. 
    //Credit goes to http://stackoverflow.com/q/6595477
    var consChars = str.match(/^[a-z]/) && str.match(/[^aeiou]*/).join('');

    //if no consonants found (i.e. str starts with vowels)
    //use replace to remove consonants and construct newStr else add 'way' in the end
    if (consChars !== '') {
        newStr = str.replace(consChars, '') + consChars + "ay";
    } else {
        newStr = str + "way";
    }
    return newStr;
}

// solution 3:
function translate(str) {
    var strArr = [];
    var tmpChar;

    // check if the char is consonant using RegEx
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }

    // return initial str + "way" if it starts with vowel 
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else
        strArr = str.split("");

    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
    // convert array to string and concatenate "ay" at the end  
    return strArr.join("") + "ay";
}

translate("consonant");



// solution 4:
function translate(str) {
    function check(obj) {
        return ['a', 'i', 'u', 'e', 'o'].indexOf(str.charAt(obj)) == -1 ?
            check(obj + 1) : obj;
    }

    return str.substr(check(0))
        .concat((check(0) === 0 ?
            'w' : str.substr(0, check(0))) + 'ay');
}

// Fourth solution (recursive and declarative)

// Let's start with a recursive function that will go checking for the first letter of the string to be in an array of vowels. In case of consonants, call itself on the next characters until finding the first vowel. It'll return the index of whatever it finds to be the last initial consonant. (i.e. Schmidtsville's would be 3).

// Then we'll grab our string, remove the letters up until that index, concatenate either that same chunk of removed string or w accordingly, and then ay regardless.
