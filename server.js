import * as dotenv from "dotenv"
import express from "express"
const app = express()

dotenv.config()
const port = process.env.PORT || 8081
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
	res.send("Hello World 123")
})
// app.use(errorHandler)
app.listen(port, function () {
	console.log(`Node server running @ http://localhost:${port}`)
})
