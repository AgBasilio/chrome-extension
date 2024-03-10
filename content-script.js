chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    var video = document.querySelector('video');
    if (video) {
        if (message.action === 'normalSpeed') {
                video.playbackRate = 1;
        } else if (message.action === 'threeTimesSpeed') {
            video.playbackRate = 3;
        } else if (message.action === 'foutThimesSpeed') {
            video.playbackRate = 4;
        }
    }
});