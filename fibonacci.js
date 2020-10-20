// this method returns the first n
// characters of the fibonacci series
// printed as an array
function fibonacci_series(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
  }
  
  // this method returns the first n
  // characters of the fibonacci series
  // printed as an array but with a recursive function
  function recursive_fibonacci_series(n) {
    if (n === 1) {
      return [0, 1];
    } else {
      var arr = recursive_fibonacci_series(n - 1);
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
      return arr;
    }
  }
  
  console.log(fibonacci_series(8));
  console.log(recursive_fibonacci_series(8));
  
  function fibonacci_for(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    for (let i = 2; i < num; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
    return num2;
  }
  
  function fibonacci_while(num) {
    if (num == 1) return 0;
    if (num == 2) return 1;
    var num1 = 0;
    var num2 = 1;
    var sum;
    var i = 2;
    while (i < num) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
      i += 1;
    }
    return num2;
  }
  
  // this method returns the element at position number
  // inside fibonacci series
  // with a recursive function
  function recursive_fibonacci_at_index(num) {
    if (num == 1) return 0;
    if (num == 2) return 1;
    return (
      recursive_fibonacci_at_index(num - 1) +
      recursive_fibonacci_at_index(num - 2)
    );
  }
  
  console.log(fibonacci_for(5));
  console.log(fibonacci_while(5));
  console.log(recursive_fibonacci_at_index(5));