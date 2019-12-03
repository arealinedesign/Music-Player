window.addEventListener("load", () => {
  const musics = document.querySelectorAll(".sound");
  const selectMusic = document.querySelectorAll(".music-selector h4");
  const pause = document.querySelector(".section .player .pause-button");
  const play = document.querySelector(".section .player .play-button");
  const stop = document.querySelector(".section .player .stop-button");
  const menu = document.querySelector(".section .menu");
  const selectorDev = document.querySelector(".section .music-selector ");
  const playerDiv = document.querySelector(".section .player ");
  const menuSvg1 = document.querySelector(".section .menu svg  #Rectangle4");
  const menuSvg2 = document.querySelector(".section .menu svg  #Rectangle5");
  const menuSvg3 = document.querySelector(".section .menu svg  #Rectangle6");
  const seekBarFill = document.querySelector(
    ".section .player .seek-bar .fill"
  );
  const prev = document.querySelector(
    ".section .player .whole-box .next-pre .prev"
  );
  const next = document.querySelector(
    ".section .player .whole-box .next-pre .next"
  );
  const controlBox = document.querySelector(".section .player .control-box");
  const playerBackground = document.querySelector(".section .player .bg-image");
  const nextPreBox = document.querySelector(
    ".section .player .whole-box .next-pre"
  );
  const colors = ["#ade6dd", "#f08080", "#80f098"];
  const backImage = [
    "url('images//Filhall-Ft.-Akshay-Kumar.jpg')",
    "url('images//10000hours.jpg')",
    "url('images//channa.JPG')",
    "url('images//fromFacebook1.jpg')"
  ];
  var currentSong;
  let firstPlay = -99;
  var menuClick = 1;
  console.log(musics.length);

  selectMusic.forEach((a, index) => {
    a.addEventListener("click", function() {
      if (firstPlay == -99) {
        var myVar = setInterval(myTimer, 1000);
        currentSong = index;
        musics[index].play();
        changeColor(index);
        firstPlay++;
      } else {
        if (currentSong == index) {
          selectMusic[currentSong].style.backgroundColor = "";
          currentSong = index;
          musics[index].play();
          changeColor(index);
        } else {
          musics[currentSong].load();
          selectMusic[currentSong].style.backgroundColor = "";
          currentSong = index;
          musics[index].play();
          changeColor(index);
        }
      }
    });
  });

  pause.addEventListener("click", function() {
    musics[currentSong].pause();
  });

  play.addEventListener("click", function() {
    musics[currentSong].play();
  });

  stop.addEventListener("click", function() {
    musics[currentSong].load();
  });

  menu.addEventListener("click", function() {
    if (menuClick % 2 == 0) {
      selectorDev.style.width = "0";
      selectorDev.style.opacity = "0";
      selectorDev.style.transition = "0.5s ease";
      playerDiv.style.transition = "0.5s ease";
      playerDiv.style.width = "100%";
      menu.style.left = "1rem";
      menuClick++;
    } else {
      selectorDev.style.width = "30%";
      selectorDev.style.transition = "0.5s ease";
      playerDiv.style.transition = "0.5s ease";
      selectorDev.style.opacity = "1";
      playerDiv.style.width = "70%";
      menu.style.left = "32%";
      menuClick++;
    }
  });

  prev.addEventListener("click", function() {
    if (currentSong <= 0) {
      selectMusic[currentSong].style.backgroundColor = "";
      musics[currentSong].load();
      currentSong = musics.length - 1;
      musics[currentSong].play();
      changeColor(currentSong);
    } else {
      selectMusic[currentSong].style.backgroundColor = "";
      musics[currentSong].load();
      currentSong = currentSong - 1;
      musics[currentSong].play();
      changeColor(currentSong);
    }
  });

  next.addEventListener("click", function() {
    if (musics.length - 1 <= currentSong) {
      selectMusic[currentSong].style.backgroundColor = "";
      musics[currentSong].load();
      currentSong = 0;
      musics[currentSong].play();
      changeColor(currentSong);
    } else {
      selectMusic[currentSong].style.backgroundColor = "";
      musics[currentSong].load();
      currentSong = currentSong + 1;
      musics[currentSong].play();
      changeColor(currentSong);
    }
  });

  function myTimer() {
    var position =
      musics[currentSong].currentTime / musics[currentSong].duration;
    seekBarFill.style.width = position * 100 + "%";

    // If the count down is over, write some text
    if (musics[currentSong].currentTime == musics[currentSong].duration) {
      //clearInterval(x);
      //seekBarFill.style.width = position * 100 + "%";

      if (musics.length - 1 <= currentSong) {
        selectMusic[currentSong].style.backgroundColor = "";
        musics[currentSong].load();
        currentSong = 0;
        musics[currentSong].play();
        changeColor(currentSong);
      } else {
        selectMusic[currentSong].style.backgroundColor = "";
        musics[currentSong].load();
        currentSong = currentSong + 1;
        musics[currentSong].play();
        changeColor(currentSong);
      }
    }
  }

  const changeColor = index => {
    selectMusic[currentSong].style.backgroundColor = colors[index % 3];
    controlBox.style.backgroundColor = colors[index % 3];
    menuSvg1.style.fill = colors[index % 3];
    menuSvg2.style.fill = colors[index % 3];
    menuSvg3.style.fill = colors[index % 3];
    nextPreBox.style.backgroundColor = colors[index % 3];
    playerBackground.style.backgroundImage = backImage[index];
    playerBackground.style.backgroundRepeat = "no-repeat";
    playerBackground.style.backgroundSize = "cover";
    playerBackground.style.filter = "blur(7px)";
  };
});
