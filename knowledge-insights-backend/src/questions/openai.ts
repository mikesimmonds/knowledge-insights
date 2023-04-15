// openai.js

// import { OpenAI } from "langchain/llms";
// import { ConversationalRetrievalQAChain } from "langchain/chains";
// import { HNSWLib } from "langchain/vectorstores";
// import { OpenAIEmbeddings } from "langchain/embeddings";
const path = require('path');


async function createChain(): Promise<any> {
  const { OpenAI } = await import("langchain/llms");
  const { ConversationalRetrievalQAChain } = await import("langchain/chains");
  const { HNSWLib } = await import("langchain/vectorstores");
  const { OpenAIEmbeddings } = await import("langchain/embeddings");

  const model = new OpenAI({ openAIApiKey: process.env.OPEN_API_KEY, temperature: 0 })
  
  const directory = path.resolve(__dirname, '../../docVectorStore');
  console.log(`directory: `, directory)
  const vectorStore = await HNSWLib.load(
    directory,
    new OpenAIEmbeddings({ openAIApiKey: process.env.OPEN_API_KEY })
  )
  return ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever()
  );
}

// Create a singleton chain
const chain = createChain();

export default chain;
