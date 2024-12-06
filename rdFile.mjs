import { readFile } from "fs/promises";

async function rdFile(file) {
  try {
    const data = await readFile(file);
    const text = data.toString();

    return text;
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}

export default rdFile;
