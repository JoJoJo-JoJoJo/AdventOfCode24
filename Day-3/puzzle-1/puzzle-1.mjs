import { readFile } from "fs/promises";
const data = "./day-3/data.txt";
let text = "";

rdFile(data).then(() => {
  const results = text.match(/mul\(\d+,\d+\)/gm) ?? [];
  console.log(results)
  let total = 0;

  for (let i = 0; i < results.length; i++) {
    const str = results[i];
    const strRes = str.match(/\d+/g);
    console.log(strRes)
    total += parseInt(strRes[0]) * parseInt(strRes[1]);
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
