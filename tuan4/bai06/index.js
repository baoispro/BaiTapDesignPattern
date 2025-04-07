const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🔥 Hello from Node.js in Multi-stage Docker!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
