# AI Summarizer - Chrome Extension

A modern Chrome Extension built with **React**, **Vite**, and **Tailwind CSS**. It uses Hugging Face’s Transformers API to fetch and display the **summarized content** of the current active browser tab. The summarization is powered by a language model via Hugging Face Inference API.

## How to Clone and Use This Extension

### 1. Clone the Repository

```bash
git clone https://github.com/Nikhil4002-50-82/AI-Summarizer.git
cd AI-Summarizer/extension
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a Hugging Face Bearer Token

To use the summarization API, you need a Hugging Face account and a token:

1. Go to [https://huggingface.co](https://huggingface.co)
2. Create a free account or sign in
3. Navigate to your settings → **Access Tokens** ([https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens))
4. Click **New token**, give it a name, select **read** access, and copy the token

### 4. Create a `.env` File

Inside the `extension` directory, create a file named `.env` and add the following:

```bash
VITE_HUGGINGFACE_API_TOKEN=your_token_here
```

Replace `your_token_here` with the token you copied from Hugging Face.

### 5. Build the Extension

```bash
npm run build
```

### 7. Load the Extension in Chrome

1. Open Chrome and navigate to: `chrome://extensions/`
2. Enable **Developer Mode** (toggle on top right)
3. Click **Load Unpacked**
4. Select the `dist/` folder inside the `extension/` directory

## Resources

* [Chrome Extensions - Getting Started](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
* [Tailwind CSS Documentation](https://tailwindcss.com/docs)
* [Vite Documentation](https://vitejs.dev/guide/)
* [Hugging Face Inference API](https://huggingface.co/inference-api)

## Author

**Nikhil R Nambiar**
