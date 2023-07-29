window.addEventListener("load", function () {
  const song = document.querySelector("#song");
  const playButton = document.querySelector(".player-play");
  const prevButton = document.querySelector(".player-prev");
  const nextButton = document.querySelector(".player-next");
  const playerduration = document.querySelector(".player-duration");
  const remaining = document.querySelector(".player-remaining");
  const progessBar = document.querySelector("#progress-bar");
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
  // song.addEventListener("ended", function () {
  //   handleChangeMusic(1);
  // });
  // song.duration -> fulltime of song
  function handleChangeMusic(dir) {
    if (dir === 1) {
      songIndex++;
      // console.log("next music");
      if (songIndex > list.length - 1) {
        songIndex = 0;
      }
      song.setAttribute("src", `./files/${list[songIndex]}`);
      playing = true;
      handleMusicPlay();
      name.textContent = `${list[songIndex]}`;
      // console.log(list[0]);
    } else if (dir === -1) {
      songIndex--;
      if (songIndex < 0) {
        songIndex = list.length - 1;
      }
      song.setAttribute("src", `./files/${list[songIndex]}`);
      playing = true;
      handleMusicPlay();
      name.textContent = `${list[songIndex]}`;
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
  function displayTimer() {
    const { duration, currentTime } = song;
    progessBar.max = duration;
    progessBar.value = currentTime;
    remaining.textContent = formatTimer(currentTime);
    if (!duration) {
      playerduration.textContent = "00:00";
    } else {
      playerduration.textContent = formatTimer(duration);
    }
  }
  function formatTimer(second) {
    const minutes = Math.floor(second / 60);
    const seconds = Math.floor(second) - minutes * 60;
    return `0${minutes}`.slice(-2) + `:` + `0${seconds}`.slice(-2);
  }
  progessBar.addEventListener("change", function (e) {
    song.currentTime = progessBar.value;
  });
  const timer = this.setInterval(displayTimer, 1000);
});
