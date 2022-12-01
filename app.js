/* Constantes Base */
const express = require("express");
const app = express();
const path = require("path");
const port = 3030

/* Elementos estaticos */
app.use(express.static("public"));

/* Rutas */
app.get("/",(req,res) => res.sendFile(path.resolve(__dirname, "views", "Home.html")));

/* Servidor */
app.listen(3030, () => console.log(`Servidor levantado en Puerto ${port}`));