const express = require('express')
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const index = require("./routes/index")

var port = 8004

app.set('views', `${__dirname}/views`)
app.engine('.html', handlebars({ extname: '.html', defaultLayout: false }))
app.set('view engine', '.html')

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/static`))

app.use("/", index)

if (process.env.WEB_PORT) {
    port = process.env.WEB_PORT
}

app.use((req, res, next) => {
    res.status(404).send("This site does not exist, sneaky person")
})

http.listen(port, () => {
    console.log(`Listening at port ${port}`)
})
