typescript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const generateHaiku = async (belief: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: "Eres un poeta experto en neurociencia y filosofía Kintsugi. Responde SOLO con el haiku."
    });

    const prompt = `Transforma esta creencia en haiku 5-7-5 en español: "${belief}"`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error(error);
    return "Error al crear haiku";
  }
};


*TERMINAL:*

npm install @google/generative-ai


*.env:*

VITE_GEMINI_API_KEY=AIzaSyCTi-LOaJyzELaZ7YPdpByLDobVksnG-vk

