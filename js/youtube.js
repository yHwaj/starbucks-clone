var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() { //유튜브 API 호출 값
  new YT.Player('player', { // player라는 id값 호출
    videoId: 'An6LvWQuj_8', // 최초 재생되는 유튜브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8' // 반복재생 시킬 유튜브 영상 ID
    },
    events: {
      onReady: function(event) {
        event.target.mute() // 음소거
      }
    }
  });
}