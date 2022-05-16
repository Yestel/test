import userController from "../controllers/user"
import express from "express"
const router = express.Router()

const createUser = {
	path: "/api/public/user",
	method: "post",
	controller: userController.createUser
}

const getUser = {
	path: "/api/public/user/:id",
	method: "get",
	controller: userController.getUser
}

const getUsers = {
	path: "/api/public/users",
	method: "get",
	controller: userController.getUsers
}

const updateUserByEmail = {
	path: "/api/public/user/email/:email",
	method: "put",
	controller: userController.updateUserByEmail
}

const deleteUser = {
	path: "/api/public/user/:id",
	method: "delete",
	controller: userController.deleteUser
}

const getUserByEmail = {
	path: "/api/public/user/email/:email",
	method: "get",
	controller: userController.getUserByEmail
}

const getUserByName = {
	path: "/api/public/user/name/:name",
	method: "get",
	controller: userController.getUserByName
}

export default [createUser, getUser, getUsers, updateUserByEmail, deleteUser, getUserByEmail, getUserByName]
