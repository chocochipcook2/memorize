const fs = require('fs');

fs.readFile('./localDataEdit/first.txt', (err, data) => {
  if (err) throw err;
  let questions = data.toString().split('Q');

  console.log(questions[1]);
});
