// logic : http://math.hws.edu/eck/cs124/javanotes3/c9/ex-9-3-answer.html
var convert= function(num){
    var numbers = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    var roman = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
    numbers.reverse();//not necessary if array in decreasing order.
    roman.reverse();//not necessary if array in decreasing order.
    var result = '';
  for(var i=0 ; i < numbers.length;i++){
    while(numbers[i]<= num){
     result += roman[i];
      num -=numbers[i];
    }
  }
  return result;
};
convert(36);
