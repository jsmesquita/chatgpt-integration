const express = require("express")

const promptController = require("../controllers/prompt-controller")
const ingredientsController = require("../controllers/ingredients-controller")

const routes = express.Router()

routes.post("/api/v1/prompt", promptController.sendText)

routes.get("/api/v1/ingredients", ingredientsController.get)

module.exports = routes