const { sameOrderedMembers } = require('chai').assert;

/*
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
F(n) * F(n+1) = prod.

productFib takes an integer (prod) and returns an array
[F(n), F(n+1), true]

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return
[F(n), F(n+1), false]
*/

function productFib(prod){
  // TODO
  return [55, 89, true];
}

try {
  sameOrderedMembers(productFib(4895), [55, 89, true], 'Test 1');
  sameOrderedMembers(productFib(5895), [89, 144, false], 'Test 2');
  sameOrderedMembers(productFib(74049690), [6765, 10946, true], 'Test 3');
  sameOrderedMembers(productFib(84049690), [10946, 17711, false], 'Test 4');
  sameOrderedMembers(productFib(193864606), [10946, 17711, true], 'Test 5');
  sameOrderedMembers(productFib(447577), [610, 987, false], 'Test 6');
  sameOrderedMembers(productFib(602070), [610, 987, true], 'Test 7');
} catch (error) {
  console.log("Test failure ==>", error);  
}
