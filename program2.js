const decodeTheRing = function (s, p) {

    // write your code here

  };
  
  module.exports = decodeTheRing;


  function isMatch(message, key) {
    const m = message.length;
    const n = key.length;
  
    // Create a 2D DP table to store results
    const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false));
  
    // Empty string matches empty key
    dp[0][0] = true;
  
    // Handle cases where key starts with '*'
    for (let i = 1; i <= n; i++) {
      if (key[i - 1] === '*') {
        dp[0][i] = dp[0][i - 1];
      }
    }
  
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (key[j - 1] === '?') {
          dp[i][j] = dp[i - 1][j - 1];
        } else if (key[j - 1] === '*') {
          dp[i][j] = dp[i - 1][j] || dp[i][j - 1] || dp[i - 1][j - 1];
        } else {
          dp[i][j] = dp[i - 1][j - 1] && message[i - 1] === key[j - 1];
        }
      }
    }
  
    return dp[m][n];
  }