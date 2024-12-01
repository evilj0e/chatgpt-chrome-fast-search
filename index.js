chrome.omnibox.onInputEntered.addListener((text) => {
  const newURL = "http://chatgpt.com/?q=" + encodeURIComponent(text);
  chrome.tabs.create({ url: newURL });
});
