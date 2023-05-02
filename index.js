const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Chef is Cooking!')
  })

  app.listen(port, () => {
    console.log(`Chef api is running on port ${port}`)
  })