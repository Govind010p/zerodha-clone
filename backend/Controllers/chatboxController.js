// Change the destructuring to look directly into the module's properties
const GoogleGenAI = require("@google/genai").GoogleGenAI;

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const chatController = async (req, res) => {
  try {
    const { message, history } = req.body;

    const contents = [
      ...(history || []),
      {
        role: "user",
        parts: [{ text: message }],
      },
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
    });

    res.json({
      reply: response.text,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Exporting it cleanly as an object property
module.exports = { chatController };