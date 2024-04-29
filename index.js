console.log("index");

const button = document.getElementById("button");

button.addEventListener("click", function () {
  console.log("premuto");
  chrome.tabs.query({ active: true, currentWindow: true }, function send(tabs) {
    console.log(tabs[0].id);

    chrome.tabs.sendMessage(
      tabs[0].id,
      { data: "scrape" },
      function res(response) {
        console.log("response: ", response);
      }
    );
  });
});
