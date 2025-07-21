import { useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchSelectedText = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "GET_SELECTED_TEXT" }, (response) => {
        setInputText(response?.text || "");
      });
    });
  };

  const summarizeText = async () => {
    if (!inputText) return;
    setLoading(true);
    try {
      const res = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn", {
        method: "POST",
        headers: {
          Authorization: import.meta.env.VITE_HUGGINGFACE_TOKEN,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: inputText })
      });

      const data = await res.json();
      setSummary(data?.[0]?.summary_text || "Unable to summarize.");
    } catch (err) {
      setSummary("Error during summarization.");
    }
    setLoading(false);
  };

  return (
    <div className="w-80 h-auto p-4 bg-white rounded-xl shadow-lg font-custom text-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-purple-700">AI Summarizer</h1>
      <button
        className="w-full py-2 px-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium transition duration-200"
        onClick={fetchSelectedText}
      >
        Get Selected Text
      </button>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={5}
        className="w-full p-2 border rounded mt-4 mb-3 text-lg focus:outline-none"
        placeholder="Paste or fetch text..."
      />
      <button
        className="w-full py-2 px-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium transition duration-200"
        onClick={summarizeText}
        disabled={loading}
      >
        {loading ? "Summarizing..." : "Summarize"}
      </button>
      {summary && (
        <div className="mt-4 p-3 rounded-md bg-gray-200 border border-gray-300">
          <h2 className="text-lg font-semibold text-gray-600">Summary:</h2>
          <p className="text-lg mt-1">{summary}</p>
        </div>
      )}
    </div>
  );
};

export default App;