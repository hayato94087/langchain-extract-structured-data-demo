import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import 'dotenv/config'

// model
const model = new ChatOpenAI({
  model: "gpt-3.5-turbo",
  temperature: 0
});


// schema
const joke = z.object({
  setup: z.string().describe("ジョークの前置き"),
  punchline: z.string().describe("ジョークのオチ"),
  rating: z.number().optional().describe("ジョークの面白さを1から10で評価"),
});

// structured output
const llm = model.withStructuredOutput(joke);

// invoke
const result = await llm.invoke("猫についてジョークを言ってください");
console.log(result)