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
  const list = ["holo.mp3", "summer.mp3", "home.mp3", "spark.mp3"];
  let songIndex = 0;
  playButton.addEventListener("click", handleMusicPlay);
  nextButton.addEventListener("click", function (e) {
    handleChangeMusic(1);
  });
  prevButton.addEventListener("click", function (e) {
    handleChangeMusic(-1);
  });
  function handleChangeMusic(dir) {
    if (dir === 1) {
    } else if (dir === -1) {
    }
  }
  function handleMusicPlay(e) {
    if (playing) {
      song.play();
      playerImage.classList.add("is-playing");
      e.target.classList.add("fa-pause");
      playing = false;
    } else {
      song.pause();
      playerImage.classList.remove("is-playing");
      e.target.classList.remove("fa-pause");
      playing = true;
    }
  }
});
