//  https://itunes.apple.com/search?term=jack+johnson

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

  xmlHTTPRequest.open("GET", url);
  xmlHTTPRequest.send(null); //get thi ..koi data nhi bhejna tayh

  // if(window.XMLHttpRequest){

  // }
  // else {
  //   window.ActiveXObject()//old ie browsers
  // }
}
