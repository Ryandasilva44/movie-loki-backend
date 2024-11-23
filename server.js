const express = require("express");
const cors = require("cors");
const app = express();

app.use("/public", express.static("public"));

app.use(cors());
app.use(express.json());

// Rota para obter os dados do filme
app.get("/api/movie", (req, res) => {
  res.json({
    title: "Loki",
    description:
      "Loki, o Deus da Trapaça, embarca em aventuras caóticas em diferentes linhas do tempo.",
    poster:
      "http://localhost:5000/public/Loki.jpeg", // URL do pôster
    trailer: "https://www.youtube.com/embed/nW948Va-l10", // URL do trailer
  });
});

const PORT =  process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor escutando na porta ${PORT}`));
