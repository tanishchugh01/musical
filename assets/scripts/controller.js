window.addEventListener("load", bindEvents);

function bindEvents() {
  document.querySelector("#search").addEventListener("click", searchBySinger);
}

function searchBySinger() {
  var singerName = document.querySelector("#singer").value;

  if (singerName) {
    console.log(singerName);
    var outputDiv = document.querySelector("#output");

    outputDiv.replaceChildren();

    document.querySelector("#loaderImage").classList.remove("hide");
    getSongBySinger(singerName);
  }
}

function convertToJson(data) {
  var allSongs = JSON.parse(data).results;

  console.log(allSongs);

  renderAllSongs(allSongs);
}

function renderAllSongs(allSongs) {
  var outputDiv = document.querySelector("#output");

  allSongs.map((songDetail, index) => {
    var songName = songDetail.trackName;
    // console.log(songName);
    var card = document.createElement("div");

    var image = document.createElement("img");
    image.src = songDetail.artworkUrl60;

    var newTitle = document.createElement("h5");
    newTitle.innerText = `${index + 1}.) ${songName}`;

    var audio = document.createElement("audio");
    audio.src=songDetail.previewUrl;
    audio.controls = true;

    card.appendChild(image);
    card.appendChild(newTitle);
    card.appendChild(audio);

    outputDiv.appendChild(card);
  });
}
