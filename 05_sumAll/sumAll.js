const sumAll = function(x,y) {

  let sum = 0;
  let start = "";
  let end = "";

  if((typeof x ==="number" && x>=0) && (typeof y ==="number" && y>=0)){

    if (x>y) {
      start=y;
      end=x;
      return add(start,end);
      
    } else {
      start=x;
      end=y;
      return add(start,end);
    }
  }else{
    return sum="ERROR";
  }

  function add(start,end){
    for(i=start; i<=end; i++){
    sum=sum+i;
    }
    return sum;
  }
}

// Do not edit below this line
module.exports = sumAll;