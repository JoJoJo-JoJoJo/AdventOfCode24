import { readFile } from "fs/promises";
const dataRules = "./day-5/data-rules.txt";
const dataUpdates = "./day-5/data-updates.txt";
let text = "";
let total = 0;

const mapBefore = new Map();
const mapAfter = new Map();

rdFile(dataRules).then(() => {
  const rules = text.match(/.+$/gm);
  
  rules.forEach((rule) => {
    const nums = rule.split("|");
    
    if (mapAfter.get(nums[0])) {
      const curVal = mapAfter.get(nums[0]);
      mapAfter.set(nums[0], [...curVal, nums[1]]);
    } else {
      mapAfter.set(nums[0], [nums[1]]);
    }
    
    if (mapBefore.get(nums[1])) {
      const curVal = mapBefore.get(nums[1]);
      mapBefore.set(nums[1], [...curVal, nums[0]]);
    } else {
      mapBefore.set(nums[1], [nums[0]]);
    }
    
  });
});

let uText = "";

rdFile2(dataUpdates).then(() => {
  const updates = uText.match(/.+$/gm);

  for (let i = 0; i < updates.length; i++) { // Loop over each update
    let invalid = false;
    const update = updates[i].split(",");

    for (let j = 0; j < update.length; j++) { // Loop over each value in update
      const key = update[j];
      const beforeRules = mapBefore.get(key);
      const afterRules = mapAfter.get(key);

      for (let k = j + 1; k < update.length; k++) { // following
        if (beforeRules.includes(update[k])) { // violation
          invalid = true;
          break;
        }
      }

      if (invalid) break;
      
      for (let m = 0; m < j; m++) {
        if (afterRules.includes(update[m])) { // violation
          invalid = true;
          break;
        }
      }
      
      if (invalid) break;
    }

    if (!invalid) {
      const mid = update[Math.floor(update.length / 2)];
      total += parseInt(mid);
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

async function rdFile2(file) {
  try {
    const data = await readFile(file);
    uText = data.toString();
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}
