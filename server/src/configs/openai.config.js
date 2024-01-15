const OpenAI = require('openai');

const apiKey = process.env.OPENAI_API_KEY

const chatCompletion =


    module.exports = class openai {
        static configuration() {
            return new OpenAI({
                apiKey: process.env[apiKey],
            });
        }

        static completion({ prompt }) {
            return {
                messages: [{ role: 'user', content: `${prompt}` }],
                model: 'text-davinci-003',
            }
        }
    }