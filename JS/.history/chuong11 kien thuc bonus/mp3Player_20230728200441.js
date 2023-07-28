window.addEventListener("load", function () {
  const song = document.querySelector("#song");
  const playButton = document.querySelector(".player-play");
  const prevButton = document.querySelector(".player-prev");
  const nextButton = document.querySelector(".player-next");
  const duration = document.querySelector(".player-duration");
  const remaining = document.querySelector(".player-remaining");
  const range = document.querySelector("#progress-bar");
  const playerImage = document.querySelector(".player-image");
  let playing = true;
  playButton.addEventListener("click", handleMusicPlay);
  function handleMusicPlay(e) {
    if (playing) {
      playerImage.classList.add("is-playing");
      song.play();
      playing = false;
    } else {
      song.pause();
      playing = true;
    }
  }
});
