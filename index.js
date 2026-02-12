const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 7000;
const router = require('./routes/index')
// const cors = require('cors')

// app.use(cors({origin:'*'}))
app.use(cors({origin:7000}))

app.use(express.json())

app.use('/boom', router)


app.listen(PORT, () => {
    console.log("Сервер запущен на http://localhost:${PORT}");
})