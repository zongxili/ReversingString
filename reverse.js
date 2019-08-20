let array = process.argv.slice(2, process.argv.length);
for (let i = 0; i < array.length; i++) {
  let tempWord = "";
  for (let j = (array[i].length - 1); j >= 0; j --) {
    tempWord = tempWord + array[i][j];
  }
  console.log(tempWord);
}