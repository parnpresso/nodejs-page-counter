const express = require('express');

const app = express();
const port = 8000;

app.use('/page-viewed', (req, res) => {
  const fs = require('fs');
  fs.writeFile("../counter.txt", "Hey there!", function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
    return res.status(200).json({});
  });
  }
);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
