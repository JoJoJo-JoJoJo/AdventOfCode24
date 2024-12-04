import { readFile } from "fs/promises";
const data = "./day-4/data.txt";
let text = "";
let total = 0;

// [[x, y], [x, y], etc...]
const dirs = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];

rdFile(data).then(() => {
  const grid = []; // 140 x 140 grid.
  const results = text.match(/\w+$/gm);
  
  if (results === null) {
    throw new TypeError("results is null");
  }
  
  results.forEach((str) => {
    grid.push(str.split(""));
  });

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== "X") continue;
      dirs.forEach((dir) => {
        const [x, y] = dir;

        // console.log(!isValidY(i + y));
        if (!isValidY(i + y) || !isValidX(j + x)) return;

        if (grid[i + y][j + x] === "M") {

          if (!isValidY(i + (2 * y)) || !isValidX(j + (2 * x))) return;

          if (grid[i + (2 * y)][j + (2 * x)] === "A") {

            if (!isValidY(i + (3 * y)) || !isValidX(j + (3 * x))) return;

            if (grid[i + (3 * y)][j + (3 * x)] === "S") {
              total++;
            }
          }
        }
      });
    }
  }

  console.log(total);
});

function isValidX(num) {
  return num >= 0 && num < 140;
}

function isValidY(num) {
  return num >= 0 && num < 140;
}

async function rdFile(file) {
  try {
    const data = await readFile(file);
    text = data.toString();
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}
