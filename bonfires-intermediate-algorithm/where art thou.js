method 1:
function where(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    // return a Boolean value for filter callback using reduce method
    return srcKeys.reduce(function (res, key) {
      // reduce to Boolean value to be returned by reduce method
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    }, false);
  });
}

method 2:
function where(collection, source) {
//Array for storing the matched objects
  var arr = [];
  //For maintaining the number of key-value matches
  var count ;
  collection.forEach(function(collObj) { 
  //Initialize to zero for each object in collection
     count = 0 ; 
     for(var prop in source){
     //Check whether the key exists and the key-value is matched
        if( collObj.hasOwnProperty(prop) && collObj[prop] === source[prop])
        //Increase the count if matched
        count++; 
       }
     //Check whether all key-value pairs in source are matched
     if(count>=Object.keys(source).length){ 
        arr.push(collObj);
      }

    });
    return arr;
}
