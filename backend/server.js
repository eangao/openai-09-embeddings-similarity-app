const express = require("express");
const dotenv = require("dotenv");
const app = express();

app.use(express.json()); //accept json data in requests

//environment variables
dotenv.config();

// importing functions
const getEmbedding = require("./utils/getEmbedding.js");
const cosineSimilarity = require("./utils/cosineSimilarity.js");

//OpenAIApi Configuration
const { Configuration, OpenAIApi } = require("openai");
const e = require("express");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//runCompletion
async function runCompletion(prompt) {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-16k",
    messages: [
      { role: "system", content: "You are a doctor." },
      { role: "user", content: prompt },
    ],
    temperature: 1,
    max_tokens: 50,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response;
}

app.post("/api/similarity", async (req, res) => {
  try {
    const { text1, text2 } = req.body;

    //embedding 1
    const embedding1 = await getEmbedding(text1);

    //embedding 2
    const embedding2 = await getEmbedding(text2);

    //similarity
    const similarity = cosineSimilarity(embedding1, embedding2);

    res.json({ embedding1, embedding2, similarity });

    // Return the completion as a JSON response
    res.json({ data: completion.data });
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
