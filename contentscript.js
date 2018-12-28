

    let object = {popup: "index.html"}
    chrome.browserAction.setPopup(object, function(){
        chrome.storage.sync.get(null, function(result) {
            Object.keys(result).forEach( key => {
                //result[key]

                var a = document.createElement('a');
                var linkText = document.createTextNode(result[key].selectionText);
                a.appendChild(linkText);
                a.title = result[key].linkUrl; // this is what pops up when you hover over link
                a.href = result[key].linkUrl;
                a.target = "blank"

    
                let node = document.createElement("li");                 // Create a <li> node
                node.appendChild(a);
                

                var button = document.createElement("button");
                button.innerHTML = "delete";
                button.style.background = "white";
                button.style.fontSize = "10px";
                button.style.marginLeft = "10px";
                button.style.paddingLeft = "2px";
                button.style.paddingRight = "2px";
                button.onclick = function(event){
                    chrome.storage.sync.remove(key, function() {
                        document.getElementById("links").removeChild(node);
                    });
                }



                //button.style.padding-left = "0px";
                //button.style.margin-left = "10px";
                node.appendChild(button);
                console.log("node: ", node);





                document.getElementById("links").appendChild(node);     // Append <li> to <ul> with id="links"
            }); 
              
          });
    });


u


    // chrome.runtime.onInstalled.addListener(function() {
    //     chrome.contextMenus.remove({
    //         title: "Delete Link from List",
    //         contexts: ["link"],
    //         id: "ihafdcahhkonpnpofmeddcfedheoffgi"
    //     })
    // })

   //onclick
    //delete from storage object
    //remove the item visually

