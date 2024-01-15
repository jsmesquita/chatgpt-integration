const express = require("express")

const promptController = require("../controllers/prompt-controller")

const routes = express.Router()

routes.post("/api/v1/prompt", promptController.sendText)

module.exports = routes