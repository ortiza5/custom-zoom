chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({ increment: "50", default: "150" }, function () {
    console.log("Initial values set...");
  });
});

chrome.commands.onCommand.addListener(function (command) {
  console.log("Command: ", command);
});
