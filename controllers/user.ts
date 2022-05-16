import db from "../models/user"
import express from "express"
import validator from "email-validator"
import asyncWrapper from "../helpers/async"
import bcrypt from "bcrypt"

export default {
	createUser: asyncWrapper(async (req: express.Request, res: express.Response) => {
		var { name, email, password } = req.body
		if (!name || !email || !password) res.status(400).json({ message: "name, email, password required" })
		if (!validator.validate(email)) res.status(400).json({ message: "email invalid" })
		var salt = await bcrypt.genSalt(10)
		var hashedPassword = await bcrypt.hash(password, salt)
		var sql = `INSERT INTO users (name, email, password)
					VALUES ('${name}', '${email}', '${hashedPassword}')`
		var query = await db(sql)
		res.status(200).json(query)
	}),

	getUser: asyncWrapper(async (req: express.Request, res: express.Response) => {
		var sql = `SELECT * FROM users WHERE id = ${req.params.id}`
		var query = await db(sql)
		res.status(200).json(query)
	}),

	getUsers: asyncWrapper(async (req: express.Request, res: express.Response) => {
		var limit = req.query.limit ? req.query.limit : 10
		var offset = req.query.offset ? req.query.offset : 0
		var sql = `SELECT * FROM users
					LIMIT ${limit} offset ${offset}`
		var query = await db(sql)
		res.status(200).json(query)
	}),

	updateUserByEmail: asyncWrapper(async (req: express.Request, res: express.Response) => {
		const { name, email, password } = req.body
		if (!name || !email || !password) res.status(400).json({ message: "name, email, password required" })
		if (!validator.validate(email)) res.status(400).json({ message: "email invalid" })
		var salt = await bcrypt.genSalt(10)
		var hashedPassword = await bcrypt.hash(password, salt)
		var sql = `UPDATE users
					SET name = '${name}', email = '${email}', password = '${hashedPassword}'
					WHERE email = ${req.params.email}`
		var query = await db(sql)
		res.status(200).json(query)
	}),

	deleteUser: asyncWrapper(async (req: express.Request, res: express.Response) => {
		var sql = `DELETE FROM users WHERE id = ${req.params.id}`
		var query = await db(sql)
		res.status(200).json(query)
	}),

	getUserByEmail: asyncWrapper(async (req: express.Request, res: express.Response) => {
		var sql = `SELECT * FROM users WHERE email = '${req.params.email}'`
		var query = await db(sql)
		res.status(200).json(query)
	}),

	getUserByName: asyncWrapper(async (req: express.Request, res: express.Response) => {
		var sql = `SELECT * FROM users WHERE name = '${req.params.name}'`
		var query = await db(sql)
		res.status(200).json(query)
	})
}
