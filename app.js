const express = require("express");
const app = express();

const postsRouter = require("./routers/posts");

// middleware per leggere JSON
app.use(express.json());

// rotte
app.use("/posts", postsRouter);

app.listen(3000, () => {
    console.log("Server in ascolto sulla porta 3000");
});