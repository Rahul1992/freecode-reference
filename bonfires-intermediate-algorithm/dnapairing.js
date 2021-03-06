function pair(str) {
    var result = [];
    var find = function(strand) {
        switch (strand) {
            case "A":
                result.push(["A", "T"]);
                break;
            case "T":
                result.push(["T", "A"]);
                break;
            case "G":
                result.push(["G", "C"]);
                break;
            case "C":
                result.push(["C", "G"]);
                break;
        }
    };
    for (var i = 0; i <= str.length; i++) {
        find(str[i]);
    }
    return result;
}

pair("GCG");

// Code Explanation:
// The program is very simple, the best solution that I have come up with is to use a switch to catch all the possible four elements. Using if statements would take too much code. You could also use Regular Expressions.
// Since we have to the original and the pair, I decided to take all four cases instead of the base two.
// Create an empty array and use the search function to push the right values to the array and return them.


// solution 2:

function pair(str) {
  //define a map object with all pair possibilities 
  var map = {T:'A', A:'T', G:'C', C:'G'};
  //split str into a a char Array
  strArr = str.split('');
  //replace each Array item with a 2d Array using map
  for (var i=0;i<strArr.length;i++){
    strArr[i]=[strArr[i], map[strArr[i]]];
  }
 return strArr;
}