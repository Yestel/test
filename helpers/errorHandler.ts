import express from "express"

const errorHandler = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
	if (err.name === "ValidationError") {
		const errors = Object.keys(err.errors).map(key => err.errors[key].message)
		return res.status(422).json({ errors })
	}

	if (err.name === "JsonWebTokenError") {
		return res.status(401).json({ errors: ["Invalid token"] })
	}

	if (err.name === "TokenExpiredError") {
		return res.status(401).json({ errors: ["Token expired"] })
	}

	var statusCode = err.statusCode || 400
	return res.status(statusCode).json({ err: err.message })
}

export default errorHandler
