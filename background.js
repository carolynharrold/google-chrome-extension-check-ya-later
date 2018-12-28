// includes important events to listen for

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: "Add to Check Ya Later",
        contexts: ["link"],
        id: "ihafdcahhkonpnpofmeddcfedheoffgi"
    })
}
)


chrome.contextMenus.onClicked.addListener(function(link) {
    function storeURL() {
        let obj = {};
        obj[link.selectionText] = link
        chrome.storage.sync.set(obj, function() {        
  });
    }
    storeURL();
})







