// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    var numPl = Math.floor((Math.random() * 50) + 1);
    var player = new YT.Player("player", {
        width: '100%',
        playerVars: {
            listType:'playlist',
            list:'PLgPtEAlwxgkmEam7CnDEloZk0KQGQjQTU',
            index: numPl,
            autoplay: 1,
},
        events: {
            'onReady': function (event) {
                //event.target.cuePlaylist({list: "PLgPtEAlwxgkmEam7CnDEloZk0KQGQjQTU"});
                //event.target.playVideo();
                setTimeout(function() {
                    event.target.setShuffle({'shufflePlaylist' : true});
                }, 1000);
            }
        }
    });
}
