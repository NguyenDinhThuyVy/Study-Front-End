window.addEventListener("load", function () {
  const song = document.querySelector("#song");
  const playButton = document.querySelector(".player-play");
  const prevButton = document.querySelector(".player-prev");
  const nextButton = document.querySelector(".player-next");
  const duration = document.querySelector(".player-duration");
  const remaining = document.querySelector(".player-remaining");
  const range = document.querySelector("#progress-bar");
  const playerImage = document.querySelector(".player-image");
  const name = document.querySelector(".name");
  let playing = true;
  const list = ["holo.mp3", "home.mp3", "spark.mp3", "summer.mp3"];
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
      songIndex++;
      // console.log("next music");
      if (songIndex > list.length - 1) {
        songIndex = 0;
      }
      song.setAttribute("src", `./files/${list[songIndex]}`);
      playing = treu;
      handleMusicPlay();
      // console.log(list[0]);
    } else if (dir === -1) {
      songIndex--;
      song.setAttribute("src", `./files/${list[songIndex]}`);
    }
  }
  function handleMusicPlay(e) {
    if (playing) {
      song.play();
      playerImage.classList.add("is-playing");
      playButton.classList.add("fa-pause");
      playing = false;
    } else {
      song.pause();
      playerImage.classList.remove("is-playing");
      playButton.classList.remove("fa-pause");
      playing = true;
    }
  }
});
