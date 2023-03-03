const express = require("express");
const path = require("path");
const app = express();
const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 3000


app.use(express.static(path.join(__dirname, "build")));
app.name = 'portfolio client'
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});



app.listen(port, () => {
    console.log(`cliente levantado y recibiendo en el puerto ${port}`)
} );
