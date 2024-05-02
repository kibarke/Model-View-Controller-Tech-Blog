const express = require("express");

const PORT = 3001;

const app = express();

app.listen(3001,() => {
    console.log(`Listening on http://localhost:${PORT}`)
});