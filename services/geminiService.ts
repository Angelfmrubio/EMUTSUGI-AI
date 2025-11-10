
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateHaiku = async (belief: string): Promise<string> => {
  try {
    const prompt = `Transforma la siguiente creencia limitante en un haiku neuroplástico que inspire resiliencia, en español, con la estructura 5-7-5. La creencia es: "${belief}"`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "Eres un poeta experto en neurociencia y la filosofía Kintsugi. Tu misión es reparar el alma con palabras. Responde únicamente con el haiku. No incluyas nada más.",
        temperature: 0.8,
        topP: 1,
        topK: 32,
      },
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating haiku:", error);
    return "No se pudo crear el haiku. Por favor, intenta de nuevo.";
  }
};
