import { readFile } from "fs/promises";
const data = "./day-4/data.txt";
let text = "";
let total = 0;

// [[x, y], [x, y], etc...]
const [dru, drd, dld, dlu] = [[1, 1], [1, -1], [-1, -1], [-1, 1]];

rdFile(data).then(() => {
  const grid = []; // 140 x 140 grid.
  const results = text.match(/\w+$/gm);

  if (results === null) {
    throw new TypeError("results is null");
  }

  results.forEach((str) => {
    grid.push(str.split(""));
  });

  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      if (grid[i][j] !== "A") continue;

      const tr = grid[i + dru[1]][j + dru[0]];
      const br = grid[i + drd[1]][j + drd[0]];
      const bl = grid[i + dld[1]][j + dld[0]];
      const tl = grid[i + dlu[1]][j + dlu[0]];
      
      if ((tr !== "S" && tr !== "M") || (br !== "S" && br !== "M") || (bl !== "S" && bl !== "M") || (tl !== "S" && tl !== "M")) continue;
      
      if (tr == bl || br == tl) continue;

      total++;
    }
  }

  console.log(total);
});

async function rdFile(file) {
  try {
    const data = await readFile(file);
    text = data.toString();
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}
