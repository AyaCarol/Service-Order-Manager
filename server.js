const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve arquivos estáticos (HTML, CSS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Rota raiz (opcional, pois o index.html já é servido automaticamente)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
