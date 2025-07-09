import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCKwxkM-fI1vq0-EdEvLlPNbMglC67xE9s" // use your real key or env var
});

async function main() {
  const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" }); // or "gemini-pro" etc.
  const result = await model.generateContent("Explain how AI works in a few words");

  const response = await result.response;
  const text = response.candidates[0].content.parts[0].text;

  console.log(text);
}

main();
