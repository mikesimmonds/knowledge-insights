import express from "express";
import { requiredScopes } from "express-oauth2-jwt-bearer";
// import checkPermission from "../authz/check-permission";
// import jwtCheck from "../authz/jwtCheck";
import conversationalChain from './openai';

export const questionsRouter = express.Router();
// removed : requiredScopes('askQuestion')
questionsRouter.post("/ask", async (req, res) => { 
  const questionText = req.body.questionText;
  const chat_history = req.body.chatHistory || [];
  try {
    // Get the chain instance
    console.log(`questionText: `, questionText)
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
