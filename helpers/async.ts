import express from "express"

const asyncWrapper = (asyncFunction: Function) => {
	return (req: express.Request, res: express.Response, next: express.NextFunction) => {
		asyncFunction(req, res).catch(next)
	}
}

export default asyncWrapper
