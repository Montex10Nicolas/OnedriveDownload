console.log("////////");

console.log(document);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);

  getAllElements();

  sendResponse("nonhoidea: " + JSON.stringify("request"));
});

function getAllElements() {
  const root = document.querySelector(
    "#appRoot > div > div.body_68bb4b5e.ready_68bb4b5e > div > div > div.core_68bb4b5e > div.view_68bb4b5e > main > div > div > div.od-ItemsScopeItemContent-list.od-ItemContent-list.list_59534c72 > div > div > div > div > div > div > div"
  );

  const rows = root.childNodes;

  const elements = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i].childNodes;

    for (let j = 0; j < row.length; j++) {
      const element = row[j].childNodes;

      let clickable = element[0];

      while (clickable.childElementCount == 1) {
        clickable = clickable.childNodes[0];
      }

      elements.push(clickable);
    }
  }

  for (let i = 0; i < elements.length; i++) {
    const copy = i;
    console.log("I'm running ", copy);

    setTimeout(() => {
      console.log("I'm clicking ", copy);
      elements[copy].click();

      setTimeout(() => {
        const downloadButton = document.querySelector(
          "#appRoot > div > div.body_68bb4b5e.ready_68bb4b5e > div > div > div.core_68bb4b5e > div.topBar_68bb4b5e > div > div > div > div > div > div.ms-OverflowSet.ms-CommandBar-primaryCommand.primarySet-44 > div:nth-child(2) > button > span"
        );
        downloadButton.click();
      }, 10);
    }, 1000 * i);
  }
}
