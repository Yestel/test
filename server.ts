import * as dotenv from "dotenv"
import express from "express"
const app = express()

import routes from "./routes/all"
import errorHandler from "./helpers/errorHandler"

dotenv.config()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes.forEach((route: any) => {
	app[route.method as keyof typeof app](route.path, route.controller)
})

app.get("/", (req: express.Request, res: express.Response) => {
	res.send("Hello World")
})

app.use(errorHandler)

app.listen(port, function () {
	console.log(`Node server running @ http://localhost:${port}`)
})
