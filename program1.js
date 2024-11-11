const getTotalIsles = function (grid) {


  // write your code here
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const visited = new Array(rows).fill(false).map(() => new Array(cols).fill(false));

  const dfs = (i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W' || visited[i][j]) {
      return;
    }

    visited[i][j] = true;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'L' && !visited[i][j]) {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;

};

module.exports = getTotalIsles;


function numIslands(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const visited = new Array(rows).fill(false).map(() => new Array(cols).fill(false));

  const dfs = (i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W' || visited[i][j]) {
      return;
    }

    visited[i][j] = true;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'L' && !visited[i][j]) {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
}

// Example usage:
const grid = [
  ['L', 'L', 'L', 'L', 'W'],
  ['L', 'L', 'W', 'L', 'W'],
  ['L', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
];

const numIslandsCount = numIslands(grid);
console.log(numIslandsCount); // Output: 1