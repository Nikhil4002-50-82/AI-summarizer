chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === "GET_SELECTED_TEXT") {
    const selectedText = window.getSelection().toString();
    sendResponse({ text: selectedText });
  }
});
