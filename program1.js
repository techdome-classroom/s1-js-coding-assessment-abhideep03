const getTotalIsles = function (grid) {
  // write your code here
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const visited = new Array(rows)
    .fill(false)
    .map(() => new Array(cols).fill(false));

  const DFS = (i, j) => {
    if (
      i < 0 ||
      i >= rows ||
      j < 0 ||
      j >= cols ||
      grid[i][j] === "W" ||
      visited[i][j]
    ) {
      return;
    }

    visited[i][j] = true;
    DFS(i + 1, j);
    DFS(i - 1, j);
    DFS(i, j + 1);
    DFS(i, j - 1);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "L" && !visited[i][j]) {
        count++;
        DFS(i, j);
      }
    }
  }

  return ;
};

module.exports = getTotalIsles;
