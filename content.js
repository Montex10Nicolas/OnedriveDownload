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

  // change to rows.lenght
  for (let i = 0; i < 1; i++) {
    const row = rows[i].childNodes;

    // change to row.length
    for (let j = 0; j < 1; j++) {
      const element = row[j].childNodes;

      let clickable = element[0];

      console.log("prima", clickable.firstChild, clickable.lastChild);

      while (clickable.childElementCount == 1) {
        console.log("dentro", clickable);
        clickable = clickable.childNodes[0];
      }

      clickable.click();
    }
  }
}
