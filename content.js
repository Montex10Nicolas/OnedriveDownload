console.log("////////");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Message received");
  console.log(request, sender, sendResponse);
  sendResponse("nonhoidea: " + JSON.stringify("request"));
});
