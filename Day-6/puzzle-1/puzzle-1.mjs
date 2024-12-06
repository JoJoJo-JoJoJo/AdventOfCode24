import rdFile from "../../rdFile.mjs";
const data = "./day-6/data-test.txt";

rdFile(data).then((text) => {
  let grid = []; // 130 x 130
  let i, j; // cur pos of guard
  const results = text.match(/.+$/gm);

  results.forEach((str, a) => {
    const chars = str.split("");
    chars.forEach((char, b) => {
      if (char === "^") {
        i = a;
        j = b;
      }
    });
    grid.push(chars);
  });

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // [i, j]

  let dirsIdx = 0; // up, right, left, down <=> 0, 1, 2, 3

  const visited = new Set();
  let nextI, nextJ;

  do {
    visited.add([i, j]);

    nextI = i + dirs[dirsIdx][0];
    nextJ = j + dirs[dirsIdx][1];

    if (!(0 <= nextI < grid.length && 0 <= nextJ < grid[0].length) || nextI === grid.length || nextJ === grid[0].length) {
      break;
    }

    console.log(nextI, nextJ);

    if (grid[nextI][nextJ] === "#") {
      dirsIdx = (dirsIdx + 1) % 4; // Switch direction
    } else {
      i = nextI;
      j = nextJ;
    }
  } while (true);

  console.log(visited.size);
});
