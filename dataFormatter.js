const dataFormatter = (str) => {
  const arr = [];
  const regex = /\b[\w']+\b/g;
  
  const res = str.match(regex) ?? [];

  for (let i = 0; i < res.length; i += 2) {

  }
}

console.log((dataFormatter(text)));
