const express = require('express');
const app =  express();
app.use(express.json());

const postRouter = require("./routes/routes");

app.use('/', postRouter);

app.listen(3700, () => {
    console.log('Server is runing...');
});