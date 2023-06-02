const { deepEqual } = require('chai').assert;

// Input - a number of coins, ex. $10, $5, $2, $1. A number to make change for, ex. $17
// Output - Least amount of coins to make change

// 1. Create a function that takes in an array of coins and a number to make change for
function coinChange(coins, num) {
  // 2. Create a variable to hold the number of coins
  let coinCount = [];
  // 3. Sort the array of coins from largest to smallest
  coins.sort((a, b) => b - a);
  // 4. Loop through the array of coins
  for (let i = 0; i < coins.length; i++) {
    // 5. If the number to make change for is greater than or equal to the current coin
    if (num >= coins[i]) {
      // 6. Add the current coin to the number of coins
      coinCount.push(coins[i]);
      // 7. Subtract the current coin from the number to make change for
      num -= coins[i];
    }
  }
  // 8. Repeat steps 5-7 until the number to make change for is less than the current coin
  // 9. Return the number of coins
  return coinCount;
}

deepEqual(coinChange([5, 5, 2, 10, 1], 17), [10, 5, 2]);
deepEqual(coinChange([5, 5, 2, 10, 1, 2, 1], 6), [5, 1]);
deepEqual(coinChange([10, 5, 5, 2, 10, 1, 2, 1], 23), [10, 10, 2, 1]);