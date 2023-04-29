import express from "express";
import { requiredScopes } from "express-oauth2-jwt-bearer";
// import checkPermission from "../authz/check-permission";
// import jwtCheck from "../authz/jwtCheck";
import conversationalChain from './conversationalChain';
import { validateAccessToken } from "../middleware/auth0.middleware";
import retrievalChain from "./retrievalChain";

export const questionsRouter = express.Router();
// removed : requiredScopes('askQuestion')
questionsRouter.post("/chat", async (req, res) => { 
  const questionText = req.body.questionText;
  const chat_history = req.body.chatHistory || [];
  try {
    // Get the chain instance
    console.log(`chatText: `, questionText)
    const chain = await conversationalChain;
    // use OpenAI API to get answer to basic question
    const answer = await chain.call({ question: questionText, chat_history: chat_history });

    // return answer to client
    res.status(200).json(answer);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while getting the answer');
  }
});

questionsRouter.post("/retrieval", async (req, res) => { 
  const questionText = req.body.questionText;
  const chat_history = req.body.chatHistory || [];
  try {
    // Get the chain instance
    console.log(`questionText: `, questionText)
    const chain = await retrievalChain;
    // generate prompt
    const prompt = 'you are an ai which answers questions in in depth way. Please also return a list of any web addresses found in the sources ' + questionText
    console.log(`prompt: `, prompt)
    // use OpenAI API to get answer to basic question
    const answer = await chain.call({ query: prompt });

    // return answer to client
    res.status(200).json(answer);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while getting the answer');
  }
});

questionsRouter.post("/documents", async (req, res) => { 
  const questionText = req.body.questionText;
  const chat_history = req.body.chatHistory || [];
  try {
    // Get the chain instance
    console.log(`questionText: `, questionText)
    const chain = await retrievalChain;
    // generate prompt
    const prompt = 'you are an ai which answers questions in in depth way. Please also return a list of any web addresses found in the sources ' + questionText
    console.log(`prompt: `, prompt)
    // use OpenAI API to get answer to basic question
    const answer = await chain.call({ query: prompt });

    // return answer to client
    res.status(200).json(answer);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while getting the answer');
  }
});
