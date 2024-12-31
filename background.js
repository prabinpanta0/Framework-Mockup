chrome.browserAction.onClicked.addListener(function () {

  console.log("MOCKUPME...");

  chrome.tabs.executeScript(null, {
    file: "mockupme.js"
  });

  chrome.tabs.insertCSS(null, {
    file: "inject/mockupme_inject.css"
  });

});


