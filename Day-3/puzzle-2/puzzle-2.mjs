import { readFile } from "fs/promises";
const data = "./day-3/data.txt";
let text = "";
let total = 0;
let isEnabled = true;

rdFile(data).then(() => {
  const results = text.match(/(do(n't)?\(\))|(mul\(\d+,\d+\))/gm) ?? [];

  for (let i = 0; i < results.length; i++) {
    const str = results[i];

    if (str == "do()") {
      isEnabled = true;
    } else if (str == "don't()") {
      isEnabled = false;
    } else if (isEnabled) {
      const strRes = str.match(/\d+/g);
      total += parseInt(strRes[0]) * parseInt(strRes[1]);
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
