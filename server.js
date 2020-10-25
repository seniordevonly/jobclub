const express = require('express');

const app = express();

app.use(express.static('./dist/jobclub'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/jobclub' }
  );
});

app.listen(process.env.PORT || 8085);

console.log(`Running on port ${process.env.PORT || 8085}`)
