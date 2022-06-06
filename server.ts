import * as dotenv from "dotenv"
import express from "express"
const app = express()

dotenv.config()
const port = process.env.PORT || 8081

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req: express.Request, res: express.Response) => {
	res.send("Hello World 1")
})

console.log(process.env.MY_ENV_VAR)

app.listen(port, function () {
	console.log(`Node server running @ http://localhost:${port}`)
})
