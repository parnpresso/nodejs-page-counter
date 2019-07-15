const express = require('express');
const fs = require('fs');

const app = express();
const port = 8000;

app.use('/page-viewed', (req, res) => {
  fs.appendFile("../counter.txt", `Visited at: ${req.baseUrl}\r\n`, function(err) {
    if(err) { return console.log(err); }
    console.log(`Visited at: ${req.baseUrl}`);
    return res.status(200).json({});
  });
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
