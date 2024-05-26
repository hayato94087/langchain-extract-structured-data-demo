import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import 'dotenv/config'

// model
const model = new ChatOpenAI({
  model: "gpt-3.5-turbo",
  temperature: 0
});


const parameters = {
  title: "Joke",
  type: "object",
  properties: {
    setup: { type: "string", description: "ジョークの前置き" },
    punchline: { type: "string", description: "ジョークのオチ" },
    rating: { type: "number", description: "ジョークの面白さを1から10で評価"}
  },
  required: ["setup", "punchline"],
}

// structured output
const llm = model.withStructuredOutput({
  name: "joke",
  description: "ユーザーに伝えるジョーク",
  parameters
});

// invoke
const result = await llm.invoke("猫についてジョークを言ってください");
console.log(result)



