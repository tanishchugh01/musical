window.addEventListener("load", bindEvents);

function bindEvents() {
  document.querySelector("#search").addEventListener("click", searchBySinger);

  document.querySelector("#singer").addEventListener("keyup", (evt) => {
    if (evt.keyCode === 13) {
      searchBySinger();
    }
  });

  document.querySelector("#singer").focus();
}

function searchBySinger() {
  var singerName = document.querySelector("#singer").value;

  if (singerName) {
    console.log(singerName);
    var outputDiv = document.querySelector("#output");

    outputDiv.replaceChildren();

    document.querySelector("#loaderImage").classList.remove("hide");
    // getSongBySinger(singerName);
    // getSongBySingerNameFetch(singerName);
    getSongBySingerFetchAwait(singerName);
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
    card.className = "card col-lg-5";
    // card.style.width = "30%";

    var image = document.createElement("img");
    image.src = songDetail.artworkUrl100;
    image.className = "card-img-top";
    image.alt = "songImage";

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var newTitle = document.createElement("h5");
    newTitle.innerText = `${songName}`; //${index + 1}.)
    newTitle.className = "card-title";

    var audio = document.createElement("audio");
    audio.src = songDetail.previewUrl;
    audio.controls = true;

    cardBody.appendChild(newTitle);
    cardBody.appendChild(audio);

    card.appendChild(image);
    card.appendChild(cardBody);

    // card.appendChild(image);
    // card.appendChild(newTitle);
    // card.appendChild(audio);

    outputDiv.appendChild(card);
  });
}

random();