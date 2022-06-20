//  https://itunes.apple.com/search?term=jack+johnson

function getSongBySingerNameFetch(singerName) {//ecma 6
  const url = `https://itunes.apple.com/search?term=${singerName}&limit=10`;

  // fetch(url,
  // {
  //   method:'GET',
  //   // body:
  //   // headers:
  // })
  const promise = fetch(url);
  promise.then(
    (resp) => {
      resp
        .json()
        .then((allSongs) => {
          console.log(allSongs);
          renderAllSongs(allSongs.results);
        })
        .catch((err) => console.log("uanble to convert to json", err));

      document.querySelector("#loaderImage").classList.add("hide");
    },
    (err) => {
      console.log("unable to fetch data from server ", err);
    }
  );
}

async function getSongBySingerFetchAwait(singerName) {//ecma 8
  const url = `https://itunes.apple.com/search?term=${singerName}&limit=10`;

  try {
    const reponse = await fetch(url);
    const data = await reponse.json();
    
    document.querySelector("#loaderImage").classList.add("hide");
    
    renderAllSongs(data.results);
  } catch {
    (err) => console.log("Error is ", err);
  }
}

function getSongBySinger(singerName) {
  var xmlHTTPRequest = new XMLHttpRequest();
  const url = `https://itunes.apple.com/search?term=${singerName}&limit=10`;
  xmlHTTPRequest.onreadystatechange = function () {
    console.log("ready state call", this.readyState);
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector("#loaderImage").classList.add("hide");
      // console.log("data is", this.responseText, "type", this.responseType);

      convertToJson(this.responseText);
    }
  };

  xmlHTTPRequest.open("GET", url, true); //async true default //sync false
  xmlHTTPRequest.send(null); //get thi ..koi data nhi bhejna tayh

  // if(window.XMLHttpRequest){

  // }
  // else {
  //   window.ActiveXObject()//old ie browsers
  // }
}
