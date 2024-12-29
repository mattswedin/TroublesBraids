const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config()
const port = process.env.PORT || 3000;

// middleware setup
app.use(express.json({limit: "23mb"}));
app.use((express.urlencoded({linit:"25mb"})));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
  origin: 'http://localhost:5173/',
  credentials: true
}))

main().then(() => console.log("MongoDB is successfully connected!")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.get('/', (req, res) => {
    res.send(`Trouble's Braids' server is running....!`)
  })

}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})