const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5001;

express()
  .use(express.static(path.join(__dirname, './docs')))  // Serves your project root as static
  .get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))  // Fallback to index.html
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
