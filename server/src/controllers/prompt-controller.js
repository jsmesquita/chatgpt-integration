const openai = require("../configs/openai.config")
const inputPrompt = require("../models/input-prompt")

module.exports = {
    async sendText(req, res) {
        const openaiAPI = openai.configuration()
        const inputModel = new inputPrompt(req.body)

        try {

            const response = await openaiAPI.chat.completions.create(openai.completion(inputModel))
            console.log(response)

            return res.status(200).json({
                success: true,
                data: response.choices[0].message.content
            })
        } catch (error) {
            console.log(error)
            return res.status(200).json({
                success: false,
                data: error.response ? error.response : "I can't provide answer because there is a erro on the server."
            })
        }
    }
}