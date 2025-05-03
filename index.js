const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, DevOps 2.0!"));

// ✅ Só inicia o servidor se for execução direta (não nos testes)
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`App rodando na porta ${port}`));
}

module.exports = app;
