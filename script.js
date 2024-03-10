document.getElementById('button1x').addEventListener('click', function() {
    // $('video').playbackRate=1
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log("button x1 pressed");
        chrome.tabs.sendMessage(tabs[0].id, {action: 'normalSpeed'});
    });
});

document.getElementById('button3x').addEventListener('click', function() {
    // $('video').playbackRate=3;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'threeTimesSpeed'});
    });
});

document.getElementById('button4x').addEventListener('click', function() {
    // console.log("Hey! si!");
    // chrome.extension.getBackgroundPage().console.log('foo');
    // $('video').playbackRate=4;
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log("logging msg");
        chrome.tabs.sendMessage(tabs[0].id, {action: 'foutThimesSpeed'});
    });
});
