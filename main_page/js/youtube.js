var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player("player_1", {
    width: "1280",
    height: "720",
    videoId: "NJHyeZSAdw4",
    playerVars: {
      controls: 1,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
  new YT.Player("player_2", {
    width: "1280",
    height: "720",
    videoId: "NJHyeZSAdw4",
    playerVars: {
      controls: 1,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
  new YT.Player("player_3", {
    width: "1280",
    height: "720",
    videoId: "NJHyeZSAdw4",
    playerVars: {
      controls: 1,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
  event.target.setVolme(50);
}
