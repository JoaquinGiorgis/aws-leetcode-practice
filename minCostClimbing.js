/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function(cost) {
    let prev2 = cost[0]; 
    let prev1 = cost[1]; 
  
    for (let i = 2; i < cost.length; i++) {
      const cur = cost[i] + Math.min(prev1, prev2)
      prev2 = prev1
      prev1 = cur
    }
  
    return Math.min(prev1, prev2);
  };