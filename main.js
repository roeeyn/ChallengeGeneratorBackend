const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Todo al 100 en el server"));

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
